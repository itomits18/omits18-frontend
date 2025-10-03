'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { cekJenjang, secondsToTime } from '@/lib/utils';
import { PesertaSchema } from '@/types/user_answer';
import clsx from 'clsx';
import { Upload } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';
import useSendData, { answerType } from './hooks/useSendData';

const DisplayField = ({
  label,
  value,
  validate,
}: {
  label: string;
  value: string;
  validate?: boolean;
}) => (
  <div className="w-full space-y-1">
    <Typography
      variant="p"
      font="Lora"
      weight="semibold"
      className="text-additions-brown-200"
    >
      {label}
    </Typography>

    <div className="flex gap-2">
      <div
        className={clsx(
          'rounded-md border bg-gray-100 px-3 py-2 text-gray-900 shadow-inner',
          validate !== undefined ? 'w-[80%]' : 'w-full',
        )}
      >
        {value || '-'}
      </div>

      {validate !== undefined && (
        <div
          className={clsx(
            'w-[20%] rounded-md border px-3 py-2 text-center text-neutral-50 shadow-inner',
            validate ? 'bg-green-200' : 'bg-additions-brown-100',
          )}
        >
          {validate ? 'Benar' : 'Salah'}
        </div>
      )}
    </div>
  </div>
);

export default function Page() {
  const [jsonData, setJsonData] = useState<z.infer<typeof PesertaSchema>>({
    category: 0,
    estimated_score: 0,
    nomor_peserta: '',
    res_soal: [],
    sisa_waktu: 0,
  });
  const [_error, setError] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError('');
    // setJsonData(null);

    if (!file.name.endsWith('.json')) {
      setError('Please upload a JSON file');
      return;
    }

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        const text = e.target?.result as string;
        const json = JSON.parse(text);

        if (PesertaSchema.parse(json)) setJsonData(json);
        else toast.error('Invalid Format File');
      } catch (err: any) {
        setError('Invalid JSON file: ' + err.message);
      }
    };

    reader.onerror = () => {
      setError('Error reading file');
    };

    reader.readAsText(file);
  };

  const timeFormat = secondsToTime(jsonData.sisa_waktu);

  const { mutate, isPending } = useSendData();

  const handleClick = () => {
    const answerData: answerType = {
      name: jsonData.nomor_peserta,
      participant_number: jsonData.nomor_peserta,
      answer: jsonData.res_soal.map((x) => x.user_answer?.toString() as string),
      validation: jsonData.res_soal.map((x) => x.correct_answer as boolean),
      remaining_time: jsonData.sisa_waktu.toString(),
    };

    mutate(answerData);
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#EEE2DF] via-[#CFEBD1] to-green-100 p-4">
      <Image
        src="/images/registrasi-penyisihan/grass-mobile.png"
        width={390}
        height={219}
        alt="grass"
        className="absolute bottom-0 w-full md:hidden"
      />
      <Image
        src="/images/registrasi-penyisihan/cloud-mobile.png"
        width={390}
        height={369}
        alt="cloud"
        className="absolute top-0 md:hidden"
      />
      <Image
        src="/images/registrasi-penyisihan/stone-mobile.png"
        width={218}
        height={270}
        alt="stone"
        className="absolute bottom-[25%] left-0 md:hidden"
      />
      <Image
        src="/images/registrasi-penyisihan/rock-mobile.png"
        width={390}
        height={219}
        alt="rock"
        className="absolute right-0 bottom-4 w-full md:hidden"
      />
      <Image
        src="/images/registrasi-penyisihan/cloud-desktop.png"
        width={1440}
        height={561}
        alt="cloud"
        className="absolute top-0 hidden w-full md:block"
      />
      <Image
        src="/images/registrasi-penyisihan/grass-desktop.png"
        width={1440}
        height={324}
        alt="grass"
        className="absolute bottom-0 hidden w-full md:block xl:-bottom-8 2xl:-bottom-[5%]"
      />
      <Image
        src="/images/registrasi-penyisihan/rock-desktop.png"
        width={1060}
        height={246}
        alt="rock"
        className="absolute -bottom-[7%] hidden md:block xl:-bottom-[10%] 2xl:bottom-0 2xl:left-1/4"
      />
      <Image
        src="/images/registrasi-penyisihan/stone-desktop.png"
        width={431}
        height={435}
        alt="stone"
        className="absolute bottom-[13%] left-0 hidden md:block md:w-[331px] xl:bottom-[25%] xl:w-[380px] 2xl:w-[431px]"
      />
      <Image
        src="/images/registrasi-penyisihan/tree-desktop.png"
        width={386}
        height={441}
        alt="tree"
        className="absolute right-0 bottom-[10%] hidden md:block xl:bottom-[18%] 2xl:bottom-[25%]"
      />

      {!jsonData.category ? (
        <div className="relative w-full max-w-4xl rounded-2xl bg-[#FFFDF0] p-6 shadow-2xl md:p-10">
          <label className="relative flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-green-100 bg-green-50 transition">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="mb-2 h-10 w-10 text-green-300" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="mt-1 text-xs text-gray-500">JSON files only</p>
            </div>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="absolute top-0 bottom-0 w-full border opacity-0"
            />
          </label>
        </div>
      ) : (
        <div className="flex w-full flex-col items-center space-y-4">
          <div className="relative w-full max-w-4xl rounded-2xl bg-[#FFFDF0] p-6 shadow-2xl md:p-10">
            <div className="grid w-full grid-cols-2 gap-5 py-4">
              <DisplayField
                label="Nomor Peserta"
                value={jsonData.nomor_peserta}
              />
              <DisplayField
                label="Jenjang"
                value={cekJenjang(jsonData.nomor_peserta)}
              />
              <div className="col-span-2">
                <DisplayField
                  label="Sisa Waktu"
                  value={`${timeFormat.hh} Jam, ${timeFormat.mm} Menit, ${timeFormat.ss} Detik`}
                />
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-4xl rounded-2xl bg-[#FFFDF0] p-6 shadow-2xl md:p-10">
            <div className="grid w-full grid-cols-2 gap-5 py-4">
              {jsonData.res_soal.map((soal, i) => {
                return (
                  <DisplayField
                    key={i}
                    label={'Soal ' + (i + 1)}
                    value={soal.user_answer?.toString() as string}
                    validate={soal.correct_answer as boolean}
                  />
                );
              })}
            </div>
            <Button
              // onClick={markAsRegistered}
              // disabled={isUpdating}
              onClick={handleClick}
              variant={'green'}
              disabled={isPending}
              className="font-regular font-Lora w-full py-2"
            >
              {isPending ? 'Loading...' : 'Send Data'}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
