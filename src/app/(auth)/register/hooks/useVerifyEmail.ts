import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function useVerifyEmail(token: string) {
  const [err, setErr] = useState(false);

  const { data, status, isLoading } = useQuery({
    queryKey: ['email-verification'],
    queryFn: async () => {
      try {
        const { data } = await api.get('/auth/verify?token=' + token);

        return data.data;
      } catch (err) {
        setErr(true);
        throw err;
      }
    },
  });

  return { data, status, err, isLoading };
}
