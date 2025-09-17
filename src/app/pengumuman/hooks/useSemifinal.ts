import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export type ParticipantData = {
  participant_number: string;
  name: string;
  region: string;
  status: 'SEMI_FINAL' | string;
  result: 'Lolos' | string;
  group_semi_final: string;
  sk_link: string;
};

type ApiResponse = {
  code: number;
  message: string;
  data: ParticipantData;
};

type SearchParams = {
  participant_number: string;
  postal: string;
};

export const useSemifinal = () => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);

  const {
    data,
    isLoading: isSearching,
    error,
    refetch,
  } = useQuery<ApiResponse, Error>({
    queryKey: [
      'semifinal-status',
      searchParams?.participant_number,
      searchParams?.postal,
    ],
    queryFn: async () => {
      if (!searchParams) throw new Error('No search parameters');

      const { data } = await api.get(
        `/participants/announcement?participant_number=${searchParams.participant_number}&postal=${searchParams.postal}`,
      );
      return data;
    },
    enabled: !!searchParams,
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    if (data) {
      if (data.code !== 200) {
        if (data.code === 404) {
          toast.error('Peserta tidak ditemukan');
        } else if (data.code === 401) {
          toast.error('Silakan login terlebih dahulu');
        } else {
          toast.error(data.message || 'Terjadi kesalahan');
        }
        return;
      }

      const participant = data.data;

      const params = new URLSearchParams({
        participantNumber: participant.participant_number,
        name: participant.name,
        region: participant.region,
        groupSemiFinal: participant.group_semi_final || '',
        skLink: participant.sk_link || '',
      }).toString();

      if (participant.status === 'SEMI_FINAL') {
        router.push(`/pengumuman/lolos?${params}`);
      } else {
        router.push(`/pengumuman/gagal?${params}`);
      }
    }
  }, [data, router]);

  useEffect(() => {
    if (error) {
      toast.error(
        (error as any)?.response?.data?.message || 'Terjadi kesalahan',
      );
    }
  }, [error]);

  const checkSemifinalStatus = (params: SearchParams) => {
    setSearchParams(params);
    refetch();
  };

  return {
    isSearching,
    checkSemifinalStatus,
  };
};
