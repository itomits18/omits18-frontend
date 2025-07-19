import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';

export default function useParticipants() {
  const [isRegistered, setIsRegistered] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ['participants-id'],
    queryFn: async () => {
      try {
        const response = await api.get('/participants/me');
        setIsRegistered(true);

        return response.data.data;
      } catch (err) {
        const axiosError = err as AxiosError;

        if (axiosError.response?.status === 404) {
          setIsRegistered(false);
        }
        throw err;
      }
    },
  });

  return { data, isLoading, isRegistered };
}
