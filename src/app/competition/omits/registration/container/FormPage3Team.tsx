'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
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

const bundleOptions = [
  { value: 'Individu', label: 'Individu' },
  { value: 'bundle', label: 'Bundle 5 Orang' },
];

interface FormPage3TeamProps {
  formData: any;
  onBack: () => void;
  onSubmit: () => void;
}

const DisplayField = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <p className="font-Lora text-base font-semibold text-green-300">{label}</p>
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
      <p className="font-Lora text-base font-semibold text-green-300">
        {label}
      </p>
      <div className="flex w-full items-center gap-2 rounded-md border bg-gray-50 px-3 py-2 text-gray-800">
        <FileText size={16} className="text-gray-500" />
        <span className="truncate">{fileName || 'Tidak ada file'}</span>
      </div>
    </div>
  );
};

const ParticipantDetail = ({
  participantNumber,
  formData,
}: {
  participantNumber: number;
  formData: any;
}) => {
  const namaLengkap = formData[`namaLengkap_${participantNumber}`];
  const nomorIdentitas =
    formData[`nomorIdentitas_${participantNumber}`] ||
    formData[`nomorNISN_${participantNumber}`];
  const nomorTeleponPeserta = formData[`nomorTelepon_${participantNumber}`];
  const buktiIdentitas =
    formData[`buktiNomorIdentitas_${participantNumber}`] ||
    formData[`kartuIdentitas_${participantNumber}`] ||
    formData[`buktiNISN_${participantNumber}`];

  if (!namaLengkap) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <DisplayField label="Nama Lengkap" value={namaLengkap} />
      <DisplayField label="Nomor Identitas" value={nomorIdentitas} />
      <DisplayField label="Nomor Telepon Peserta" value={nomorTeleponPeserta} />
      <div className="md:col-span-1">
        <DisplayFileField label="Bukti Nomor Identitas" file={buktiIdentitas} />
      </div>
    </div>
  );
};

type PesertaTab =
  | 'peserta1'
  | 'peserta2'
  | 'peserta3'
  | 'peserta4'
  | 'peserta5';
const tabLabels: { key: PesertaTab; label: string }[] = [
  { key: 'peserta1', label: 'Peserta 1' },
  { key: 'peserta2', label: 'Peserta 2' },
  { key: 'peserta3', label: 'Peserta 3' },
  { key: 'peserta4', label: 'Peserta 4' },
  { key: 'peserta5', label: 'Peserta 5' },
];

export default function FormPage3Team({
  formData,
  onSubmit,
}: FormPage3TeamProps) {
  const [activeTab, setActiveTab] = useState<PesertaTab>('peserta1');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const selectedRegionValue = formData.region;
  const regionDisplayLabel =
    regionOptions.find((option) => option.value === selectedRegionValue)
      ?.label || selectedRegionValue;
  const selectedBundleValue = formData.bundle;
  const bundleDisplayLabel =
    bundleOptions.find((option) => option.value === selectedBundleValue)
      ?.label || selectedBundleValue;

  return (
    <div className="flex w-full flex-col items-start gap-8 lg:flex-row">
      <div className="order-2 w-full rounded-xl bg-white p-6 shadow-lg lg:order-1 lg:w-3/5">
        <Typography
          variant="h5"
          weight="bold"
          className="mb-6 text-center text-2xl text-green-300 md:text-3xl"
        >
          DETAIL PENDAFTAR
        </Typography>

        <div className="mb-8 space-y-4">
          <div className="mb-4 w-full rounded-xl bg-green-300 py-2 text-center font-Lora text-lg font-semibold text-white">
            Informasi Pendaftar
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <DisplayField label="Tipe Pendaftaran" value={bundleDisplayLabel} />
            <DisplayField
              label="Jenjang Kompetisi"
              value={formData.jenjangKompetisi}
            />
            <DisplayField label="Region" value={regionDisplayLabel} />
            <DisplayField
              label="Nomor Telepon Wali"
              value={formData.nomorWali}
            />
            <DisplayField label="Kode Pos" value={formData.kodePos} />
            <DisplayField label="Nama Sekolah" value={formData.namaSekolah} />
            <div className="md:col-span-2">
              <DisplayField
                label="Alamat Sekolah"
                value={formData.alamatSekolah}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {isMobile ? (
            <div className="mb-4">
              <Select
                value={activeTab}
                onValueChange={(value) => setActiveTab(value as PesertaTab)}
              >
                <SelectTrigger className="w-full rounded-md bg-green-300 py-3 font-Lora text-lg font-semibold text-white">
                  <SelectValue placeholder="Pilih Peserta">
                    {tabLabels.find((tab) => tab.key === activeTab)?.label ||
                      'Pilih Peserta'}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {tabLabels.map((tab) => (
                    <SelectItem
                      key={tab.key}
                      value={tab.key}
                      className="font-Lora text-base"
                    >
                      {tab.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
              {tabLabels.map((tab) => (
                <Button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    'w-full rounded-md px-3 py-2 text-sm font-medium md:text-base md:font-semibold',
                    activeTab === tab.key
                      ? 'bg-green-300 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
                  )}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          )}

          <div className="mt-4">
            {activeTab === 'peserta1' && (
              <ParticipantDetail participantNumber={1} formData={formData} />
            )}
            {activeTab === 'peserta2' && (
              <ParticipantDetail participantNumber={2} formData={formData} />
            )}
            {activeTab === 'peserta3' && (
              <ParticipantDetail participantNumber={3} formData={formData} />
            )}
            {activeTab === 'peserta4' && (
              <ParticipantDetail participantNumber={4} formData={formData} />
            )}
            {activeTab === 'peserta5' && (
              <ParticipantDetail participantNumber={5} formData={formData} />
            )}
          </div>
        </div>
      </div>

      <div className="order-1 w-full lg:order-2 lg:w-2/5">
        <Payment onSubmit={onSubmit} bundleType={formData.bundle} />
      </div>
    </div>
  );
}
