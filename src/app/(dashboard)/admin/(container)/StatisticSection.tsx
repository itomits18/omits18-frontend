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

type StatusType = 'verified' | 'pending' | 'revisi' | 'rejected';

export default function StatisticSection() {
  const bgColor = {
    verified: 'bg-green-100',
    pending: 'bg-[#55626B]',
    revisi: 'bg-yellow-300',
    rejected: 'bg-additions-brown-100',
  };

  return (
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
                      'flex w-full flex-col items-center justify-center space-y-1 rounded-lg py-4 text-neutral-main',
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
                    <Typography variant="h5" weight="bold" className="text-3xl">
                      32
                    </Typography>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="pl-8 text-black-200" />
          <CarouselNext className="pr-8 text-black-200" />
        </Carousel>
      </div>

      {Object.keys(bgColor).map((bg) => {
        return (
          <div
            className={cn(
              'flex w-full flex-col items-center justify-center space-y-1 rounded-lg py-4 text-neutral-main max-xl:hidden',
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
              32
            </Typography>
          </div>
        );
      })}
    </div>
  );
}
