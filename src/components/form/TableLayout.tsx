import Typography from '@/components/Typography';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';
import { Table as ReactTable, flexRender } from '@tanstack/react-table';
import React from 'react';
import Option from './Option';
import PaginationControl from './Pagination';
import Search from './Search';

type TableProps<T extends object> = {
  table: ReactTable<T>;
  data: T[];
  headerCustom?: React.ReactNode;
  omitSort?: boolean;
  withFilter?: boolean;
  withHeader?: boolean;
  setPagination: React.Dispatch<
    React.SetStateAction<{
      pageIndex: number;
      pageSize: number;
    }>
  >;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TableLayout<T extends object>({
  table,
  headerCustom,
  data,
  withHeader = true,
  setPagination,
}: TableProps<T>) {
  return (
    <div className="w-full">
      <div className="my-5 min-h-fit w-full space-y-5 rounded-xl">
        {withHeader && (
          <div className="flex flex-col items-center justify-between gap-4 xl:flex-row">
            <Search
              table={table}
              setPagination={setPagination}
              className="w-full rounded-lg border bg-white xl:w-auto"
            />

            <div className="flex min-w-full items-center justify-between space-x-3 max-md:flex-col max-md:space-y-3 max-md:space-x-0 md:w-auto md:space-y-0 xl:min-w-fit xl:justify-normal">
              {headerCustom}

              <Option
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
              >
                {[10, 25, 50, 100, 500, 1000, 2000, 5000].map((page) => (
                  <option key={page} value={page} className="cursor">
                    {page} Entries
                  </option>
                ))}
              </Option>
            </div>
          </div>
        )}

        <div className="w-full overflow-x-auto">
          <Table className="shadow-custom-white w-full overflow-hidden rounded-xl border-2 border-green-100">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="text-white-500 bg-green-300 text-center"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableCell
                        key={header.id}
                        className="border-2 border-green-100 capitalize"
                      >
                        <Typography
                          variant="p"
                          weight="medium"
                          className="text-neutral-main capitalize"
                        >
                          {typeof header?.column?.columnDef?.header ===
                          'function'
                            ? header.id
                            : (header?.column?.columnDef?.header ?? 'N/A')}
                        </Typography>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows.length === 0 ? (
                <TableRow className="text-black-500 bg-neutral-main text-center">
                  <TableCell
                    colSpan={table.getAllColumns().length}
                    className="text-center"
                  >
                    <Typography variant="t" weight="medium">
                      No Data
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="text-black-500 bg-neutral-main max-w-[100px] text-center"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        title={cell.getValue() as string}
                        className="truncate overflow-hidden border"
                      >
                        <Typography
                          as="h6"
                          variant="t"
                          weight="medium"
                          className="mx-auto max-w-[250px] truncate break-words"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <PaginationControl table={table} data={data} />
      </div>
    </div>
  );
}
