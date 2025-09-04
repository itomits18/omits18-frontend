import api from '@/lib/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useEmailVerification() {
  const { mutate, isPending } = useMutation({
    mutationKey: ['email-verif'],
    mutationFn: async (email: string) => {
      const { data } = await api.post('/smtp/send-verification', {
        to: email,
      });

      return data.data;
    },
    onSuccess: () => {
      toast.success('Link verifikasi telah dikirim ke email kamu.');
    },
  });

  return { mutate, isPending };
}
