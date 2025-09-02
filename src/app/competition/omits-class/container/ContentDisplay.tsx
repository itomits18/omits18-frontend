import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import type { Subject } from '@/contents/OmitsClass';
import React, { useMemo, useState } from 'react';
import useGetVideo from '../hooks/useGetVideo';

type ContentDisplayProps = {
  subject: Subject;
};

const VideoContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="m-2 flex aspect-video items-center justify-center rounded-xs bg-gray-200 shadow-md md:m-6">
    {children}
  </div>
);

const ContentDisplay = React.memo(({ subject }: ContentDisplayProps) => {
  const { data: videos, isLoading, isError, refetch } = useGetVideo();
  const [playbackError, setPlaybackError] = useState(false);

  const videoUrl = useMemo(() => {
    setPlaybackError(false);
    if (!videos) return null;
    const match = videos.find((video) => video.id === subject.id);
    return match?.url || null;
  }, [videos, subject.id]);

  if (isLoading) {
    return (
      <VideoContainer>
        <div className="h-full w-full animate-pulse rounded-xl bg-gray-300" />
      </VideoContainer>
    );
  }

  if (isError) {
    return (
      <VideoContainer>
        <div className="flex flex-col items-center">
          <Typography
            variant="p"
            font="Lora"
            weight="bold"
            className="mb-4 text-red-500"
          >
            Gagal Memuat Video
          </Typography>
          <Button className="bg-red-500 p-2" onClick={() => refetch()}>
            <Typography
              variant="p"
              font="Lora"
              weight="bold"
              className="text-white"
            >
              Coba lagi
            </Typography>
          </Button>
        </div>
      </VideoContainer>
    );
  }

  return (
    <>
      <VideoContainer>
        {videoUrl ? (
          playbackError ? (
            <Typography
              variant="p"
              font="Lora"
              weight="bold"
              className="text-center text-red-500"
            >
              Maaf, video ini gagal diputar.
            </Typography>
          ) : (
            <video
              src={videoUrl}
              controls
              preload="auto"
              onError={() => setPlaybackError(true)}
              className="h-full w-full rounded-xl object-cover"
            />
          )
        ) : (
          <Typography
            variant="p"
            font="Lora"
            weight="bold"
            className="text-gray-500"
          >
            Video belum tersedia untuk {subject.name}
          </Typography>
        )}
      </VideoContainer>

      <div className="flex flex-grow flex-col items-center justify-center pt-2 pb-4 md:pb-6">
        <Typography
          variant="h5"
          font="Cinzel"
          weight="black"
          className="bg-gradient-to-b from-[#4C5F81] to-[#101B16] bg-clip-text text-center text-transparent [filter:drop-shadow(3px_3px_3px_gray)]"
        >
          {subject.name.toUpperCase()}
        </Typography>
      </div>
    </>
  );
});

ContentDisplay.displayName = 'ContentDisplay';

export default ContentDisplay;
