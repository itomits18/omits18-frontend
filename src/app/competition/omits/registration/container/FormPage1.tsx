'use client';
import useGetRegion from '@/app/competition/hooks/useGetRegion';
import Input from '@/components/form/Input';
import { SelectInput } from '@/components/form/SelectInput';
import { Button } from '@/components/ui/button';
import { regionOptions } from '@/contents/ListRegions';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

const bundleOptions = [
  { value: 'Individu', label: 'Individu' },
  { value: 'bundle', label: 'Bundle 5 Orang' },
];

const jenjangKompetisiOptions = [
  { value: 'SD', label: 'SD' },
  { value: 'SMP', label: 'SMP' },
  { value: 'SMA', label: 'SMA' },
];

export type FormValues = {
  bundle?: string;
  jenjangKompetisi?: string;
  nomorWali?: string;
  region?: string;
  kodePos?: string;
  namaSekolah?: string;
  alamatSekolah?: string;
};

interface FormPage1Props {
  onSubmit: (data: FormValues) => void;
}

export default function FormPage1({ onSubmit }: FormPage1Props) {
  const [kodepos, setKodepos] = useState('');
  const methods = useForm<FormValues>({
    mode: 'onChange',
  });

  const { data } = useGetRegion(kodepos);
  const region = regionOptions.find(
    (x) => x.value.toUpperCase() === data?.region,
  );

  const onValidSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onValidSubmit)}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
          <SelectInput
            id="bundle"
            label="Bundle"
            placeholder="Pilih Bundle"
            options={bundleOptions}
            validation={{ required: 'Bundle wajib diisi.' }}
            className="bg-neutral-main"
            helperText={
              methods.watch('bundle') === 'bundle' &&
              'Penting: Pastikan seluruh peserta berasal dari sekolah yang sama.*'
            }
            helperTextClassName="font-semibold text-red-500"
          />

          <Input
            label="Nomor Wali"
            required
            id="nomorWali"
            sizes={'sm'}
            type="text"
            placeholder="Masukkan nomor wali"
            validation={{ required: 'Nomor wali wajib diisi.' }}
            className="bg-neutral-main"
            labelTextClassname="text-black-300"
          />

          <Input
            label="Kode Pos"
            required
            id="kodePos"
            sizes={'sm'}
            type="text"
            placeholder="Masukkan kode pos"
            validation={{ required: 'Kode pos wajib diisi.' }}
            className="bg-neutral-main"
            labelTextClassname="text-black-300"
            onChange={(e) => {
              setTimeout(() => {
                setKodepos(e.target.value);
              }, 3000);
            }}
          />

          <Input
            label="Region"
            id="region"
            sizes={'sm'}
            type="text"
            disabled
            value={data ? region?.label : ''}
            // value=""
            className="bg-neutral-main cursor-not-allowed"
            labelTextClassname="text-black-300"
          />
          <SelectInput
            id="jenjangKompetisi"
            label="Jenjang Kompetisi"
            placeholder="Pilih Jenjang Kompetisi"
            options={jenjangKompetisiOptions}
            validation={{ required: 'Jenjang kompetisi wajib diisi.' }}
          />
          <Input
            label="Nama Sekolah"
            id="namaSekolah"
            required
            sizes={'sm'}
            type="text"
            placeholder="Masukkan nama Sekolah"
            validation={{ required: 'Nama sekolah wajib diisi.' }}
            className="bg-neutral-main"
            labelTextClassname="text-black-300"
          />

          <div className="md:col-span-2">
            <Input
              label="Alamat Sekolah"
              id="alamatSekolah"
              required
              sizes={'sm'}
              type="text"
              placeholder="Masukkan alamat Sekolah"
              validation={{ required: 'Alamat sekolah wajib diisi.' }}
              className="bg-neutral-main"
              labelTextClassname="text-black-300"
            />
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            className="font-lora w-full bg-green-200 text-lg hover:bg-green-700"
          >
            Selanjutnya
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
