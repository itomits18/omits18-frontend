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

export default function ModalConfirm({
  open,
  setOpen,
  Description,
  //   ModalMethod,
}: ModalType) {
  return (
    <>
      <div
        className={cn(
          'absolute left-0 top-0 z-20 min-h-screen w-full bg-black-200/20 transition-all duration-200',
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
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
