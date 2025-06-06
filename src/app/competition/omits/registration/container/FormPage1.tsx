'use client';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

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
  const methods = useForm<FormValues>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onValidSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValidSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-1">
            <label
              htmlFor="bundle"
              className="font-Lora text-lg font-bold text-gray-900"
            >
              Bundle <span className="text-red-500">*</span>
            </label>
            <Controller
              name="bundle"
              control={control}
              rules={{ required: 'This field is required.' }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="font-Lora text-black-300 placeholder:text-black-100">
                    <SelectValue placeholder="Pilih Bundle" />
                  </SelectTrigger>
                  <SelectContent>
                    {bundleOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.bundle && (
              <p className="text-sm text-red-600">{errors.bundle.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <label
              htmlFor="jenjangKompetisi"
              className="font-Lora text-lg font-bold text-gray-900"
            >
              Jenjang Kompetisi <span className="text-red-500">*</span>
            </label>
            <Controller
              name="jenjangKompetisi"
              control={control}
              rules={{ required: 'This field is required.' }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="font-Lora text-black-300 placeholder:text-black-100">
                    <SelectValue placeholder="Pilih Jenjang Kompetisi" />
                  </SelectTrigger>
                  <SelectContent>
                    {jenjangKompetisiOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.jenjangKompetisi && (
              <p className="text-sm text-red-600">
                {errors.jenjangKompetisi.message}
              </p>
            )}
          </div>
          <div className="space-y-1">
            <label
              htmlFor="region"
              className="font-Lora text-lg font-bold text-gray-900"
            >
              Region <span className="text-red-500">*</span>
            </label>
            <Controller
              name="region"
              control={control}
              rules={{ required: 'This field is required.' }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="font-Lora text-black-300 placeholder:text-black-100">
                    <SelectValue placeholder="Pilih Region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regionOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.region && (
              <p className="text-sm text-red-600">{errors.region.message}</p>
            )}
          </div>
          <Input
            label="Nomor Wali"
            required
            id="nomorWali"
            sizes={'sm'}
            type="text"
            placeholder="Masukkan nomor wali"
            validation={{
              required: 'This field is required',
            }}
            className="bg-neutral-main"
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
          />
          <Input
            label="Nama Sekolah"
            id="namaSekolah"
            sizes={'sm'}
            type="text"
            placeholder="Masukkan nama Sekolah"
            validation={{
              required: 'This field is required',
            }}
            className="bg-neutral-main"
          />
          <div className="md:col-span-2">
            <Input
              label="Alamat Sekolah"
              id="alamatSekolah"
              sizes={'sm'}
              type="text"
              placeholder="Masukkan alamat Sekolah"
              validation={{
                required: 'This field is required',
              }}
              className="bg-neutral-main"
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
