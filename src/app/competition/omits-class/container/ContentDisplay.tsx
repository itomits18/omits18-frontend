import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import type { Subject } from '@/contents/OmitsClass';
import React, { useEffect, useMemo, useState } from 'react';
import useGetVideo from '../hooks/useGetVideo';

type ContentDisplayProps = {
  subject: Subject;
  setFile: React.Dispatch<React.SetStateAction<string>>;
  sub_type: string;
};

const VideoContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="m-2 flex aspect-video items-center justify-center rounded-xs bg-gray-200 shadow-md md:m-6">
    {children}
  </div>
);

const ContentDisplay = React.memo(
  ({ subject, setFile, sub_type }: ContentDisplayProps) => {
    const { data: videos, isLoading, isError, refetch } = useGetVideo();
    const [playbackError, setPlaybackError] = useState(false);

    const videoUrl = useMemo(() => {
      setPlaybackError(false);

      if (!videos) return null;

      let fixedVideo = '';

      if (sub_type === 'SD') fixedVideo = videos[0].url;
      else if (sub_type === 'SMP') fixedVideo = videos[1].url;
      else if (sub_type === 'SMA') fixedVideo = videos[2].url;
      else if (sub_type === 'MISSION') fixedVideo = videos[3].url;

      const matchVideo = fixedVideo.split(';')[(subject.id as number) - 1];

      return matchVideo;
    }, [videos, subject.id]);

    useEffect(() => {
      if (videos) {
        let fixedVideo = '';
        if (sub_type === 'SD') fixedVideo = videos[0].url;
        else if (sub_type === 'SMP') fixedVideo = videos[1].url;
        else if (sub_type === 'SMA') fixedVideo = videos[2].url;
        else if (sub_type === 'MISSION') fixedVideo = videos[3].url;

        setFile(fixedVideo.split(';')[2]); // hanya update kalau ada videos
      }
    }, [videos, sub_type, setFile]);

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
              <iframe
                width="100%"
                height="100%"
                // src={
                //   subject.id === 2
                //     ? videoUrl
                //     : `https://www.youtube.com/embed/` + videoUrl
                // }
                src={`https://www.youtube.com/embed/` + videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full rounded-xl"
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
            className="bg-gradient-to-b from-[#4C5F81] to-[#101B16] bg-clip-text text-center text-transparent"
          >
            {subject.name.toUpperCase()}
          </Typography>
        </div>
      </>
    );
  },
);

ContentDisplay.displayName = 'ContentDisplay';

export default ContentDisplay;
