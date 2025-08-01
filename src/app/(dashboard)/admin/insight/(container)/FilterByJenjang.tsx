'use client';

import Typography from '@/components/Typography';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { DashboardStatsResponse } from '@/types/DashboardStatistics';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
} from 'recharts';

export default function FilterByJenjang({
  data,
}: {
  data: DashboardStatsResponse;
}) {
  function count(jenjang: string) {
    const filterData = data.verification_by_sub_type.filter(
      (x) => x.sub_type === jenjang,
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

    return fieldFilter;
  }

  const chartData = [
    {
      jenjang: 'OMITS - SD',
      ...count('SD'),
    },
    {
      jenjang: 'OMITS - SMP',
      ...count('SMP'),
    },
    {
      jenjang: 'OMITS - SMA',
      ...count('SMA'),
    },
    {
      jenjang: 'MISSION',
      ...count('MISSION'),
    },
  ];

  const chartConfig = {
    payment: {
      label: 'PAYMENT',
      color: 'var(--color-blue-400)',
    },
    pending: {
      label: 'PENDING',
      color: 'var(--color-gray-500)',
    },
    revisi: {
      label: 'REVISI',
      color: 'var(--color-yellow-200)',
    },
    verified: {
      label: 'VERIFIED',
      color: 'var(--color-green-200)',
    },
    rejected: {
      label: 'REJECTED',
      color: 'var(--color-additions-brown-200)',
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col items-center justify-center">
      <Typography
        variant="h6"
        weight="semibold"
        className="text-center text-green-300 max-md:text-2xl"
      >
        Data Pendaftar per Jenjang
      </Typography>

      <CardContent className="w-full px-12 lg:px-6 2xl:px-14">
        <ChartContainer config={chartConfig} className="h-[300px] w-full py-4">
          <ResponsiveContainer>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="horizontal"
              margin={{
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="jenjang"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                fontSize={14}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="payment"
                fill={chartConfig.payment.color}
                radius={4}
                barSize={70}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={16}
                />
              </Bar>
              <Bar
                dataKey="pending"
                fill={chartConfig.pending.color}
                radius={4}
                barSize={70}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={16}
                />
              </Bar>
              <Bar
                dataKey="revisi"
                fill={chartConfig.revisi.color}
                radius={4}
                barSize={70}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={16}
                />
              </Bar>
              <Bar
                dataKey="verified"
                fill={chartConfig.verified.color}
                radius={4}
                barSize={70}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={16}
                />
              </Bar>
              <Bar
                dataKey="rejected"
                fill={chartConfig.rejected.color}
                radius={4}
                barSize={70}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={16}
                />
              </Bar>

              <ChartLegend content={<ChartLegendContent nameKey="dataKey" />} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
