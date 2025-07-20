'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, FileText } from 'lucide-react';
import { useState } from 'react';
import Payment from './Payment';

interface FormPage3Props {
  formData: any;
  onBack: () => void;
  onSubmit: () => void;
  setPayment: React.Dispatch<React.SetStateAction<string>>;
  loadingPayment: boolean;
}

const DisplayField = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <p className="font-Lora text-base font-semibold text-blue-400">{label}</p>
    <div className="w-full rounded-md border bg-gray-50 px-3 py-2 text-gray-800">
      {value || '-'}
    </div>
  </div>
);

const DisplayFileField = ({ label }: { label: string }) => {
  return (
    <div className="space-y-1">
      <p className="font-lora text-base font-semibold text-blue-400">{label}</p>
      <div className="flex w-full items-center gap-2 rounded-md border bg-gray-50 px-3 py-2 text-gray-800">
        <FileText size={16} className="text-gray-500" />
        <span className="truncate">Bukti Nomor Identitas</span>
      </div>
    </div>
  );
};

export default function FormPage3({
  formData,
  onSubmit,
  setPayment,
  onBack,
  loadingPayment,
}: FormPage3Props) {
  const [activeTab, setActiveTab] = useState<'peserta1' | 'peserta2'>(
    'peserta1',
  );

  return (
    <div className="flex w-full flex-col items-start gap-8 lg:flex-row">
      <div className="relativeorder-2 w-full rounded-xl bg-white p-6 shadow-lg lg:order-1 lg:w-3/5">
        <div
          className="absolute top-0 left-0 m-6 w-fit cursor-pointer rounded-full bg-blue-400 p-2 transition-all duration-200 hover:bg-blue-300"
          onClick={onBack}
        >
          <ChevronLeft size={20} className="text-neutral-main" />
        </div>

        <Typography
          variant="h2"
          font="Cinzel"
          weight="bold"
          className="mb-6 text-center text-2xl text-[#244D80] md:text-3xl"
        >
          DETAIL PENDAFTAR
        </Typography>
        <div className="mb-8 space-y-4">
          <div className="font-Lora mb-4 w-full rounded-xl bg-blue-400 py-2 text-center text-lg font-semibold text-white">
            Informasi Pendaftar
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <DisplayField
              label="Nama Kampus"
              value={formData.namaKampus as string}
            />
            <DisplayField
              label="Alamat Kampus"
              value={formData.alamatKampus as string}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              onClick={() => setActiveTab('peserta1')}
              className={cn(
                'font-Lora w-full rounded-xl text-lg font-semibold max-md:text-sm',
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
                'font-Lora w-full rounded-xl text-lg font-semibold max-md:text-sm',
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
              <DisplayField
                label="Email"
                value={formData.detail[0].email as string}
              />
              <DisplayField
                label="Nama Lengkap"
                value={formData.detail[0].namaLengkap}
              />
              <DisplayField
                label="Nomor Identitas"
                value={formData.detail[0].nomorIdentitas}
              />
              <DisplayField
                label="Nomor Telepon"
                value={formData.detail[0].nomorTelepon}
              />
              <div className="md:col-span-2">
                <DisplayFileField label="Bukti Nomor Identitas" />
              </div>
            </div>
          </div>

          <div className={cn('pt-4', activeTab !== 'peserta2' && 'hidden')}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <DisplayField label="Email" value={formData.detail[1].email} />
              <DisplayField
                label="Nama Lengkap"
                value={formData.detail[1].namaLengkap}
              />
              <DisplayField
                label="Nomor Identitas"
                value={formData.detail[1].nomorIdentitas}
              />
              <DisplayField
                label="Nomor Telepon"
                value={formData.detail[1].nomorTelepon}
              />
              <div className="md:col-span-2">
                <DisplayFileField label="Bukti Nomor Identitas" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 w-full lg:order-2 lg:w-2/5">
        <Payment
          onSubmit={onSubmit}
          setPayment={setPayment}
          loadingPayment={loadingPayment}
        />
      </div>
    </div>
  );
}
