'use client';

import FileUpload from '@/components/form/FileUpload';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RegistrationOMITS2 } from '@/validation/RegistrationSchema';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { formDataType } from '../page';

interface FormPage2TeamProps {
  onBack: () => void;
  onNext: () => void;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
}

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

export default function FormPage2Team({
  onBack,
  onNext,
  setFormData,
}: FormPage2TeamProps) {
  const methods = useForm<z.infer<typeof RegistrationOMITS2>>();
  const { handleSubmit } = methods;

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

  useEffect(() => {
    const getData = localStorage.getItem('om_sd2');

    if (getData) {
      methods.reset(JSON.parse(getData) || '{}');
    }
  }, [methods.reset]);

  const onSubmit = (data: z.infer<typeof RegistrationOMITS2>) => {
    onNext();
    setFormData((pre) => {
      return {
        ...pre,
        ...data,
      };
    });
    localStorage.setItem('om_sd2', JSON.stringify(data || '{}'));
  };

  const renderParticipantFields = (index: number) => {
    const participantKey = `peserta${index}` as PesertaTab;
    return (
      <div className={activeTab === participantKey ? 'block' : 'hidden'}>
        <div className={`space-y-4 ${index > 1 ? 'pt-6 md:pt-0' : 'md:pt-0'}`}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 md:items-center">
            <Input
              labelTextClassname="text-black-300"
              id={`detail.${index - 1}.email`}
              label="Email"
              placeholder="Masukkan email"
              type="email"
              validation={{
                required: `Nama Lengkap Peserta ${index} wajib diisi`,
              }}
              sizes="sm"
            />
            <Input
              labelTextClassname="text-black-300"
              id={`detail.${index - 1}.namaLengkap`}
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap"
              validation={{
                required: `Nama Lengkap Peserta ${index} wajib diisi`,
              }}
              sizes="sm"
            />
            <Input
              labelTextClassname="text-black-300"
              id={`detail.${index - 1}.nomorTelepon`}
              label="Nomor Telepon Siswa"
              type="tel"
              placeholder="Masukkan nomor telepon"
              validation={{
                required: `Nomor Telepon Peserta ${index} wajib diisi`,
              }}
              sizes="sm"
            />
            <Input
              labelTextClassname="text-black-300"
              id={`detail.${index - 1}.nomorNISN`}
              label="Nomor NISN"
              placeholder="Masukkan NISN"
              validation={{
                required: `Nomor NISN Peserta ${index} wajib diisi`,
              }}
              sizes="sm"
            />
            <div className="md:col-span-2">
              <FileUpload
                type="omits"
                id={`detail.${index - 1}.buktiNISN`}
                label="Bukti NISN"
                isRequired={true}
                supportFiles={['png', 'jpg', 'jpeg']}
                helpertext="Ukuran file maksimal 3 MB dengan format JPG, JPEG, atau PNG."
                className="py-3"
                labelTextClassName="text-black-300"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {isMobile && (
          <div className="mb-4">
            <Select
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as PesertaTab)}
            >
              <SelectTrigger className="font-Lora w-full bg-green-300 py-3 text-lg font-semibold text-white">
                {' '}
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
                    className="font-Lora text-base font-semibold"
                  >
                    {tab.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {!isMobile && (
          <div className="grid grid-cols-2 justify-center gap-2 pb-4 sm:grid-cols-3 lg:grid-cols-5">
            {tabLabels.map((tab) => (
              <Button
                key={tab.key}
                type="button"
                className={`${
                  activeTab === tab.key
                    ? 'bg-green-300 text-white'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                } w-full py-3 text-base font-semibold`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        )}

        <div>
          {' '}
          {renderParticipantFields(1)}
          {renderParticipantFields(2)}
          {renderParticipantFields(3)}
          {renderParticipantFields(4)}
          {renderParticipantFields(5)}
        </div>

        <div className="flex justify-between gap-3 pt-6">
          <Button
            type="button"
            onClick={onBack}
            className="font-lora w-full bg-gray-200 py-3 text-xs text-black hover:bg-gray-300 md:text-lg"
          >
            Kembali
          </Button>
          <Button
            type="submit"
            className="font-Lora w-full bg-green-300 py-3 text-xs text-white hover:bg-green-700 md:text-lg"
          >
            Selanjutnya
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
