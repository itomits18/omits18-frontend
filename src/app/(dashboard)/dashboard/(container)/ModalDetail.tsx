import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import Typography from '@/components/Typography';
import React, { SetStateAction, useState } from 'react';
import DetailPendaftar from './DetailPendaftar';
import PesertaDetail from './PesertaDetail';
import WizardProgress from './WizardProgress';

type ModalType = {
  type: 'omits' | 'mission';
  id: string;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function ModalConfirm({ type, open, setOpen }: ModalType) {
  const [progress, _setProgress] = useState(3);

  return (
    <>
      <div
        className={cn(
          'absolute left-0 top-0 z-20 min-h-screen w-full bg-black-200/20 transition-all duration-200',
          open ? 'block opacity-100' : 'hidden opacity-0',
        )}
      ></div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="scrollbar-hide h-[650px] max-h-screen max-w-full overflow-y-auto rounded-xl bg-neutral-main py-12 max-md:max-w-[90%] md:w-[80%] lg:h-[90%] lg:max-w-[857px] xl:h-[650px]">
          <div className="flex flex-col space-y-4 overflow-x-hidden">
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
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
