import api from '@/lib/api';
import { ApiError } from '@/types/api';
import {
  RegistrationForm,
  RegistrationFormTeam,
} from '@/types/registrationForm';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useRegistration(type: string) {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['post-registration'],
    mutationFn: async (
      dataRegistration: RegistrationForm | RegistrationFormTeam,
    ) => {
      const { data } = await api.post(
        '/participants' + (type !== 'single' ? '/bulk' : ''),
        dataRegistration,
      );

      return data.data;
    },
    onError: (err: { response: { data: ApiError } }) => {
      toast.error(err.response.data.message);
    },
  });

  return { mutateAsync, isPending };
}
