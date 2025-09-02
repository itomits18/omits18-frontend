import api from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export type Video = {
  id: string;
  url: string;
};

type VideoResponse = Record<string, string>;

export default function useGetVideo() {
  const fetchVideos = async (): Promise<Video[]> => {
    try {
      const response = await api.get<{ data: VideoResponse }>(
        '/participants/video',
      );
      const videoData = response.data.data;

      return Object.entries(videoData).map(([key, value]) => ({
        id: key.includes('_') ? key.split('_')[1] : key,
        url: value,
      }));
    } catch (error: any) {
      if (error.response?.status === 403) {
        console.warn('403: User mencoba mengakses video tanpa izin');
        throw { code: 403, message: 'Tidak memiliki akses ke video ini' };
      }
      throw error;
    }
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, error, refetch };
}
