'use client';

import Typography from '@/components/Typography';

import { DashboardStatsResponse } from '@/types/DashboardStatistics';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import useGetStatistics from '../hooks/useGetStatistics';
import FilterByJenjang from './(container)/FilterByJenjang';
import FilterByMISSION from './(container)/FilterByMISSION';
import FilterByOMITS from './(container)/FilterByOMITS';
import FilterByRegion from './(container)/FilterByRegion';

export default function page() {
  const { data, isLoading } = useGetStatistics();

  return (
    !isLoading && (
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-6 rounded-xl bg-[#FFFDF0] p-8 max-md:flex-col max-md:items-start">
          <div className="flex items-center space-x-4">
            <Link href={'/admin/omits'}>
              <div className="w-fit cursor-pointer rounded-full bg-green-300 p-3 transition-all duration-200 hover:bg-green-400">
                <ChevronLeft size={20} className="text-neutral-main" />
              </div>
            </Link>

            <Typography variant="t" weight="medium">
              Kembali
            </Typography>
          </div>

          <Typography
            variant="h5"
            weight="semibold"
            className="text-center text-green-300 max-md:text-3xl"
          >
            OMITS INSIGHT
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Filter OMITS */}
          <div className="flex h-fit flex-col items-center justify-center gap-6 rounded-xl bg-[#FFFDF0] max-md:flex-col max-md:items-center">
            <FilterByOMITS data={data as DashboardStatsResponse} />
          </div>
          <div className="flex h-fit flex-col items-center justify-center gap-6 rounded-xl bg-[#FFFDF0] max-md:flex-col max-md:items-center">
            <FilterByMISSION data={data as DashboardStatsResponse} />
          </div>
        </div>

        <div className="rounded-xl bg-[#FFFDF0]">
          <FilterByRegion data={data as DashboardStatsResponse} />
        </div>

        <div className="rounded-xl bg-[#FFFDF0]">
          <FilterByJenjang data={data as DashboardStatsResponse} />
        </div>
      </section>
    )
  );
}
