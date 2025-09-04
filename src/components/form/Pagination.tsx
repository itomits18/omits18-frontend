'use client';

import { RowData, Table } from '@tanstack/react-table';
import * as React from 'react';
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { parseAsInteger, useQueryStates } from 'nuqs';
import Typography from '../Typography';
import { Button } from '../ui/button';
// import { buildPaginationControl } from "@/lib/pagination";

// type PaginationState = {
//   page: number;
//   size: number;
// };

type PaginationControlProps<T extends RowData> = {
  data: T[];
  table: Table<T>;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 *
 * @see https://javascript.plainenglish.io/create-a-pagination-in-a-react-way-df5c6fe1e0c7
 */
export default function PaginationControl<T extends RowData>({
  className,
  data,
  table,
  ...rest
}: PaginationControlProps<T>) {
  const currentPage: number = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();
  //   const paginationControl = buildPaginationControl(currentPage, pageCount);

  const pathname = usePathname();
  const router = useRouter();

  const [pageNuqs, setPageNuqs] = useQueryStates({
    page: parseAsInteger.withDefault(1),
  });

  const pageQuery = Number(useSearchParams().get('page'));

  React.useEffect(() => {
    if (table.getState().globalFilter) {
      setPageNuqs((pre) => ({
        ...pre,
        page: 1,
      }));
    }

    if (!pageQuery) {
      router.push(`${pathname}?page=${pageNuqs.page}`);
    }

    if (table.getState().pagination) {
      table.setPagination((pre) => ({
        ...pre,
        pageIndex: pageNuqs.page,
      }));
    }
  }, [table.getState().globalFilter, currentPage]);

  const ListPage = () => {
    if (pageCount < 5)
      return Array.from({ length: pageCount }).map((_, i) => i + 1);
    else {
      return Array.from({ length: 5 }).map((_x, i) => {
        if (currentPage >= 4 && currentPage <= pageCount - 2) {
          return currentPage - 2 + i;
        } else {
          if (currentPage >= pageCount - 1) {
            return pageCount - (4 - i);
          } else {
            return i + 1;
          }
        }
      });
    }
  };

  const handlePageControlClick = (page: string | number) => {
    if (page !== '...') {
      table.setPageIndex(page as number);
    }
  };

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-x-2 max-md:flex-col md:justify-between',
        className,
      )}
      {...rest}
    >
      <Typography
        variant="t"
        weight="medium"
        className="text-white-50 tracking-wide"
      >
        Page {currentPage} of {pageCount}
      </Typography>
      <div className="flex items-center gap-1">
        <ChevronLeft
          size={18}
          className={cn(
            'text-white-50 h-auto w-8 cursor-pointer',
            !table.getCanPreviousPage() && 'cursor-not-allowed text-gray-700',
          )}
          onClick={() => {
            setPageNuqs(() => ({
              page: currentPage - 1,
            }));
            table.setPagination((pre) => ({
              ...pre,
              pageIndex: pre.pageIndex - 1,
            }));
          }}
        />
        {(ListPage() as number[]).map((pageIndex, index) => (
          <Button
            key={index}
            className={cn(
              'bg-neutral-10 hover:bg-info-main active:bg-info-main flex min-w-[38px] justify-center rounded-md border-none !p-2 !font-semibold text-gray-600 shadow-none',
              currentPage === pageIndex && 'bg-green-200 text-neutral-50',
            )}
            onClick={() => {
              handlePageControlClick(pageIndex);
              setPageNuqs(() => ({
                page: pageIndex,
              }));
            }}
          >
            <Typography variant="t" weight="medium">
              {pageIndex}
            </Typography>
          </Button>
        ))}

        <ChevronRight
          size={18}
          className={cn(
            'text-white-50 h-auto w-8 cursor-pointer',
            table.getState().pagination.pageIndex === table.getPageCount() &&
              'cursor-not-allowed text-gray-700',
          )}
          onClick={() => {
            setPageNuqs(() => ({
              page: currentPage + 1,
            }));
            table.setPagination((pre) => ({
              ...pre,
              pageIndex: pre.pageIndex + 1,
            }));
          }}
        />
      </div>
    </div>
  );
}
