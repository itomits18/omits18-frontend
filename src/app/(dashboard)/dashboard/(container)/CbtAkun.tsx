'use client';
import Typography from '@/components/Typography';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { Participant } from '@/types/participants';
import { ChevronDown, Copy, SquareCheck } from 'lucide-react';
import { useState } from 'react';

export default function CbtAkun({
  type,
  data,
}: {
  type: string;
  data: Participant;
}) {
  const [copy, setCopy] = useState({
    email: false,
    password: false,
  });

  function copyText(state: string) {
    setCopy((pre) => ({
      ...pre,
      [state]: true,
    }));

    setTimeout(() => {
      setCopy((pre) => ({
        ...pre,
        [state]: false,
      }));
    }, 3000);
  }

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
                Username
              </Typography>
              <div className="flex items-center justify-between rounded-md bg-gray-300 p-3">
                <Typography
                  variant="bs"
                  weight="bold"
                  className="truncate text-gray-600"
                >
                  {`${data.participant_number}`}
                </Typography>

                {copy.email ? (
                  <SquareCheck
                    size={20}
                    className="cursor-pointer text-gray-700 hover:text-gray-500"
                  />
                ) : (
                  <Copy
                    size={20}
                    className="cursor-pointer text-gray-700 hover:text-gray-500"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${data.participant_number}`,
                      );

                      copyText('email');
                    }}
                  />
                )}
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

                {copy.password ? (
                  <SquareCheck
                    size={20}
                    className="cursor-pointer text-gray-700 hover:text-gray-500"
                  />
                ) : (
                  <Copy
                    size={20}
                    className="cursor-pointer text-gray-700 hover:text-gray-500"
                    onClick={() => {
                      navigator.clipboard.writeText(data.my_its_pass || '');

                      copyText('password');
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          <Typography variant="b" className="mt-3" weight="semibold">
            Silakan akses website{' '}
            <a
              href="https://cbt.its.ac.id/login/index.php"
              className="text-blue-500"
            >
              cbt.its.ac.id
            </a>{' '}
            untuk login menggunakan akun ujian yang telah diberikan.
          </Typography>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
