import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { cn } from '@/lib/utils';
import { DashboardStatsResponse } from '@/types/DashboardStatistics';
import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export default function FilterByRegion({
  data,
}: {
  data: DashboardStatsResponse;
}) {
  const [state, setState] = useState('all');
  const regionData = data.by_region.map((x) => {
    return { region: x.key, pendaftar: x.count };
  });

  const [dataRegion, setDataRegion] =
    useState<
      {
        region: string;
        pendaftar: number;
      }[]
    >(regionData);
  const INITIAL_DATA = regionData;

  const chartConfig = {
    pendaftar: {
      label: 'Total Pendaftar',
      color: 'var(--color-green-200)',
    },
  } satisfies ChartConfig;

  useEffect(() => {
    if (state === 'all') setDataRegion(INITIAL_DATA);
    else if (state === 'asc')
      setDataRegion(
        regionData.sort((a, b) => {
          return a.pendaftar - b.pendaftar;
        }),
      );
    else if (state === 'desc')
      setDataRegion(
        regionData.sort((a, b) => {
          return b.pendaftar - a.pendaftar;
        }),
      );
  }, [state]);

  return (
    <Card className="px-5">
      <Typography
        variant="h6"
        weight="semibold"
        className="text-center text-green-300 max-md:text-2xl"
      >
        Data Pendaftar by Region
      </Typography>

      <div className="my-3 flex flex-col items-center justify-center gap-3 md:flex-row">
        <Typography
          variant="p"
          weight="medium"
          className="text-green-100 max-md:text-lg"
        >
          Sort by Total Pendaftar
        </Typography>

        <div className="flex gap-3">
          <Button
            variant="green"
            size="md"
            className={cn(
              state !== 'all' &&
                'border border-green-200 bg-transparent py-1 text-green-200 hover:bg-green-100/20',
            )}
            onClick={() => setState('all')}
          >
            All
          </Button>
          <Button
            variant="green"
            size="md"
            className={cn(
              state !== 'asc' &&
                'border border-green-200 bg-transparent py-1 text-green-200 hover:bg-green-100/20',
            )}
            onClick={() => setState('asc')}
          >
            ASC
          </Button>
          <Button
            variant="green"
            size="md"
            className={cn(
              state !== 'desc' &&
                'border border-green-200 bg-transparent py-1 text-green-200 hover:bg-green-100/20',
            )}
            onClick={() => setState('desc')}
          >
            DESC
          </Button>
        </div>
      </div>

      <CardContent className="-mt-10 overflow-x-auto py-3">
        <div className="min-w-[600px]">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer
              width="100%"
              height={regionData.length * 40} // atau sesuaikan
            >
              <BarChart
                accessibilityLayer
                data={dataRegion}
                layout="vertical"
                className="w-full overflow-visible p-5"
                margin={{
                  left: 0,
                }}
              >
                <CartesianGrid vertical={true} horizontal={true} />
                <XAxis
                  type="number"
                  dataKey="pendaftar"
                  hide
                  tickCount={10}
                  tickMargin={30}
                />
                <YAxis
                  interval={0}
                  dataKey="region"
                  type="category"
                  tickLine={true}
                  axisLine={true}
                  tickMargin={5}
                  tickSize={10}
                  tick={{
                    width: 500, // beri ruang yang cukup
                    height: 20,
                  }}
                />

                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                  dataKey="pendaftar"
                  fill="var(--color-pendaftar)"
                  radius={4}
                >
                  <LabelList
                    position="right"
                    offset={12}
                    className="fill-foreground"
                    fontSize={14}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
