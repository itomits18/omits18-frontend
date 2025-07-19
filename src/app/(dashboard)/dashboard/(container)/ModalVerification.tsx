import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from '@/components/ui/dialog';

import Typography from '@/components/Typography';
import { DialogPortal } from '@radix-ui/react-dialog';

import { Button } from '@/components/ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import useEmailVerification from '../hooks/useEmailVerification';

type ModalType = {
  email: string;
  open: boolean;
};

export default function ModalVerification({ open, email }: ModalType) {
  const { mutate, isPending } = useEmailVerification();

  return (
    <Dialog open={open}>
      <DialogPortal>
        <DialogOverlay className="bg-black-200/30 fixed inset-0 z-50 backdrop-blur-sm" />
        <DialogContent
          className="scrollbar-hide bg-neutral-main max-h-screen max-w-fit overflow-y-auto rounded-xl py-10"
          hideCloseButton
        >
          <VisuallyHidden asChild>
            <DialogTitle>Modal Title</DialogTitle>
          </VisuallyHidden>

          <Typography variant="h6" weight="bold" className="text-center">
            Akun kamu belum terverifikasi
          </Typography>
          <Typography variant="p" className="text-center">
            Cek email dan verifikasi akunmu untuk lanjut
          </Typography>

          <Button
            variant="green"
            size="md"
            onClick={() => mutate(email)}
            disabled={isPending}
          >
            {isPending
              ? 'Mengirim email verifikasi...'
              : 'Kirim email verifikasi'}
          </Button>
        </DialogContent>
        <DialogClose className="hidden" />
      </DialogPortal>
    </Dialog>
  );
}
