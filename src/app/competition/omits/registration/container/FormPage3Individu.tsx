'use client';
import Typography from '@/components/Typography';
import { regionOptions } from '@/contents/ListRegions';
import { ChevronLeft, FileText } from 'lucide-react';
import Payment from './Payment';

const bundleOptions = [
  { value: 'Individu', label: 'Individu' },
  { value: 'bundle', label: 'Bundle 5 Orang' },
];

interface FormPage3IndividuProps {
  formData: any;
  onBack: () => void;
  onSubmit: () => void;
  setPayment: React.Dispatch<React.SetStateAction<string>>;
  loadingPayment: boolean;
}

const DisplayField = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <p className="font-Lora text-base font-semibold text-green-300">{label}</p>
    <div className="w-full rounded-md border bg-gray-50 px-3 py-2 text-green-800">
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

export default function FormPage3Individu({
  formData,
  onSubmit,
  onBack,
  setPayment,
  loadingPayment,
}: FormPage3IndividuProps) {
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
          className="absolute top-0 left-0 m-6 w-fit cursor-pointer rounded-full bg-green-300 p-2 transition-all duration-200 hover:bg-green-400"
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
            {' '}
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
              {' '}
              <DisplayField
                label="Alamat Sekolah"
                value={formData.alamatSekolah}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="font-Lora mb-4 w-full rounded-xl bg-green-300 py-2 text-center text-lg font-semibold text-white">
            {' '}
            Data Peserta
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* <DisplayField label="Email" value={formData.detail[0].name} /> */}
            <DisplayField
              label="Nama Lengkap"
              value={formData.detail[0].namaLengkap}
            />
            <DisplayField
              label="Nomor Telepon Siswa"
              value={formData.detail[0].nomorTelepon}
            />
            <DisplayField
              label="Nomor NISN"
              value={formData.detail[0].nomorNISN}
            />
            <DisplayFileField
              label="Bukti Nomor NISN"
              file={formData.detail[0].buktiNISN}
            />
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
