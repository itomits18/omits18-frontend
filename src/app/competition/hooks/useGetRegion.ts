import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

type regionType = {
  code: number;
  district: string;
  regency: string;
  province: string;
  region: string;
};

export default function useGetRegion(region: string) {
  const { data, isLoading, status } = useQuery<regionType>({
    queryKey: ['get-region', region],
    queryFn: async () => {
      const { data, status } = await api.get('/regions/' + region);

      if (status !== 200) return;

      return data.data;
    },
    enabled: !!region,
  });

  return { data, isLoading, status };
}
