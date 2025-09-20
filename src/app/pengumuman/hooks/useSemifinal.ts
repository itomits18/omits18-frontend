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
  score_link: string;
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
  } = useQuery<ApiResponse, Error>({
    queryKey: ['semifinal-status', searchParams],
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
    if (!data) return;

    if (data.code !== 200) {
      switch (data.code) {
        case 404:
          toast.error('Peserta tidak ditemukan');
          break;
        case 401:
          toast.error('Silakan login terlebih dahulu');
          break;
        default:
          toast.error(data.message || 'Terjadi kesalahan');
      }
      return;
    }

    const {
      participant_number,
      name,
      region,
      group_semi_final,
      sk_link,
      score_link,
      status,
    } = data.data;

    const params = new URLSearchParams({
      participantNumber: participant_number,
      name,
      region,
      groupSemiFinal: group_semi_final || '',
      skLink: sk_link || '',
      scoreLink: score_link || '',
    }).toString();

    const path =
      status === 'SEMI_FINAL' ? '/pengumuman/lolos' : '/pengumuman/gagal';
    router.push(`${path}?${params}`);
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
  };

  return {
    isSearching,
    checkSemifinalStatus,
  };
};
