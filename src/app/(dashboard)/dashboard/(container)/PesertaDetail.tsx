'use client';

import Typography from '@/components/Typography';
import ImagePreview from '@/components/form/ImagePreview';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { Participant } from '@/types/participants';
import { ChevronDown } from 'lucide-react';

// type PesertaType = {};

export default function PesertaDetail({
  type,
  data,
  number,
}: {
  type: string;
  data: Participant;
  number?: number;
}) {
  const index = ['Pertama', 'Kedua'];
  return (
    <Collapsible open={true}>
      <CollapsibleTrigger
        className={cn(
          'text-neutral-main relative z-20 flex w-full justify-between rounded-xl px-8 py-4 focus:ring-0',
          'cursor-pointer focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none',
          type === 'omits'
            ? 'bg-gradient-to-r from-green-200 to-green-500'
            : 'bg-gradient-to-r from-[#4580B2] to-[#1D374C]',
        )}
      >
        <Typography variant="t" weight="semibold">
          {number ? `Peserta ${index[number - 1]}` : 'Detail Peserta'}
        </Typography>

        <ChevronDown className={cn('transition-all duration-200')} />
      </CollapsibleTrigger>
      <CollapsibleContent className="-mt-3 divide-y-2 rounded-md p-8 shadow-md">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4 pb-6 md:grid-cols-2">
          <div className="md:w-[90%]">
            <Typography variant="b" weight="bold" className="text-black-100">
              Nama Lengkap
            </Typography>
            <Typography
              variant="t"
              weight="bold"
              className="text-black-300 break-words"
            >
              {data.name}
            </Typography>
          </div>

          <div className="md:w-[90%]">
            <Typography variant="b" weight="bold" className="text-black-100">
              Nomor Telepon
            </Typography>
            <Typography
              variant="t"
              weight="bold"
              className="text-black-300 break-words"
            >
              {data.phone}
            </Typography>
          </div>

          <div className="md:w-[90%]">
            <Typography variant="b" weight="bold" className="text-black-100">
              Email
            </Typography>
            <Typography
              variant="t"
              weight="bold"
              className="text-black-300 break-words"
            >
              {data.email}
            </Typography>
          </div>

          <div className="md:w-[90%]">
            <Typography variant="b" weight="bold" className="text-black-100">
              {type === 'mission' ? 'NIM/NRP' : 'NISN'}
            </Typography>
            <Typography
              variant="t"
              weight="bold"
              className="text-black-300 text-justify"
            >
              {data.participant_detail.student_id}
            </Typography>
          </div>
        </div>

        <div className="pt-6">
          <ImagePreview
            type={type}
            id="proof_identitas"
            name="Bukti Identitas"
            link={data.participant_detail.student_id_url}
            label="Bukti Scan KTP/Kartu Pelajar"
            readOnly={true}
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
