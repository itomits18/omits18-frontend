'use client';

import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import useGetStatistics from '../hooks/useGetStatistics';

type StatusType = 'VERIFIED' | 'PENDING' | 'NEED_REVISION' | 'REJECTED';

export default function StatisticSection() {
  const bgColor = {
    VERIFIED: 'bg-green-100',
    PENDING: 'bg-[#55626B]',
    REJECTED: 'bg-additions-brown-100',
    NEED_REVISION: 'bg-yellow-300',
    PAYMENT: 'bg-blue-400',
  };

  const { data: DataStatistic } = useGetStatistics();
  return (
    DataStatistic && (
      <div className="relative flex w-full max-md:space-x-6 md:gap-6">
        <div className="w-full xl:hidden">
          <Carousel className="w-full">
            <div className="overflow-hidden">
              <CarouselContent className="w-full">
                {DataStatistic.verification_status.map((v, i) => {
                  return (
                    <CarouselItem
                      className="w-full lg:basis-1/2 xl:basis-0"
                      key={i}
                    >
                      <div
                        className={cn(
                          'text-neutral-main flex w-full flex-col items-center justify-center space-y-1 rounded-lg py-4',
                          bgColor[v.key as StatusType],
                        )}
                      >
                        <div className="flex items-center justify-center space-x-3">
                          <CircleCheck />
                          <Typography
                            variant="t"
                            weight="medium"
                            className="text-xl capitalize"
                          >
                            {v.key === 'NEED_REVISION' ? 'REVISI' : v.key}
                          </Typography>
                        </div>
                        <Typography
                          variant="h5"
                          weight="bold"
                          className="text-3xl"
                        >
                          {v.count}
                        </Typography>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </div>
            <CarouselPrevious className="text-black-200 pl-8" />
            <CarouselNext className="text-black-200 pr-8" />
          </Carousel>
        </div>

        {DataStatistic.verification_status.map((v, i) => {
          return (
            <div
              key={i}
              className={cn(
                'text-neutral-main flex w-full flex-col items-center justify-center space-y-1 rounded-lg px-3 py-4 max-xl:hidden',
                bgColor[v.key as StatusType],
              )}
            >
              <div className="flex items-center justify-center space-x-3">
                <CircleCheck />
                <Typography variant="t" weight="medium" className="capitalize">
                  {v.key === 'NEED_REVISION' ? 'REVISI' : v.key}
                </Typography>
              </div>
              <Typography variant="h5" weight="bold">
                {v.count}
              </Typography>
            </div>
          );
        })}
      </div>
    )
  );
}
