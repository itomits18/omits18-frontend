import api from '@/lib/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { GetParticipants } from './useGetDetailParticipants';

export default function useChangeVerification(id: string) {
  const { mutate, isPending } = useMutation({
    mutationKey: ['status-' + id],
    mutationFn: async (dataParticipants: GetParticipants) => {
      const { data } = await api.put('/participants/' + id, dataParticipants);

      return data.data;
    },
    onSuccess: () => {
      toast.success('Berhasil mengubah data peserta.');

      setTimeout(() => {
        toast.success('Memuat ulang halaman.');
      }, 1000);
    },
    onError: () => {
      toast.error('Gagal mengubah data peserta');
    },
  });

  return { mutate, isPending };
}
