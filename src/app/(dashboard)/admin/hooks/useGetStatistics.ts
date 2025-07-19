import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export default function useGetStatistics() {
  const { data, isLoading } = useQuery({
    queryKey: ['admin-statistic'],
    queryFn: async () => {
      const { data } = await api.get('/dashboard');

      return data.data;
    },
  });

  return { data, isLoading };
}
