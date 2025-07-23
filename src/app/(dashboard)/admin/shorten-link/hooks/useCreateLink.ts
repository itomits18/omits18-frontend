import api from '@/lib/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export type shortenLinkType = {
  name: string;
  shorten_link: string;
  original_link: string;
};

export default function useCreateLink() {
  const { mutate, isPending } = useMutation({
    mutationKey: ['create-link'],
    mutationFn: async (dataShorten: shortenLinkType) => {
      const { data } = await api.post('/links', dataShorten);

      return data.data;
    },
    onSuccess: () => {
      toast.success('Berhasil memersingkat link.');
    },
    onError: () => {
      toast.error('Gagal memersingkat link.');
    },
  });

  return { mutate, isPending };
}
