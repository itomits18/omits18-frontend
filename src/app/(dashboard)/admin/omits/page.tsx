'use client';

import Typography from '@/components/Typography';
import Option from '@/components/form/Option';
import TableLayout from '@/components/form/TableLayout';

import { Button } from '@/components/ui/button';
import api from '@/lib/api';
import { Metadata, PaginateData } from '@/types/api';
import {
  ColumnDef,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import ModalExportData from '../(container)/ModalExportData';
import StatisticSection from '../(container)/StatisticSection';
import { GetParticipants } from '../hooks/useGetAllParticipants';

// type metadataType = {
//   order_by: string;
//   sort_by: 'asc' | 'dsc';
//   limit: number;
//   page: number;
//   type: 'OMITS' | 'MISSION';
//   status: string;
// };

type Participant = GetParticipants['participants'][number];

export default function page() {
  const filterTypeList = ['Filter', 'Status', 'Jenjang'];
  const filterValueLists = [
    'None',
    ['All', 'PAYMENT', 'PENDING', 'REVISI', 'VERIFIED', 'REJECTED'],
    ['All', 'SD', 'SMP', 'SMA'],
  ];

  // const { data: AllSubdiv } = useGetSubdivision();
  // const newAllSubdiv = AllSubdiv?.map((x) => x.name) ?? [];
  // filterValueLists.push(['All', ...newAllSubdiv]);

  const [filterType, setFilterType] = React.useState(filterTypeList[0]);
  const [filterValue, setFilterValue] = React.useState('None');
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const [data, setData] = React.useState<PaginateData<GetParticipants>>();
  const [metadata, setMetadata] = React.useState<Metadata>({
    order_by: 'created_at',
    sort_by: 'asc',
    limit: pagination.pageSize,
    page: pagination.pageIndex,
    type: 'OMITS',
    status: '',
  });

  const [, setModalExport] = React.useState(false);

  const columnDefs: ColumnDef<Participant>[] = [
    {
      id: 'no',
      header: 'No',
      cell: (info) =>
        (pagination.pageIndex - 1) * pagination.pageSize + info.row.index + 1,
    },
    {
      accessorKey: 'name',
      header: 'Nama',
    },
    {
      accessorKey: 'participant_detail.sub_type',
      header: 'Jenjang',
    },
    {
      accessorKey: 'instance_name',
      header: 'Sekolah',
    },
    {
      accessorKey: 'participant_detail.status',
      header: 'Status Pendaftar',
      cell: (info) => {
        const status = info.getValue() as string;

        const statusStyles = {
          PAYMENT: 'bg-blue-400 text-white',
          VERIFIED: 'bg-green-200 text-white',
          NEED_REVISION: 'bg-yellow-300 text-white',
          REJECTED: 'bg-additions-brown-200 text-white',
          default: 'bg-black-100 text-black',
        };

        const statusColor =
          statusStyles[status as keyof typeof statusStyles] ||
          statusStyles.default;

        return (
          <div
            className={
              'rounded-lg px-4 py-2 text-sm font-semibold ' + statusColor
            }
          >
            <Typography variant="p" weight="medium" className="capitalize">
              {status === 'NEED_REVISION' ? 'REVISI' : status}
            </Typography>
          </div>
        );
      },
    },
    {
      id: 'id',
      header: 'Detail',
      cell: (info) => (
        <Link href={'/admin/omits/' + info.row.original.id} target="_blank">
          <Typography className="underline">Lihat Detail</Typography>
        </Link>
      ),
    },
  ];

  const getAllData = async (meta: Metadata) => {
    const { data } = await api.get('/participants', {
      params: {
        ...meta,
      },
    });

    setData(data.data);
    setMetadata(data.pagination);
  };

  React.useEffect(() => {
    if (globalFilter) {
      setFilterType('Filter');
      setFilterValue('None');
    }

    const newMetadata: Metadata = {
      ...metadata,
      sort_by: 'asc' as const,
      order_by: 'created_at',
      page: pagination.pageIndex,
      limit: pagination.pageSize,
      type: 'OMITS',
      sub_type:
        filterType === 'Jenjang' && filterValue !== 'All' ? filterValue : '',
      status:
        filterType === 'Status' && filterValue !== 'All'
          ? filterValue === 'REVISI'
            ? 'NEED_REVISION'
            : filterValue
          : '',
      search: globalFilter,
    };

    setMetadata(newMetadata);
    const APICall = setTimeout(() => {
      getAllData(newMetadata);
    }, 300);

    return () => {
      clearTimeout(APICall);
    };
  }, [
    pagination.pageIndex,
    globalFilter,
    pagination.pageSize,
    filterType,
    filterValue,
  ]);

  const table = useReactTable({
    data: data?.items?.participants || [],
    columns: columnDefs,
    // pageCount: metadata.total_page,
    pageCount: data?.pagination?.total_pages || 1,
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

  // statistics
  // const { data: DataStatistic, isLoading } = useGetStatistics();

  const HeaderCustom = () => {
    const indexValue =
      filterType === 'Filter' ? 0 : filterType === 'Status' ? 1 : 2;
    const filterResult = indexValue ? filterValueLists[indexValue] : ['None'];

    return (
      <div className="flex gap-4 max-md:w-full">
        <Option
          value={filterType}
          onChange={(e) => {
            setFilterType(e.target.value);
            setFilterValue('');
            setPagination((pre) => ({
              ...pre,
              pageIndex: 1,
            }));
          }}
        >
          {filterTypeList.map((page) => (
            <option key={page} value={page} className="cursor">
              {page}
            </option>
          ))}
        </Option>
        <Option
          value={filterValue}
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        >
          {(filterResult as string[]).map((page) => (
            <option key={page} value={page} className="cursor">
              {page}
            </option>
          ))}
        </Option>
      </div>
    );
  };

  return (
    <>
      <section className="space-y-8 rounded-xl bg-[#FFFDF0] p-8">
        <div className="flex items-center justify-between gap-3 max-md:flex-col">
          <Typography
            variant="h5"
            weight="semibold"
            className="text-center text-green-300 max-md:text-3xl"
          >
            Dashboard OMITS
          </Typography>

          <Button
            variant="green"
            size={'lg'}
            className="flex items-center justify-center space-x-1 py-3"
            onClick={() => setModalExport(true)}
          >
            <FileText size={32} />
            <span>Download Spreadsheet</span>
          </Button>
        </div>

        <StatisticSection />

        <TableLayout
          data={data?.items.participants ?? []}
          table={table}
          headerCustom={<HeaderCustom />}
          setPagination={setPagination}
        />
      </section>

      <ModalExportData
        open={true}
        setOpen={setModalExport}
        table={table as any}
        metadata={metadata}
      />
    </>
  );
}
