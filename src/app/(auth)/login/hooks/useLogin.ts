import useAuthStore from '@/app/store/useAuthStore';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import { ApiError, ApiResponse } from '@/types/api';
import { JWTType, User, withToken } from '@/types/user';
import { LoginSchema } from '@/validation/LoginSchema';
import { useMutation } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { z } from 'zod';

export default function useLogin() {
  const router = useRouter();
  const { login } = useAuthStore();

  const { mutate, isPending } = useMutation({
    mutationKey: ['login-user'],
    mutationFn: async (dataLogin: z.infer<typeof LoginSchema>) => {
      const { data } = await api.post('/auth/login', dataLogin);
      return data.data;
    },
    onSuccess: async (data: withToken) => {
      const role: JWTType = jwtDecode(data.token);

      setToken(data.token);

      const user = await api.get<ApiResponse<User>>('/users/me');

      if (user) login({ ...user.data.data, token: data.token });

      toast.success('Berhasil melakukan login');

      setTimeout(() => {
        if (role.role === 'admin') {
          router.push('/admin');
        } else {
          router.push('/dashboard');
        }
      }, 3000);
    },
    onError: (err: { response: { data: ApiError } }) => {
      toast.error(err.response.data.message);
    },
  });

  return { mutate, isPending };
}
