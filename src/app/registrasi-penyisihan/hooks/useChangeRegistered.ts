import api from '@/lib/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';

export type Participant = {
  id: number;
  name: string;
  instance_name: string;
  participant_number: string;
  participant_detail: {
    id: number;
    sub_type: string;
    status: 'VERIFIED' | 'REGISTERED' | string;
    student_id_url: string;
  };
  postal_detail: {
    region: string;
  };
};

type ApiResponse = {
  data: {
    items: {
      participants: Participant[];
    };
  };
};

export const useParticipantRegistration = () => {
  const [activeSearchQuery, setActiveSearchQuery] = useState<string>('');
  const queryClient = useQueryClient();

  const {
    data: foundParticipant,
    isFetching: isSearching,
    error: searchError,
  } = useQuery<Participant | null, Error>({
    queryKey: ['participant-search', activeSearchQuery],
    queryFn: async () => {
      const trimmedQuery = activeSearchQuery.trim();

      const params: Record<string, string> = {
        order_by: 'name',
        sort_by: 'asc',
        page: '1',
        limit: '10',
        search: trimmedQuery,
      };

      const { data } = await api.get<ApiResponse>('/participants', { params });

      const participants = data.data.items.participants;

      if (!participants || participants.length === 0) {
        return null;
      }

      const exactMatch = participants.find(
        (p) =>
          p.name.toLowerCase() === trimmedQuery.toLowerCase() ||
          p.participant_number === trimmedQuery,
      );

      return exactMatch || participants[0] || null;
    },
    enabled: !!activeSearchQuery,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const { mutate: updateRegistration, isPending: isUpdating } = useMutation({
    mutationFn: async (participantData: Participant) => {
      const baseString = participantData.participant_detail.student_id_url;
      const sliceString = baseString.startsWith('https://s3.jkt.dewavps.com')
        ? baseString.slice('https://s3.jkt.dewavps.com/omits-storage/'.length)
        : baseString;

      const payload = {
        ...participantData,
        participant_detail: {
          ...participantData.participant_detail,
          student_id_url: sliceString,
          status: 'REGISTERED',
        },
      };
      const { data } = await api.put(
        `/participants/${participantData.id}`,
        payload,
      );
      return data;
    },
    onSuccess: () => {
      toast.success('Status registrasi peserta berhasil diperbarui.');
      queryClient.invalidateQueries({
        queryKey: ['participant-search', activeSearchQuery],
      });
    },
    onError: (error) => {
      console.error('Update failed:', error);
      toast.error('Gagal memperbarui status registrasi.');
    },
  });

  const searchParticipant = (query: string) => {
    setActiveSearchQuery(query);
  };

  const markAsRegistered = () => {
    if (!foundParticipant) return;
    updateRegistration(foundParticipant);
  };

  return {
    isSearching,
    isUpdating,
    foundParticipant,
    searchError,
    searchParticipant,
    markAsRegistered,
  };
};
