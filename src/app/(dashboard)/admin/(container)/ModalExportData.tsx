import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import React, { SetStateAction } from 'react';

type ModalType = {
  Description?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  ModalMethod?: () => void;
};

export default function ModalExportData({
  open,
  setOpen,
  Description,
  //   ModalMethod,
}: ModalType) {
  return (
    <>
      <div
        className={cn(
          'bg-black-200/20 absolute top-0 left-0 z-20 min-h-screen w-full transition-all duration-200',
          open ? 'block opacity-100' : 'hidden opacity-0',
        )}
      ></div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-neutral-main">
          <DialogHeader>
            <DialogTitle>
              <Typography
                variant="h5"
                weight="bold"
                className="text-center max-md:text-3xl"
              >
                Konfirmasi
              </Typography>
            </DialogTitle>
            <DialogDescription>{Description}</DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex flex-col space-x-3">
            <Button
              variant="brown"
              onClick={() => setOpen(false)}
              className="w-full"
              size="lg"
            >
              Cancel
            </Button>
            <Button
              variant="blue"
              onClick={() => setOpen(false)}
              className="w-full"
              size="lg"
            >
              Export
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
