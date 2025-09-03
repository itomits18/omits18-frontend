'use client';

import Typography from '@/components/Typography';
import Input from '@/components/form/Input';
import TableLayout from '@/components/form/TableLayout';
import { Button } from '@/components/ui/button';
import api from '@/lib/api';
import { Metadata, PaginateData } from '@/types/api';
import { ShortLinkSchema } from '@/validation/ShortLinkSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ColumnDef,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowRight, ChevronLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import useCreateLink from './hooks/useCreateLink';

type LinkType = {
  short_links: {
    id: number;
    name: string;
    shorten_link: string;
    original_link: string;
    visits: number;
  }[];
};

export default function page() {
  const methods = useForm({
    mode: 'onChange',
    resolver: zodResolver(ShortLinkSchema),
  });

  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const [data, setData] = React.useState<PaginateData<LinkType>>();
  const [metadata, setMetadata] = React.useState<Metadata>({
    order_by: 'created_at',
    sort_by: 'asc',
    limit: pagination.pageSize,
    page: pagination.pageIndex,
    type: 'OMITS',
    total_pages: 1,
  });

  const columnDefs: ColumnDef<LinkType['short_links'][number]>[] = [
    {
      id: 'no',
      header: 'No',
      cell: (info) =>
        (pagination.pageIndex - 1) * pagination.pageSize + info.row.index + 1,
    },
    {
      accessorKey: 'name',
      header: 'Nama Link',
    },
    {
      accessorKey: 'original_link',
      header: 'Original Link',
    },
    {
      header: 'Shorten Link',
      cell: (info) => {
        return (
          <div
            title={`https://omits18.com/m/${info.row.original.shorten_link}`}
          >
            https://omits18.com/m/{info.row.original.shorten_link}
          </div>
        );
      },
    },
    {
      accessorKey: 'visits',
      header: 'Total Pengunjung',
    },

    {
      id: 'shorten_link',
      header: 'Links',
      cell: (info) => {
        return (
          <Link
            href={`https://omits18.com/m/${info.row.original.shorten_link}`}
            target="_blank"
            className="flex justify-center"
          >
            <div className="rounded-lg">
              <ExternalLink />
            </div>
          </Link>
        );
      },
    },
  ];

  const getAllData = async (meta: Metadata) => {
    const { data } = await api.get('/links', {
      params: { ...meta },
    });

    setData(data.data);
    setMetadata(data.pagination);
  };

  React.useEffect(() => {
    const newMetadata: Metadata = {
      ...metadata,
      sort_by: 'asc' as const,
      order_by: 'created_at',
      page: pagination.pageIndex,
      limit: pagination.pageSize,
    };

    setMetadata(newMetadata);
    const APICall = setTimeout(() => {
      getAllData(newMetadata);
    }, 300);
    return () => {
      clearTimeout(APICall);
    };
  }, [pagination.pageIndex, pagination.pageSize]);

  const table = useReactTable({
    data: data?.items?.short_links || [],
    columns: columnDefs,
    pageCount: data?.pagination.total_pages,
    state: {
      globalFilter,
      sorting,
      pagination,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    manualFiltering: true,
    manualSorting: true,
  });

  const { handleSubmit } = methods;
  const { mutate: CreateLink } = useCreateLink();

  const onValdiSubmit = (data: z.infer<typeof ShortLinkSchema>) => {
    CreateLink(data);
  };

  return (
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
          className="text-center max-md:text-3xl"
        >
          Shorten Link
        </Typography>
      </div>

      <div className="flex flex-col items-center justify-between space-y-10 rounded-xl bg-[#FFFDF0] px-8 py-6">
        <div className="flex flex-col items-center justify-center">
          <Typography
            variant="h5"
            weight="semibold"
            className="text-green-300 max-md:text-3xl"
          >
            Data Link
          </Typography>
          <Typography
            variant="t"
            weight="medium"
            className="text-center text-green-400 max-md:text-lg"
          >
            Masukkan link yang akan dipersingkat
          </Typography>
        </div>

        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onValdiSubmit)}
            className="w-full space-y-4"
          >
            <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
              <Input
                id="name"
                label="Name Link"
                placeholder="Guidebook Pendaftaran OMITS"
                required
                labelTextClassname="text-black-300"
                className="w-full placeholder:opacity-50"
              />
              <Input
                id="original_link"
                label="Original Link"
                placeholder="https://drive.google.com/drive/u/0/"
                required
                labelTextClassname="text-black-300"
                className="w-full placeholder:opacity-50"
              />
            </div>

            <div className="flex items-center justify-center gap-4 max-md:flex-col max-md:items-start">
              <Typography
                variant="h6"
                weight="medium"
                className="text-green-300 max-md:text-xl"
              >
                omits18.com/m/
              </Typography>
              <Input
                id="shorten_link"
                placeholder="GuidebookPendaftaran"
                required
                labelTextClassname="text-black-300"
                className="w-full placeholder:opacity-50"
              />
              <Button
                type="submit"
                variant={'green'}
                size={'md'}
                className="flex h-full items-center justify-between py-3 max-md:w-full"
              >
                <span>Shorten</span>
                <ArrowRight />
              </Button>
            </div>
          </form>
        </FormProvider>
        <div></div>
      </div>

      <div className="flex flex-col items-center justify-between space-y-10 rounded-xl bg-[#FFFDF0] p-8">
        <TableLayout
          data={data?.items.short_links ?? []}
          table={table}
          withHeader={false}
          setPagination={setPagination}
        />
      </div>
    </section>
  );
}
