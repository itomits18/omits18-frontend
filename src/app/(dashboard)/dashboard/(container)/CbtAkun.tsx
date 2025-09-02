'use client';
import Typography from '@/components/Typography';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { Participant } from '@/types/participants';
import { ChevronDown, Copy } from 'lucide-react';

export default function CbtAkun({
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
          Akun Ujian
        </Typography>

        <ChevronDown className={cn('transition-all duration-200')} />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="divide-y-2 rounded-md p-8 shadow-md">
          <div className="-mt-3 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Typography variant="b" weight="bold" className="text-black-200">
                Email Akun
              </Typography>
              <div className="flex items-center justify-between rounded-md bg-gray-300 p-3">
                <Typography
                  variant="bs"
                  weight="bold"
                  className="truncate text-gray-600"
                >
                  {`${data.participant_detail.sub_type}2025_${data.participant_number}@mail.com`}
                </Typography>

                <Copy
                  size={20}
                  className="cursor-pointer text-gray-700 hover:text-gray-500"
                />
              </div>
            </div>

            <div>
              <Typography variant="b" weight="bold" className="text-black-200">
                Password
              </Typography>
              <div className="flex items-center justify-between rounded-md bg-gray-300 p-3">
                <Typography
                  variant="bs"
                  weight="bold"
                  className="text-black-300 break-words"
                >
                  {data.my_its_pass || '-'}
                </Typography>

                <Copy
                  size={20}
                  className="cursor-pointer text-gray-700 hover:text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
