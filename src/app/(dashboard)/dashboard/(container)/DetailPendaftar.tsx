'use client';

import Typography from '@/components/Typography';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function DetailPendaftar({ type }: { type: string }) {
  const [collapse, setCollapse] = useState(false);

  return (
    <Collapsible open={collapse} onOpenChange={setCollapse}>
      <CollapsibleTrigger
        className={cn(
          'text-neutral-main relative z-20 flex w-full justify-between rounded-xl px-8 py-4',
          'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none',
          type === 'omits'
            ? 'bg-gradient-to-r from-green-200 to-green-500'
            : 'bg-gradient-to-r from-[#4580B2] to-[#1D374C]',
        )}
      >
        <Typography variant="t" weight="semibold">
          Detail Pendaftar
        </Typography>

        <ChevronDown />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="-mt-3 grid grid-cols-1 gap-y-6 rounded-md p-8 shadow-md md:grid-cols-2">
          <div>
            <Typography variant="b" weight="bold" className="text-black-100">
              Jenjang
            </Typography>
            <Typography variant="t" weight="bold" className="text-black-300">
              SD
            </Typography>
          </div>

          <div>
            <Typography variant="b" weight="bold" className="text-black-100">
              Region
            </Typography>
            <Typography variant="t" weight="bold" className="text-black-300">
              Offline 1 - Surabaya, Gresik, dan Bangkalan
            </Typography>
          </div>

          <div>
            <Typography variant="b" weight="bold" className="text-black-100">
              Nama Sekolah
            </Typography>
            <Typography variant="t" weight="bold" className="text-black-300">
              SDN 1 Surabaya
            </Typography>
          </div>

          <div>
            <Typography variant="b" weight="bold" className="text-black-100">
              Alamat Sekolah
            </Typography>
            <Typography
              variant="t"
              weight="bold"
              className="text-black-300 text-justify"
            >
              Kec. Sukolilo, Surabaya, Jawa Timur
            </Typography>
          </div>

          <div>
            <Typography variant="b" weight="bold" className="text-black-100">
              Provinsi
            </Typography>
            <Typography variant="t" weight="bold" className="text-black-300">
              Jawa Timur
            </Typography>
          </div>

          <div>
            <Typography variant="b" weight="bold" className="text-black-100">
              Kota/Kabupaten
            </Typography>
            <Typography variant="t" weight="bold" className="text-black-300">
              Kota Surabaya
            </Typography>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
