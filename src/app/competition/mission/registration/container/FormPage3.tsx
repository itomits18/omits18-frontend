'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';
import { useState } from 'react';
import Payment from './Payment';

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

interface FormPage3Props {
  formData: any;
  onBack: () => void;
  onSubmit: () => void;
}

const DisplayField = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <p className="font-Lora text-base font-semibold text-blue-400">{label}</p>
    <div className="w-full rounded-md border bg-gray-50 px-3 py-2 text-gray-800">
      {value || '-'}
    </div>
  </div>
);

const DisplayFileField = ({
  label,
  file,
}: {
  label: string;
  file: File | FileList;
}) => {
  const fileName =
    file instanceof File ? file.name : (file as FileList)?.[0]?.name;
  return (
    <div className="space-y-1">
      <p className="font-lora text-base font-semibold text-blue-400">{label}</p>
      <div className="flex w-full items-center gap-2 rounded-md border bg-gray-50 px-3 py-2 text-gray-800">
        <FileText size={16} className="text-gray-500" />
        <span className="truncate">{fileName || 'Tidak ada file'}</span>
      </div>
    </div>
  );
};

export default function FormPage3({ formData, onSubmit }: FormPage3Props) {
  const [activeTab, setActiveTab] = useState<'peserta1' | 'peserta2'>(
    'peserta1',
  );

  const selectedRegionValue = formData.region;
  const regionDisplayLabel =
    regionOptions.find((option) => option.value === selectedRegionValue)
      ?.label || selectedRegionValue;

  return (
    <div className="flex w-full flex-col items-start gap-8 lg:flex-row">
      <div className="order-2 w-full rounded-xl bg-white p-6 shadow-lg lg:order-1 lg:w-3/5">
        <Typography
          variant="h2"
          font="Cinzel"
          weight="bold"
          className="mb-6 text-center text-2xl text-[#244D80] md:text-3xl"
        >
          DETAIL PENDAFTAR
        </Typography>
        <div className="mb-8 space-y-4">
          <div className="mb-4 w-full rounded-xl bg-blue-400 py-2 text-center font-Lora text-lg font-semibold text-white">
            Informasi Pendaftar
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <DisplayField label="Region" value={regionDisplayLabel} />
            <DisplayField label="Kode Pos" value={formData.kodePos} />
            <DisplayField label="Nama Kampus" value={formData.namaKampus} />
            <DisplayField label="Alamat Kampus" value={formData.alamatKampus} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              onClick={() => setActiveTab('peserta1')}
              className={cn(
                'w-full rounded-xl font-Lora text-lg font-semibold max-md:text-sm',
                activeTab === 'peserta1'
                  ? 'bg-blue-400 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
              )}
            >
              Data Peserta 1
            </Button>
            <Button
              type="button"
              onClick={() => setActiveTab('peserta2')}
              className={cn(
                'w-full rounded-xl font-Lora text-lg font-semibold max-md:text-sm',
                activeTab === 'peserta2'
                  ? 'bg-blue-400 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
              )}
            >
              Data Peserta 2
            </Button>
          </div>

          <div className={cn('pt-4', activeTab !== 'peserta1' && 'hidden')}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <DisplayField label="Email" value={formData.email_1} />
              <DisplayField
                label="Nama Lengkap"
                value={formData.namaLengkap_1}
              />
              <DisplayField
                label="Nomor Identitas"
                value={formData.nomorIdentitas_1}
              />
              <DisplayField
                label="Nomor Telepon"
                value={formData.nomorTelepon_1}
              />
              <div className="md:col-span-2">
                <DisplayFileField
                  label="Bukti Nomor Identitas"
                  file={formData.kartuIdentitas_1}
                />
              </div>
            </div>
          </div>

          <div className={cn('pt-4', activeTab !== 'peserta2' && 'hidden')}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <DisplayField label="Email" value={formData.email_2} />
              <DisplayField
                label="Nama Lengkap"
                value={formData.namaLengkap_2}
              />
              <DisplayField
                label="Nomor Identitas"
                value={formData.nomorIdentitas_2}
              />
              <DisplayField
                label="Nomor Telepon"
                value={formData.nomorTelepon_2}
              />
              <div className="md:col-span-2">
                <DisplayFileField
                  label="Bukti Nomor Identitas"
                  file={formData.kartuIdentitas_2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 w-full lg:order-2 lg:w-2/5">
        <Payment onSubmit={onSubmit} />
      </div>
    </div>
  );
}
