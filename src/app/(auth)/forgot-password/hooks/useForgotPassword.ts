import api from '@/lib/api';
import { ApiError } from '@/types/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useForgotPassword(
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const { mutate, isPending, status } = useMutation({
    mutationKey: ['verify-user'],
    mutationFn: async (email: string) => {
      const { data } = await api.post('/smtp/send-reset-password', {
        to: email,
      });
      return data.data;
    },
    onSuccess: () => {
      setSuccess(true);
      toast.success('Mengirim email verifikasi');
    },
    onError: (err: { response: { data: ApiError } }) => {
      toast.error(err.response.data.message);
    },
  });

  return { mutate, isPending, status };
}
