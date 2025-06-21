'use client';
import Input from '@/components/form/Input';
import { SelectInput } from '@/components/form/SelectInput';
import { Button } from '@/components/ui/button';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

const regionOptions = [
  { value: 'offline_1', label: 'Offline 1 - Surabaya, Gresik, dan Bangkalan' },
  { value: 'offline_2', label: 'Offline 2 - Sidoarjo dan Pasuruan' },
  { value: 'offline_3', label: 'Offline 3 - Mojokerto dan Jombang' },
  { value: 'offline_4', label: 'Offline 4 - Malang dan Kota Batu' },
  {
    value: 'offline_5',
    label: 'Offline 5 - Tulungagung, Trenggalek, dan Blitar',
  },
  { value: 'offline_6', label: 'Offline 6 - Kediri dan Nganjuk' },
  { value: 'offline_7', label: 'Offline 7 - Tuban, Bojonegoro, dan Lamongan' },
  {
    value: 'offline_8',
    label: 'Offline 8 - Madiun, Ngawi, Ponorogo, Pacitan, dan Magetan',
  },
  { value: 'offline_9', label: 'Offline 9 - Sampang, Pamekasan, dan Sumenep' },
  {
    value: 'offline_10',
    label: 'Offline 10 - Jember, Probolinggo, dan Lumajang',
  },
  {
    value: 'offline_11',
    label: 'Offline 11 - Jakarta, Bogor, Depok, Tangerang, dan Bekasi',
  },
  { value: 'offline_12', label: 'Offline 12 - Bali' },
  {
    value: 'online_1',
    label: 'Online 1 - Banyuwangi, Bondowoso, dan Situbondo',
  },
  { value: 'online_2', label: 'Online 2 - DI Yogyakarta dan Jawa Tengah' },
  {
    value: 'online_3',
    label:
      'Online 3 - Jawa Barat (kecuali Bogor, Depok, dan Bekasi) dan Banten',
  },
  { value: 'online_4', label: 'Online 4 - Sumatra' },
  { value: 'online_5', label: 'Online 5 - Sulawesi dan Kalimantan' },
  { value: 'online_6', label: 'Online 6 - NTB, NTT, dan Papua' },
];

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
  const methods = useForm<FormValues>({
    mode: 'onChange',
  });

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
          />

          <Input
            label="Region"
            id="region"
            sizes={'sm'}
            type="text"
            disabled
            value="Offline 1 - Surabaya, Gresik, dan Bangkalan"
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
