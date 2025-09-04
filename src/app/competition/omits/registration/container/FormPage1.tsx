'use client';
import useGetRegion from '@/app/competition/hooks/useGetRegion';
import Input from '@/components/form/Input';
import { SelectInput } from '@/components/form/SelectInput';
import { Button } from '@/components/ui/button';
import { regionOptions } from '@/contents/ListRegions';
import { RegistrationOMITS1 } from '@/validation/RegistrationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import { z } from 'zod';
import { formDataType } from '../page';

const bundleOptions = [
  { value: 'Individu', label: 'Individu' },
  { value: 'bundle', label: 'Bundle 5 Orang' },
];

const jenjangKompetisiOptions = [
  { value: 'SD', label: 'SD' },
  { value: 'SMP', label: 'SMP' },
  { value: 'SMA', label: 'SMA' },
];

interface FormPage1Props {
  onNext: () => void;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
}

export default function FormPage1({ onNext, setFormData }: FormPage1Props) {
  const [kodepos, setKodepos] = useState('');
  const methods = useForm<z.infer<typeof RegistrationOMITS1>>({
    mode: 'onChange',
    resolver: zodResolver(RegistrationOMITS1),
    defaultValues: {
      bundle: '',
      jenjangKompetisi: '',
      nomorWali: '',
      region: '',
      kodePos: '',
      namaSekolah: '',
      alamatSekolah: '',
    },
  });
  const [debouncedKodepos] = useDebounce(kodepos, 2000); // delay 500ms

  const { data, isLoading, status } = useGetRegion(debouncedKodepos);
  const region = regionOptions.find(
    (x) => x.value.toUpperCase() === data?.region,
  );

  useEffect(() => {
    if (region) {
      methods.setValue('region', region.label);
    }
  }, [region]);

  useEffect(() => {
    const getData = localStorage.getItem('om_sd1');

    if (getData) {
      methods.reset(JSON.parse(getData || '{}'));
      setKodepos(JSON.parse(getData).kodePos);
    }
  }, [methods.reset]);

  const onValidSubmit: SubmitHandler<z.infer<typeof RegistrationOMITS1>> = (
    data,
  ) => {
    onNext();
    setFormData((pre) => {
      return {
        ...pre,
        ...data,
      };
    });
    localStorage.setItem('om_sd1', JSON.stringify(data));
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
            label="Kode Pos Sekolah"
            required
            id="kodePos"
            sizes={'sm'}
            type="text"
            placeholder="Masukkan kode pos sekolah"
            validation={{ required: 'Kode pos wajib diisi.' }}
            className="bg-neutral-main"
            labelTextClassname="text-black-300"
            onChange={(e) => {
              setKodepos(e.target.value);
            }}
          />

          <Input
            label="Region"
            id="region"
            sizes={'sm'}
            type="text"
            required
            disabled
            value={
              !kodepos
                ? ''
                : status === 'error'
                  ? 'Tidak Cocok.'
                  : data && isLoading
                    ? region?.label
                    : 'Mecocokkan Region...'
            }
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
            defaultValue={methods.getValues().jenjangKompetisi}
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
