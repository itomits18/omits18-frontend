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
import { useEffect, useState } from 'react';
import useGetStatistics from '../hooks/useGetStatistics';

type StatusType = 'verified' | 'pending' | 'revisi' | 'rejected';
type statsType = {
  sub_type: string;
  key: string;
  count: number;
};

export default function StatisticSection({ section }: { section: string }) {
  const [data, setData] = useState<statsType[]>();

  const bgColor = {
    verified: 'bg-green-100',
    pending: 'bg-[#55626B]',
    rejected: 'bg-additions-brown-100',
    revisi: 'bg-yellow-300',
  };

  const { data: DataStatistic } = useGetStatistics();

  useEffect(() => {
    if (!DataStatistic) return;
    if (section === 'omits') {
      const dataFilter: statsType[] =
        DataStatistic.verification_by_sub_type.filter((x: statsType) =>
          ['SD', 'SMP', 'SMA'].includes(x.sub_type),
        );

      const newDataFilter = [
        {
          sub_type: 'omits',
          key: 'VERIFIED',
          count: dataFilter
            .filter((x) => x.key === 'VERIFIED')
            .reduce((acc, item) => acc + item.count, 0),
        },
        {
          sub_type: 'omits',
          key: 'PENDING',
          count: dataFilter
            .filter((x) => x.key === 'PENDING')
            .reduce((acc, item) => acc + item.count, 0),
        },
        {
          sub_type: 'omits',
          key: 'REJECTED',
          count: dataFilter
            .filter((x) => x.key === 'REJECTED')
            .reduce((acc, item) => acc + item.count, 0),
        },
        {
          sub_type: 'omits',
          key: 'NEED_REVISION',
          count: dataFilter
            .filter((x) => x.key === 'NEED_REVISION')
            .reduce((acc, item) => acc + item.count, 0),
        },
      ];

      setData(newDataFilter);
    } else if (section === 'mission') {
      const dataFilter = DataStatistic.verification_by_sub_type.filter(
        (x: statsType) => ['MISSION'].includes(x.sub_type),
      );

      setData(dataFilter);
    }
  }, [section, DataStatistic]);

  return (
    DataStatistic && (
      <div className="relative flex w-full max-md:space-x-6 md:gap-6">
        <div className="w-full xl:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {Object.keys(bgColor).map((bg, i) => {
                return (
                  <CarouselItem
                    className="w-full lg:basis-1/2 xl:basis-0"
                    key={i}
                  >
                    <div
                      className={cn(
                        'text-neutral-main flex w-full flex-col items-center justify-center space-y-1 rounded-lg py-4',
                        bgColor[bg as StatusType],
                      )}
                    >
                      <div className="flex items-center justify-center space-x-3">
                        <CircleCheck />
                        <Typography
                          variant="t"
                          weight="medium"
                          className="text-xl capitalize"
                        >
                          {bg}
                        </Typography>
                      </div>
                      <Typography
                        variant="h5"
                        weight="bold"
                        className="text-3xl"
                      >
                        {data && data[i].count}
                      </Typography>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="text-black-200 pl-8" />
            <CarouselNext className="text-black-200 pr-8" />
          </Carousel>
        </div>

        {Object.keys(bgColor).map((bg, i) => {
          return (
            <div
              key={i}
              className={cn(
                'text-neutral-main flex w-full flex-col items-center justify-center space-y-1 rounded-lg py-4 max-xl:hidden',
                bgColor[bg as StatusType],
              )}
            >
              <div className="flex items-center justify-center space-x-3">
                <CircleCheck />
                <Typography variant="t" weight="medium" className="capitalize">
                  {bg}
                </Typography>
              </div>
              <Typography variant="h5" weight="bold">
                {data && data[i].count}
              </Typography>
            </div>
          );
        })}
      </div>
    )
  );
}
