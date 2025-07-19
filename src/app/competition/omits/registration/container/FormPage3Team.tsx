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
import { regionOptions } from '@/contents/ListRegions';
import { cn } from '@/lib/utils';
import { ChevronLeft, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
import Payment from './Payment';

const bundleOptions = [
  { value: 'Individu', label: 'Individu' },
  { value: 'bundle', label: 'Bundle 5 Orang' },
];

interface FormPage3TeamProps {
  formData: any;
  onBack: () => void;
  onSubmit: () => void;
  setPayment: React.Dispatch<React.SetStateAction<string>>;
  loadingPayment: boolean;
}

const DisplayField = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <p className="font-Lora text-base font-semibold text-green-300">{label}</p>
    <div className="w-full rounded-md border bg-gray-50 px-3 py-2 text-gray-800">
      {value || '-'}
    </div>
  </div>
);

const DisplayFileField = ({ label, file }: { label: string; file: string }) => {
  return (
    <div className="space-y-1">
      <p className="font-Lora text-base font-semibold text-gray-700">{label}</p>
      <div className="flex w-full items-center gap-2 rounded-md border bg-gray-50 px-3 py-2 text-gray-800">
        <FileText size={16} className="text-gray-500" />
        <span className="truncate">{file}</span>
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
  const email = formData.detail[participantNumber - 1].email;
  const namaLengkap = formData.detail[participantNumber - 1].namaLengkap;
  const nomorNisn = formData.detail[participantNumber - 1].nomorNISN;
  const nomorTeleponPeserta =
    formData.detail[participantNumber - 1].nomorTelepon;
  const buktiNisn = formData.detail[participantNumber - 1].buktiNISN;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <DisplayField label="Email" value={email} />
      <DisplayField label="Nama Lengkap" value={namaLengkap} />
      <DisplayField label="Nomor NISN" value={nomorNisn} />
      <DisplayField label="Nomor Telepon Peserta" value={nomorTeleponPeserta} />
      <div className="md:col-span-2">
        <DisplayFileField label="Bukti Nomor NISN" file={buktiNisn} />
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
  setPayment,
  onBack,
  loadingPayment,
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
      <div className="relative order-2 w-full rounded-xl bg-white p-6 shadow-lg lg:order-1 lg:w-3/5">
        <div
          className="absolute top-0 left-0 m-6 w-fit cursor-pointer rounded-full bg-green-300 p-2 transition-all duration-200 hover:bg-green-400 max-md:m-4"
          onClick={onBack}
        >
          <ChevronLeft size={20} className="text-neutral-main" />
        </div>

        <Typography
          variant="h5"
          weight="bold"
          className="mb-6 text-center text-2xl text-green-300 md:text-3xl"
        >
          DETAIL PENDAFTAR
        </Typography>

        <div className="mb-8 space-y-4">
          <div className="font-Lora mb-4 w-full rounded-xl bg-green-300 py-2 text-center text-lg font-semibold text-white">
            Informasi Pendaftar
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <DisplayField label="Bundle" value={bundleDisplayLabel} />
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
                <SelectTrigger className="font-Lora w-full rounded-md bg-green-300 py-3 text-lg font-semibold text-white">
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
        <Payment
          onSubmit={onSubmit}
          bundleType={formData.bundle}
          jenjangKompetisiType={formData.jenjangKompetisi}
          setPayment={setPayment}
          loadingPayment={loadingPayment}
        />
      </div>
    </div>
  );
}
