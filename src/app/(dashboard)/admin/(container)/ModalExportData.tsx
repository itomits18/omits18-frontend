import Typography from '@/components/Typography';
import { SelectInput } from '@/components/form/SelectInput';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { RowData, Table } from '@tanstack/react-table';
import React, { SetStateAction, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useExportExcel from '../hooks/useExportExcel';

type ModalType = {
  Description?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  ModalMethod?: () => void;
  table: Table<RowData>;
};

const ExportDataSchema = z.object({
  type: z
    .string({
      required_error: 'type wajib diisi',
      invalid_type_error: 'type harus berupa string',
    })
    .refine((val) => ['OMITS', 'MISSION'].includes(val), {
      message: 'Pilih type yang valid',
    }),
  jumlah: z
    .string({
      required_error: 'Jumlah per page wajib diisi',
      invalid_type_error: 'Jumlah per page harus berupa string',
    })
    .refine((val) => ['10', '25', '50', '100', '150', '200'].includes(val), {
      message: 'Pilih bundle yang valid',
    }),
  page: z.string({
    required_error: 'Bundle wajib diisi',
    invalid_type_error: 'Bundle harus berupa string',
  }),
});

type optionType = {
  value: string;
  label: string;
};

export type customMetadata = {
  order_by: string;
  sort_by: 'asc' | 'dsc';
  limit: number;
  page: number;
};

export default function ModalExportData({
  table,
  open,
  setOpen,
  Description,
}: ModalType) {
  const [amount, setAmount] = useState('');
  const [page, setPage] = useState('');

  const [metadata, setMetadata] = useState<customMetadata>({
    order_by: 'created_at',
    sort_by: 'asc',
    limit: parseInt(amount),
    page: parseInt(page),
  });

  const methods = useForm({
    mode: 'onTouched',
    resolver: zodResolver(ExportDataSchema),
  });

  const { handleSubmit } = methods;
  const { refetch } = useExportExcel(metadata);

  const onSubmit = () => {
    setMetadata((pre) => ({
      ...pre,
      limit: parseInt(amount),
      page: parseInt(page),
    }));
    refetch();
  };

  const onChangeAmountPage = () => {
    const DataArray: optionType[] = [
      {
        value: '0',
        label: '0',
      },
    ];

    if (!amount) {
      return DataArray;
    } else {
      const totalPagination = table.getPageCount();
      const totalPageAllowed = Math.ceil(totalPagination / parseInt(amount));

      for (let i = 1; i <= totalPageAllowed; i++) {
        DataArray[i - 1] = { value: i.toString(), label: i.toString() };
      }

      return DataArray;
    }
  };

  return (
    <>
      <div
        className={cn(
          'bg-black-200/20 absolute top-0 left-0 z-20 min-h-screen w-full transition-all duration-200',
          open ? 'block opacity-100' : 'hidden opacity-0',
        )}
      ></div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-neutral-main">
          <DialogHeader>
            <DialogTitle>
              <Typography
                variant="h6"
                weight="bold"
                className="text-center max-md:text-2xl"
              >
                Export Data
              </Typography>
            </DialogTitle>
            <DialogDescription>{Description}</DialogDescription>
          </DialogHeader>

          <div>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="gap-6 space-y-6"
              >
                <div className="flex flex-col gap-6 md:flex-row">
                  <SelectInput
                    id="jumlah"
                    label="Jumlah data per page"
                    placeholder="Pilih jumlah data"
                    options={[
                      { value: '10', label: '10' },
                      { value: '25', label: '25' },
                      { value: '50', label: '50' },
                      { value: '100', label: '100' },
                      { value: '150', label: '150' },
                      { value: '200', label: '200' },
                    ]}
                    onChange={(val) => {
                      setAmount(val);
                      setMetadata((pre) => ({
                        ...pre,
                        limit: parseInt(val),
                      }));
                    }}
                  />
                  <SelectInput
                    id="page"
                    label="Halaman"
                    placeholder="Pilih halaman"
                    options={onChangeAmountPage()}
                    onChange={(val) => {
                      setPage(val);
                      setMetadata((pre) => ({
                        ...pre,
                        page: parseInt(val),
                      }));
                    }}
                  />
                </div>
              </form>
            </FormProvider>

            {page && (
              <Typography variant="p" className="my-3 max-md:text-base">
                Export data dari nomor{' '}
                {(parseInt(page) - 1) * parseInt(amount) || 1} hingga{' '}
                {parseInt(page) * parseInt(amount)}
              </Typography>
            )}
          </div>

          <DialogFooter className="flex flex-col space-x-3">
            <Button
              type="submit"
              variant="blue"
              onClick={() => {
                onSubmit();
                setOpen(false);
              }}
              className="w-full"
            >
              Export
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
