import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { customMetadata } from '../(container)/ModalExportData';

export default function useExportExcel(metadata: customMetadata) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['export-excel', metadata],
    queryFn: async () => {
      const { data } = await api.get('/participants/export', {
        params: metadata,
      });

      return data.data;
    },
  });

  return { data, isLoading, refetch };
}
