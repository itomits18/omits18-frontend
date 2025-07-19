import api from '@/lib/api';
import { ApiError } from '@/types/api';
import { PaymentRegistration } from '@/types/registrationForm';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function usePayment() {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['payment-registration'],
    mutationFn: async (dataPayment: PaymentRegistration) => {
      const { data } = await api.post('/payment', dataPayment);

      return data.data;
    },
    onSuccess: (data) => {
      setTimeout(() => {
        router.push(data.redirect_url);
      }, 2000);
    },
    onError: (err: { response: { data: ApiError } }) => {
      toast.error(err.response.data.message);
    },
  });

  return { mutateAsync, isPending };
}
