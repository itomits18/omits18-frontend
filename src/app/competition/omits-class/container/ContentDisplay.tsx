import Typography from '@/components/Typography';
import type { Subject } from '@/contents/OmitsClass';
import React from 'react';

type ContentDisplayProps = {
  subject: Subject;
};

const ContentDisplay = React.memo(({ subject }: ContentDisplayProps) => {
  return (
    <>
      <div className="m-2 flex aspect-video items-center justify-center bg-gray-200 md:m-6">
        <span className="text-gray-400">
          {subject.videoUrl.startsWith('placeholder')
            ? 'Video belum ada hehe'
            : `Memutar video untuk ${subject.name}`}
        </span>
      </div>
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
