'use client';

import FileUpload from '@/components/form/FileUpload';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  email_1: string;
  namaLengkap_1: string;
  nomorIdentitas_1: string;
  nomorTelepon_1: string;
  kartuIdentitas_1: any;
  email_2: string;
  namaLengkap_2: string;
  nomorIdentitas_2: string;
  nomorTelepon_2: string;
  kartuIdentitas_2: any;
};

interface FormPage2Props {
  onSubmit: (data: FormValues) => void;
  onBack: () => void;
}

export default function FormPage2({ onSubmit, onBack }: FormPage2Props) {
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;

  const [activeTab, setActiveTab] = useState<'peserta1' | 'peserta2'>(
    'peserta1',
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const onValidSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValidSubmit)} className="space-y-4">
        {!isMobile && (
          <div className="flex justify-center gap-2">
            <Button
              type="button"
              className={`${
                activeTab === 'peserta1'
                  ? 'bg-blue-300 text-white'
                  : 'bg-black-100 hover:bg-gray-300'
              } w-full py-3 text-lg font-semibold`}
              onClick={() => setActiveTab('peserta1')}
            >
              Data Peserta 1
            </Button>
            <Button
              type="button"
              className={`${
                activeTab === 'peserta2'
                  ? 'bg-blue-300 text-white'
                  : 'bg-black-100 hover:bg-gray-300'
              } w-full py-3 text-lg font-semibold`}
              onClick={() => setActiveTab('peserta2')}
            >
              Data Peserta 2
            </Button>
          </div>
        )}

        <div
          className={isMobile || activeTab === 'peserta1' ? 'block' : 'hidden'}
        >
          <div className="space-y-2">
            {isMobile && (
              <div className="rounded bg-blue-300 py-2 text-center font-Lora text-lg font-semibold text-white">
                Data Peserta 1
              </div>
            )}

            <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
              <Input
                id="email_1"
                label="Email"
                labelTextClassname="text-black-300"
                type="email"
                placeholder="Masukkan email"
                validation={{ required: 'Email Peserta 1 wajib diisi' }}
              />
              <Input
                id="namaLengkap_1"
                label="Nama Lengkap"
                labelTextClassname="text-black-300"
                placeholder="Masukkan nama lengkap"
                validation={{ required: 'Nama Lengkap Peserta 1 wajib diisi' }}
              />
              <Input
                id="nomorIdentitas_1"
                label="Nomor Identitas"
                labelTextClassname="text-black-300"
                placeholder="Masukkan nomor Identitas"
                validation={{
                  required: 'Nomor Identitas Peserta 1 wajib diisi',
                }}
              />
              <Input
                id="nomorTelepon_1"
                label="Nomor Telepon Peserta"
                labelTextClassname="text-black-300"
                type="tel"
                placeholder="Masukkan nomor telepon"
                validation={{ required: 'Nomor Telepon Peserta 1 wajib diisi' }}
              />
            </div>
            <div className="md:col-span-2">
              <FileUpload
                id="kartuIdentitas_1"
                label="Bukti Nomor Identitas"
                isRequired={true}
                supportFiles={['png', 'jpg', 'jpeg', 'pdf']}
                labelTextClassName="text-black-300"
                validation={{
                  required: 'Kartu Identitas Peserta 1 wajib diisi',
                }}
              />
            </div>
          </div>
        </div>

        <div
          className={isMobile || activeTab === 'peserta2' ? 'block' : 'hidden'}
        >
          <div className="space-y-2 pt-4 md:pt-0">
            {isMobile && (
              <div className="rounded bg-blue-300 py-2 text-center font-Lora text-lg font-semibold text-white">
                Data Peserta 2
              </div>
            )}

            <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
              <Input
                id="email_2"
                label="Email"
                type="email"
                placeholder="Masukkan email"
                labelTextClassname="text-black-300"
                validation={{ required: 'Email Peserta 2 wajib diisi' }}
              />
              <Input
                id="namaLengkap_2"
                label="Nama Lengkap"
                placeholder="Masukkan nama lengkap"
                labelTextClassname="text-black-300"
                validation={{ required: 'Nama Lengkap Peserta 2 wajib diisi' }}
              />
              <Input
                id="nomorIdentitas_2"
                label="Nomor Identitas"
                placeholder="Masukkan nomor Identitas"
                labelTextClassname="text-black-300"
                validation={{
                  required: 'Nomor Identitas Peserta 2 wajib diisi',
                }}
              />
              <Input
                id="nomorTelepon_2"
                label="Nomor Telepon Peserta"
                type="tel"
                placeholder="Masukkan nomor telepon"
                labelTextClassname="text-black-300"
                validation={{ required: 'Nomor Telepon Peserta 2 wajib diisi' }}
              />
            </div>
            <div className="md:col-span-2">
              <FileUpload
                id="kartuIdentitas_2"
                label="Bukti Nomor Identitas"
                isRequired={true}
                supportFiles={['png', 'jpg', 'jpeg', 'pdf']}
                labelTextClassName="text-black-300"
                validation={{
                  required: 'Kartu Identitas Peserta 2 wajib diisi',
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-3 pt-6">
          <Button
            type="button"
            onClick={onBack}
            className="font-lora w-full bg-black-100 py-3 text-xs text-white hover:bg-gray-400 md:text-lg"
          >
            Kembali
          </Button>
          <Button
            type="submit"
            className="w-full bg-blue-400 py-3 font-Lora text-xs text-white hover:bg-blue-700 md:text-lg"
          >
            Selanjutnya
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
