import api from '@/lib/api';
import { useMutation } from '@tanstack/react-query';

function useUploadFile() {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['upload-file'],
    mutationFn: async (files: File) => {
      const formData = new FormData();
      formData.append('file', files);

      const { data } = await api.post('/files/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return data.data;
    },
  });

  return { mutateAsync, isPending };
}

function useDownloadFile() {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['download-file'],
    mutationFn: async (key: string) => {
      const { data } = await api.post('/files/download', {
        key,
      });

      return data.data;
    },
  });

  return { mutateAsync, isPending };
}

export { useUploadFile, useDownloadFile };
