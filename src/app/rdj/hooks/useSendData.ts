import api from '@/lib/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export type answerType = {
  name: string;
  participant_number: string;
  answer: string[];
  validation: boolean[];
  remaining_time: string;
};

export default function useSendData() {
  const { mutate, isPending } = useMutation({
    mutationKey: ['send-data'],
    mutationFn: async (dataAnswer: answerType) => {
      const { data } = await api.post('/participants/answer', dataAnswer);

      return data.data;
    },
    onSuccess: () => {
      toast.success('Success send data');
    },
    onError: () => {
      toast.error('Failed send data');
    },
  });

  return { mutate, isPending };
}
