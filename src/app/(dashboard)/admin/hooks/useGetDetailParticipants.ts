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
    guardian_phone: string;
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

export const detailDefaultValue = {
  id: 0,
  name: '',
  user_id: 0,
  participant_number: '',
  email: '',
  postal: 0,
  phone: '',
  instance_name: '',
  instance_address: '',
  participant_detail: {
    id: 0,
    participant_id: 0,
    guardian_phone: '',
    student_id: '',
    student_id_url: '',
    status: '',
    type: '',
    sub_type: '',
  },
  postal_detail: {
    code: 0,
    district: '',
    regency: '',
    province: '',
    region: '',
  },
};

export default function useGetDetailParticipants(id: string) {
  const { data, isLoading } = useQuery<GetParticipants>({
    queryKey: ['get-detail-', id],
    queryFn: async () => {
      const { data } = await api.get('/participants/' + id);

      return data.data;
    },
    refetchOnWindowFocus: true,
  });

  return { data, isLoading };
}
