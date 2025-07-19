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

import useParticipantStore from '@/app/store/useParticipantStore';
import { Participant } from '@/types/participants';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { ChevronDown } from 'lucide-react';

type ModalType = {
  type: 'omits' | 'mission';
  id: string;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function ModalConfirm({ type, open, setOpen }: ModalType) {
  const [number, setNumber] = useState(1);

  const { participant } = useParticipantStore();
  const MAX_NUMBER = participant.length;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="bg-black-200/30 fixed inset-0 z-50 backdrop-blur-sm" />
        <DialogContent className="scrollbar-hide bg-neutral-main flex h-[650px] max-h-screen max-w-full flex-col overflow-y-auto rounded-xl py-12 max-md:max-w-[90%] md:w-[80%] lg:h-[90%] lg:max-w-[857px] xl:h-[650px]">
          <VisuallyHidden asChild>
            <DialogTitle></DialogTitle>
          </VisuallyHidden>

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

          {type === 'omits' && (
            <div className="mx-auto mb-3 flex w-fit items-center justify-center space-x-3">
              <ChevronDown
                className={cn(
                  'rotate-90 cursor-pointer',
                  number === 1 && 'cursor-not-allowed text-gray-300',
                )}
                onClick={() => {
                  if (number === 1) return;
                  setNumber((pre) => pre - 1);
                }}
              />
              <div className="w-fit rounded-full bg-green-300 px-4 py-1">
                <Typography variant="b" className="text-center text-neutral-50">
                  Page {number} of {participant.length}
                </Typography>
              </div>
              <ChevronDown
                className={cn(
                  'rotate-270 cursor-pointer',
                  number === MAX_NUMBER && 'cursor-not-allowed text-gray-300',
                )}
                onClick={() => {
                  if (number === MAX_NUMBER) return;
                  setNumber((pre) => pre + 1);
                }}
              />
            </div>
          )}

          <div className="scrollbar-hide flex flex-col items-start space-y-4 overflow-x-hidden">
            <div className="w-full text-justify md:mx-auto">
              <WizardProgress
                type={type}
                data={
                  participant ? participant[number - 1] : ({} as Participant)
                }
              />
            </div>

            <div className="mx-auto w-[80%] pt-10 max-md:w-full md:pt-20">
              <DetailPendaftar
                type={type}
                data={
                  participant ? participant[number - 1] : ({} as Participant)
                }
              />

              {type === 'mission' ? (
                <>
                  <PesertaDetail
                    number={number}
                    type={type}
                    data={
                      participant
                        ? participant[number - 1]
                        : ({} as Participant)
                    }
                  />
                  <PesertaDetail
                    number={number + 1}
                    type={type}
                    data={
                      participant ? participant[number] : ({} as Participant)
                    }
                  />
                </>
              ) : (
                <PesertaDetail
                  type={type}
                  data={
                    participant ? participant[number - 1] : ({} as Participant)
                  }
                />
              )}
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
