'use client';

import Typography from '@/components/Typography';
import Option from '@/components/form/Option';
import TableLayout from '@/components/form/TableLayout';

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
import Link from 'next/link';
import * as React from 'react';
import StatisticSection from '../(container)/StatisticSection';
import { GetParticipants } from '../hooks/useGetAllParticipants';

type metadataType = {
  order_by: string;
  sort_by: 'asc' | 'dsc';
  limit: number;
  page: number;
  type: 'OMITS' | 'MISSION';
};

type Participant = GetParticipants['participants'][number];

export default function page() {
  const filterTypeList = [
    'Filter',
    'Status',
    'Division',
    'Primary Division',
    'Secondary Division',
  ];
  const filterValueLists = [
    'None',
    ['All', 'Interviewed', 'Pending', 'Accepted', 'Rejected'],
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
    limit: 10,
    page: 1,
    type: 'OMITS',
  });

  const columnDefs: ColumnDef<Participant>[] = [
    {
      id: 'no',
      header: 'No',
      cell: (info) =>
        pagination.pageIndex * pagination.pageSize + info.row.index + 1,
    },
    {
      accessorKey: 'name',
      header: 'Nama',
    },
    {
      accessorKey: 'participant_detail.type',
      header: 'Tipe',
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
          VERIFIED: 'bg-green-200 text-white',
          REVISI: 'bg-yellow-300 text-white',
          REJECT: 'bg-additions-brown-200 text-white',
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
              {status}
            </Typography>
          </div>
        );
      },
    },
    {
      id: 'id',
      header: 'Detail',
      cell: (info) => (
        <Link href={'/admin/omits/' + info.row.original.id}>
          <Typography className="underline">Lihat Detail</Typography>
        </Link>
      ),
    },
  ];

  const getAllData = async (meta: metadataType) => {
    const { data } = await api.get('/participants', {
      params: {
        ...meta,
      },
    });

    if (!data.data || data.data.items.participants.length === 0) {
      setData(undefined);
      if (meta.page > 1) {
        setPagination((prev) => ({ ...prev, pageIndex: 0 }));
      }
      return;
    }

    setData(data.data);
    setMetadata(data.pagination);
  };

  React.useEffect(() => {
    // let filterBy = '';
    // if (filterType === 'Primary Division') filterBy = 'primary_division';
    // else if (filterType === 'Secondary Division')
    //   filterBy = 'secondary_division';
    // else if (filterType === 'Status') filterBy = 'status';
    // else if (filterType === 'Division') filterBy = 'choice_division';

    if (globalFilter) {
      setFilterType('Filter');
      setFilterValue('None');
    }

    // const filterChoice = '';
    if (
      ['Primary Division', 'Secondary Division', 'Division'].includes(
        filterType,
      ) &&
      !['None', 'All'].includes(filterValue)
    ) {
      // const getSubdivID = AllSubdiv?.filter((x) => x.name === filterValue)[0]
      //   ?.id;
      // filterChoice = getSubdivID as string;
    }

    const isFilterChange =
      globalFilter || filterType !== 'Filter' || filterValue !== 'None';

    if (isFilterChange) {
      setPagination((prev) => ({ ...prev, pageIndex: 0 }));
    }
    const targetPage = isFilterChange ? 1 : pagination.pageIndex + 1;
    const newMetadata = {
      ...metadata,
      // filter: ['None', 'All'].includes(filterValue)
      //   ? globalFilter
      //   : filterChoice
      //     ? filterChoice
      //     : filterValue,
      // filter_by: ['None', 'All'].includes(filterValue) ? 'name' : filterBy,
      page: targetPage,
      limit: pagination.pageSize,
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
      <div className="flex gap-4">
        <Option
          value={filterType}
          onChange={(e) => {
            setFilterType(e.target.value);
            setFilterValue('');
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
    <section className="space-y-8 rounded-xl bg-[#FFFDF0] p-8">
      <StatisticSection section="omits" />

      <TableLayout
        data={data?.items.participants ?? []}
        table={table}
        headerCustom={<HeaderCustom />}
        setPagination={setPagination}
      />
    </section>
  );
}
