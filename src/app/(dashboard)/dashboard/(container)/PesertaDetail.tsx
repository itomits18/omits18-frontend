'use client';

import Typography from '@/components/Typography';
import ImagePreview from '@/components/form/ImagePreview';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

// type PesertaType = {};

export default function PesertaDetail({
  type,
  number,
}: {
  type: string;
  number: number;
}) {
  const [collapse, setCollapse] = useState(false);
  const index = ['Pertama', 'Kedua', 'Ketiga', 'Keempat', 'Kelima'];

  return (
    <Collapsible open={collapse} onOpenChange={setCollapse}>
      <CollapsibleTrigger
        className={cn(
          'text-neutral-main relative z-20 flex w-full justify-between rounded-xl px-8 py-4 focus:ring-0',
          'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none',
          type === 'omits'
            ? 'bg-gradient-to-r from-green-200 to-green-500'
            : 'bg-gradient-to-r from-[#4580B2] to-[#1D374C]',
        )}
      >
        <Typography variant="t" weight="semibold">
          Peserta {index[number - 1]}
        </Typography>

        <ChevronDown />
      </CollapsibleTrigger>
      <CollapsibleContent className="-mt-3 divide-y-2 rounded-md p-8 shadow-md">
        <div className="grid grid-cols-1 gap-y-4 pb-6 md:grid-cols-2">
          <div>
            <Typography variant="b" weight="bold" className="text-black-100">
              Nama Lengkap
            </Typography>
            <Typography variant="t" weight="bold" className="text-black-300">
              John Smith
            </Typography>
          </div>

          <div>
            <Typography variant="b" weight="bold" className="text-black-100">
              Nomor Telepon
            </Typography>
            <Typography variant="t" weight="bold" className="text-black-300">
              081234567890
            </Typography>
          </div>

          <div>
            <Typography variant="b" weight="bold" className="text-black-100">
              Email
            </Typography>
            <Typography variant="t" weight="bold" className="text-black-300">
              johnsmith@gmail.com
            </Typography>
          </div>

          <div>
            <Typography variant="b" weight="bold" className="text-black-100">
              NISN
            </Typography>
            <Typography
              variant="t"
              weight="bold"
              className="text-black-300 text-justify"
            >
              1234567890
            </Typography>
          </div>
        </div>

        <div className="pt-6">
          <ImagePreview
            id="proof_identitas"
            name="Bukti Identitas"
            link={''}
            label="Upload Scan KTP/Kartu Pelajar"
            readOnly={true}
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
