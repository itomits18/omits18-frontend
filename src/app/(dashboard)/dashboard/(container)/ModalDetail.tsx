import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import Typography from '@/components/Typography';
import { DialogPortal } from '@radix-ui/react-dialog';
import React, { SetStateAction, useState } from 'react';
import DetailPendaftar from './DetailPendaftar';
import PesertaDetail from './PesertaDetail';
import WizardProgress from './WizardProgress';
import { DialogPortal } from '@radix-ui/react-dialog';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

type ModalType = {
  type: 'omits' | 'mission';
  id: string;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function ModalConfirm({ type, open, setOpen }: ModalType) {
  const [progress, _setProgress] = useState(3);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="bg-black-200/30 fixed inset-0 z-50 backdrop-blur-sm" />
        <DialogContent className="scrollbar-hide bg-neutral-main h-[650px] max-h-screen max-w-full overflow-y-auto rounded-xl py-12 max-md:max-w-[90%] md:w-[80%] lg:h-[90%] lg:max-w-[857px] xl:h-[650px]">
          <VisuallyHidden asChild>
            <DialogTitle>Modal Title</DialogTitle>
          </VisuallyHidden>

          <div className="scrollbar-hide flex flex-col space-y-4 overflow-x-hidden">
            <Typography
              font="Cinzel"
              variant="h1"
              weight="bold"
              className={cn(
                'mx-auto max-md:text-5xl',
                type === 'omits' ? 'text-green-300' : 'text-[#244D80]',
              )}
            >
              {type}
            </Typography>

            <div className="w-full text-justify md:mx-auto">
              <WizardProgress progress={progress} type={type} />
            </div>

            <div className="mx-auto w-[80%] pt-10 max-md:w-full md:pt-20">
              <DetailPendaftar type={type} />
              <PesertaDetail type={type} number={1} />
              <PesertaDetail type={type} number={2} />
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
