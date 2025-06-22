import api from '@/lib/api';
import { ApiError } from '@/types/api';
import { PaymentRegistration } from '@/types/registrationForm';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function usePayment() {
  const { mutate, isPending } = useMutation({
    mutationKey: ['payment-registration'],
    mutationFn: async (dataPayment: PaymentRegistration) => {
      const { data } = await api.post('/payment', dataPayment);

      return data.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err: { response: { data: ApiError } }) => {
      toast.error(err.response.data.message);
    },
  });

  return { mutate, isPending };
}
