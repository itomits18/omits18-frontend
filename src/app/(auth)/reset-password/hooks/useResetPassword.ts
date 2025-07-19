import api from '@/lib/api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function useResetPassword() {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationKey: ['reset-password'],
    mutationFn: async (password: string) => {
      const { data } = await api.put('/auth/reset-password', {
        password,
      });

      return data.data;
    },
    onSuccess: () => {
      toast.success('Berhasil melakukan reset password');

      setTimeout(() => {
        router.replace('/login');
      }, 2000);
    },
    onError: () => {
      toast.error('Gagal melakukan reset password');
    },
  });

  return { mutate, isPending };
}
