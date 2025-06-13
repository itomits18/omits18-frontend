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

type FormValues = {
  region: string;
  kodePos: string;
  namaKampus: string;
  alamatKampus: string;
};

interface FormPage1Props {
  onSubmit: (data: FormValues) => void;
}

export default function FormPage1({ onSubmit }: FormPage1Props) {
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;

  const onValidSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValidSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <SelectInput
            id="region"
            label="Region"
            placeholder="Pilih Region"
            options={regionOptions}
            validation={{ required: 'Region wajib diisi.' }}
          />

          <Input
            label="Kode Pos"
            required
            id="kodePos"
            sizes={'sm'}
            type="text"
            placeholder="Masukkan kode pos"
            validation={{
              required: 'This field is required',
            }}
            className="bg-neutral-main"
            labelTextClassname="text-black-300"
          />
          <Input
            label="Nama Kampus"
            id="namaKampus"
            sizes={'sm'}
            type="text"
            placeholder="Masukkan nama kampus"
            validation={{
              required: 'This field is required',
            }}
            className="bg-neutral-main"
            labelTextClassname="text-black-300"
          />
          <Input
            label="Alamat Kampus"
            id="alamatKampus"
            sizes={'sm'}
            type="text"
            placeholder="Masukkan alamat kampus"
            validation={{
              required: 'This field is required',
            }}
            className="bg-neutral-main"
            labelTextClassname="text-black-300"
          />
        </div>

        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            className="font-lora w-full bg-blue-400 text-lg hover:bg-blue-700"
          >
            Selanjutnya
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
