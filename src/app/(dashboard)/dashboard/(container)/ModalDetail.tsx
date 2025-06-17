import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import React, { SetStateAction } from 'react';

type ModalType = {
  id: string;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function ModalConfirm({ id, open, setOpen }: ModalType) {
  return (
    <>
      <div
        className={cn(
          'absolute left-0 top-0 z-20 min-h-screen w-full bg-black-200/20 transition-all duration-200',
          open ? 'block opacity-100' : 'hidden opacity-0',
        )}
      ></div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-neutral-main p-32">
          {id === '2' ? (
            <Image
              src="/images/competition/dashboard/detail-1.png"
              width={1200}
              height={835}
              alt="assets"
              className="w-full scale-[1.7]"
            />
          ) : (
            <Image
              src="/images/competition/dashboard/detail-bundling.png"
              width={1200}
              height={835}
              alt="assets"
              className="w-full scale-[1.7]"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
