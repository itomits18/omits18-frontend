import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export default function useGetAllLink() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-all'],
    queryFn: async () => {
      const { data } = await api.get('/links');

      return data.data;
    },
  });

  return { data, isLoading };
}
