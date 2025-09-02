'use client';
import Typography from '@/components/Typography';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { regionOptions } from '@/contents/ListRegions';
import { cn } from '@/lib/utils';
import { Participant } from '@/types/participants';
import { ChevronDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function DetailPendaftar({
  type,
  data,
}: {
  type: string;
  data: Participant;
}) {
  return (
    <Collapsible open={true}>
      <CollapsibleTrigger
        className={cn(
          'text-neutral-main relative z-20 flex w-full cursor-pointer justify-between rounded-xl px-8 py-4',
          'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none',
          type === 'omits'
            ? 'bg-gradient-to-r from-green-200 to-green-500'
            : 'bg-gradient-to-r from-[#4580B2] to-[#1D374C]',
        )}
      >
        <Typography variant="t" weight="semibold">
          Detail Pendaftar
        </Typography>

        <ChevronDown className={cn('transition-all duration-200')} />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="divide-y-2 rounded-md p-8 shadow-md">
          <div className="-mt-3 grid grid-cols-1 gap-y-6 pb-6 md:grid-cols-2">
            <div>
              <Typography variant="b" weight="bold" className="text-black-100">
                Jenjang
              </Typography>
              <Typography
                variant="t"
                weight="bold"
                className="text-black-300 break-words"
              >
                {data.participant_detail.sub_type}
              </Typography>
            </div>

            {type === 'omits' && (
              <div>
                <Typography
                  variant="b"
                  weight="bold"
                  className="text-black-100"
                >
                  Region
                </Typography>
                <Typography
                  variant="t"
                  weight="bold"
                  className="text-black-300 break-words"
                >
                  {
                    regionOptions.find(
                      (x) =>
                        x.value.toLowerCase() ===
                        data.postal_detail.region.toLowerCase(),
                    )?.label
                  }
                </Typography>
              </div>
            )}

            <div>
              <Typography variant="b" weight="bold" className="text-black-100">
                {type === 'omits' ? 'Nama Sekolah' : 'Nama Institusi'}
              </Typography>
              <Typography
                variant="t"
                weight="bold"
                className="text-black-300 break-words"
              >
                {data.instance_name}
              </Typography>
            </div>

            <div className={cn(type === 'mission' && 'col-span-2')}>
              <Typography variant="b" weight="bold" className="text-black-100">
                {type === 'omits' ? 'Alamat Sekolah' : 'Alamat Institusi'}
              </Typography>
              <Typography
                variant="t"
                weight="bold"
                className="text-black-300 text-justify"
              >
                {data.instance_address}
              </Typography>
            </div>

            {type !== 'mission' && (
              <>
                <div>
                  <Typography
                    variant="b"
                    weight="bold"
                    className="text-black-100"
                  >
                    Provinsi
                  </Typography>
                  <Typography
                    variant="t"
                    weight="bold"
                    className="text-black-300"
                  >
                    {data.postal_detail.province}
                  </Typography>
                </div>

                <div>
                  <Typography
                    variant="b"
                    weight="bold"
                    className="text-black-100"
                  >
                    Kota/Kabupaten
                  </Typography>
                  <Typography
                    variant="t"
                    weight="bold"
                    className="text-black-300"
                  >
                    {data.postal_detail.regency}
                  </Typography>
                </div>
              </>
            )}
          </div>

          <div className="pt-6">
            {!['PAYMENT', 'REJECTED'].includes(
              data.participant_detail.status,
            ) && (
              <div className="space-y-2">
                <Typography
                  variant="t"
                  weight="bold"
                  className="text-black-300"
                >
                  Whatsapp Group
                </Typography>
                <Link href={data.whatsapp_group_link} target="_blank">
                  <div
                    className={cn(
                      'flex cursor-pointer justify-between rounded-lg p-3 px-4 transition-all duration-200',
                      type === 'omits'
                        ? 'bg-green-200 hover:bg-green-300'
                        : 'bg-blue-400 hover:bg-blue-900',
                    )}
                  >
                    <div className="flex items-center space-x-2">
                      <Typography variant="b" className="text-neutral-main">
                        Join Whatsapp Group
                      </Typography>
                    </div>

                    <ExternalLink className="text-white" />
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
