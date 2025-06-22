import api from '@/lib/api';
import { ApiError } from '@/types/api';
import {
  RegistrationForm,
  RegistrationFormTeam,
} from '@/types/registrationForm';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { FormValues } from '../omits/registration/container/FormPage1';

export default function useRegistration(type: string) {
  const { mutate, isPending } = useMutation({
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
    onSuccess: (data: FormValues) => {
      console.log(data);
    },
    onError: (err: { response: { data: ApiError } }) => {
      toast.error(err.response.data.message);
    },
  });

  return { mutate, isPending };
}
