import 'yet-another-react-lightbox/styles.css';

import * as React from 'react';
import Lightbox from 'yet-another-react-lightbox';

import { ImageStore } from '@/app/(dashboard)/admin/MISSION/[id]/page';
import Typography from '@/components/Typography';
import { Trash } from 'lucide-react';
import LabelText from './LabelText';

type FilePreviewProps = {
  id: string;
  label: string;
  name: string;
  link: string;
  readOnly?: boolean;
  deleteFile: React.Dispatch<React.SetStateAction<ImageStore>>;
};

export default function ImagePreview({
  id,
  label,
  name,
  link,
  deleteFile,
  readOnly,
}: FilePreviewProps) {
  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    deleteFile((pre) => ({
      ...pre,
      [id]: '',
    }));
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const source = {
    src: link,
  };

  return (
    <div className="flex flex-col space-y-2">
      {label && <LabelText>{label}</LabelText>}
      <li
        className="flex h-fit w-full cursor-pointer items-center justify-between gap-2 rounded-lg bg-green-200 px-3 py-3 transition-all duration-200 hover:bg-green-300"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-row gap-1">
          <Typography variant="b" weight="medium" className="text-neutral-main">
            {name}
          </Typography>
        </div>

        {readOnly && (
          // onclick method
          <div
            className="rounded-full bg-green-400 p-2 transition-all duration-200 hover:bg-green-200"
            onClick={handleDelete}
          >
            <Trash size={20} className="text-neutral-main" />
          </div>
        )}

        <Lightbox
          open={isOpen}
          slides={[source]}
          carousel={{ finite: true }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
          close={() => setIsOpen(false)}
        />
      </li>
    </div>
  );
}
