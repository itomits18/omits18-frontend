import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import React from 'react';
import useChangeVerification from '../../hooks/useChangeVerification';
import { GetParticipants } from '../../hooks/useGetDetailParticipants';

export default function ModalVerification({
  data,
  id,
  type,
  modalOpen,
  setModalOpen,
  updateData,
}: {
  data: GetParticipants;
  id: string;
  type: 'terima' | 'revisi' | 'tolak';
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateData?: GetParticipants;
}) {
  const newData: GetParticipants = {
    ...data,
    participant_detail: {
      ...data?.participant_detail,
      status:
        type === 'terima'
          ? 'VERIFIED'
          : type === 'tolak'
            ? 'REJECTED'
            : 'NEED_REVISION',
    },
  };

  const updateDataV2 = {
    ...newData,
    ...updateData,
  };

  const { mutate, isPending } = useChangeVerification(id);

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 backdrop-blur-xs" />
        <DialogContent className="scrollbar-hide bg-neutral-main max-h-screen max-w-[600px] overflow-y-auto rounded-xl py-10">
          <VisuallyHidden asChild></VisuallyHidden>

          <DialogTitle>
            <Typography variant="h5" weight="bold" className="text-center">
              Konfirmasi
            </Typography>
          </DialogTitle>

          <Typography variant="p" className="mx-auto w-[80%] text-center">
            Apakah kamu yakin ingin{' '}
            {type === 'terima'
              ? 'menerima'
              : type === 'tolak'
                ? 'menolak'
                : 'mengubah'}{' '}
            data peserta{' '}
            <span className="text-additions-brown-100 font-bold">
              {data?.name}
            </span>{' '}
            dengan Sub-Kompetisi{' '}
            <span className="text-additions-brown-100 font-bold">
              {data?.participant_detail.sub_type}
            </span>{' '}
            ?
          </Typography>

          <div className="flex gap-4">
            <Button
              variant="brown"
              size={'md'}
              className="w-full"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </Button>

            <Button
              variant={'blue'}
              size={'md'}
              className="w-full"
              disabled={isPending}
              onClick={() => {
                if (type === 'revisi') {
                  mutate(updateDataV2);
                } else {
                  mutate(newData);
                }
                setModalOpen(false);
              }}
            >
              Submit
            </Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
