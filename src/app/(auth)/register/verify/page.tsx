import { useRouter, useSearchParams } from 'next/navigation';
import useVerifyEmail from '../hooks/useVerifyEmail';

export default function page() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get('token');

  const { mutate, isPending, status } = useVerifyEmail(token as string);

  if (!token) return router.push('/login');
  else if (token && status === 'success' && !isPending) {
    mutate();
    router.push('/login');
  }
}
