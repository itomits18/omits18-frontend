import Typography from '@/components/Typography';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { DashboardStatsResponse } from '@/types/DashboardStatistics';
import { Pie, PieChart } from 'recharts';

export default function FilterByOMITS({
  data,
}: {
  data: DashboardStatsResponse;
}) {
  const filterData = data.verification_by_sub_type.filter(
    (x) => x.sub_type !== 'MISSION',
  );

  const fieldFilter = {
    payment: filterData
      .filter((x) => x.key === 'PAYMENT')
      .reduce((pre, cur) => pre + cur.count, 0),
    pending: filterData
      .filter((x) => x.key === 'PENDING')
      .reduce((pre, cur) => pre + cur.count, 0),
    revisi: filterData
      .filter((x) => x.key === 'NEED_REVISION')
      .reduce((pre, cur) => pre + cur.count, 0),
    verified: filterData
      .filter((x) => x.key === 'VERIFIED')
      .reduce((pre, cur) => pre + cur.count, 0),
    rejected: filterData
      .filter((x) => x.key === 'REJECTED')
      .reduce((pre, cur) => pre + cur.count, 0),
  };

  const chartData = [
    {
      browser: 'PAYMENT',
      visitors: fieldFilter.payment,
      fill: 'var(--color-blue-300)',
    },
    {
      browser: 'PENDING',
      visitors: fieldFilter.pending,
      fill: 'var(--color-gray-500)',
    },
    {
      browser: 'REVISI',
      visitors: fieldFilter.revisi,
      fill: 'var(--color-yellow-300)',
    },
    {
      browser: 'VERIFIED',
      visitors: fieldFilter.verified,
      fill: 'var(--color-green-200)',
    },
    {
      browser: 'REJECTED',
      visitors: fieldFilter.rejected,
      fill: 'var(--color-additions-brown-200)',
    },
  ];

  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    PAYMENT: {
      label: 'PAYMENT',
      color: 'var(--color-blue-300)',
    },
    PENDING: {
      label: 'PENDING',
      color: 'var(--color-gray-500)',
    },
    REVISI: {
      label: 'REVISI',
      color: 'var(--color-yellow-300)',
    },
    VERIFIED: {
      label: 'VERIFIED',
      color: 'var(--color-green-200)',
    },
    REJECTED: {
      label: 'REJECTED',
      color: 'var(--color-additions-brown-200)',
    },
  };

  return (
    <>
      <Card className="flex w-full flex-col px-3">
        <Typography
          variant="h6"
          weight="semibold"
          className="text-center text-green-300 max-md:text-3xl"
        >
          Data Pendaftar OMITS
        </Typography>

        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[300px] pb-0"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="visitors"
                label
                nameKey="browser"
              />
              <ChartLegend
                content={<ChartLegendContent nameKey="browser" />}
                className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
}
