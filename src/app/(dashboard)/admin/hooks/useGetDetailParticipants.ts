import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export type GetParticipants = {
  id: number;
  name: string;
  user_id: number;
  participant_number: string;
  email: string;
  postal: number;
  phone: string;
  instance_name: string;
  instance_address: string;
  participant_detail: {
    id: number;
    participant_id: number;
    student_id: string;
    student_id_url: string;
    status: string;
    type: string;
    sub_type: string;
  };
  postal_detail: {
    code: number;
    district: string;
    regency: string;
    province: string;
    region: string;
  };
};

export default function useGetDetailParticipants(id: string) {
  const { data, isLoading } = useQuery<GetParticipants>({
    queryKey: ['get-detail'],
    queryFn: async () => {
      const { data } = await api.get('/participants/' + id);

      return data.data;
    },
  });

  return { data, isLoading };
}
