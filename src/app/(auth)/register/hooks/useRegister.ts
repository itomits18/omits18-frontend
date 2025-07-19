import api from '@/lib/api';
import { ApiError } from '@/types/api';
import { LoginSchema } from '@/validation/LoginSchema';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { z } from 'zod';

export default function useRegister() {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationKey: ['register-user'],
    mutationFn: async (dataLogin: z.infer<typeof LoginSchema>) => {
      const { data } = await api.post('/auth/register', dataLogin);
      return data.data;
    },
    onSuccess: () => {
      toast.success('Berhasil mengirim email verifikasi.');

      router.push('/login');
    },
    onError: (err: { response: { data: ApiError } }) => {
      toast.error(err.response.data.message);
    },
  });

  return { mutate, isPending };
}
