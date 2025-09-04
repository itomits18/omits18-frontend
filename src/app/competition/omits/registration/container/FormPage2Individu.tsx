'use client';
import FileUpload from '@/components/form/FileUpload';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import { RegistrationOMITS2 } from '@/validation/RegistrationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { formDataType } from '../page';

interface FormPage2IndividuProps {
  onBack: () => void;
  onNext: () => void;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
}

export default function FormPage2Individu({
  onBack,
  onNext,
  setFormData,
}: FormPage2IndividuProps) {
  const methods = useForm<z.infer<typeof RegistrationOMITS2>>({
    mode: 'onChange',
    resolver: zodResolver(RegistrationOMITS2) as any,
    defaultValues: {
      detail: [
        {
          email: '',
          namaLengkap: '',
          nomorTelepon: '',
          nomorNISN: '',
          buktiNISN: '',
        },
      ],
    },
  });
  const { handleSubmit } = methods;

  useEffect(() => {
    const getData = localStorage.getItem('om_sd2');

    if (getData) {
      methods.reset(JSON.parse(getData || '{}'));
    }
  }, [methods.reset]);

  const onValidSubmit = (data: z.infer<typeof RegistrationOMITS2>) => {
    onNext();
    setFormData((pre) => {
      return {
        ...pre,
        ...data,
      };
    });
    localStorage.setItem('om_sd2', JSON.stringify(data));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValidSubmit)} className="space-y-8">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              labelTextClassname="text-black-300"
              id="detail.0.email"
              label="Email"
              placeholder="Masukkan nama lengkap"
              required
            />
            <Input
              required
              labelTextClassname="text-black-300"
              id="detail.0.namaLengkap"
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap"
            />
            <Input
              required
              labelTextClassname="text-black-300"
              id="detail.0.nomorTelepon"
              label="Nomor Telepon Siswa"
              placeholder="Masukkan nomor telepon"
            />
            <Input
              required
              labelTextClassname="text-black-300"
              id="detail.0.nomorNISN"
              label="Nomor NISN"
              placeholder="Masukkan nomor NISN"
            />
            <div className="md:col-span-2">
              <FileUpload
                type="omits"
                id="detail.0.buktiNISN"
                label="Bukti NISN"
                isRequired={true}
                supportFiles={['png', 'jpg', 'jpeg']}
                labelTextClassName="text-black-300"
                helpertext="Ukuran file maksimal 3 MB dengan format JPG, JPEG, atau PNG."
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-3 pt-4">
          <Button
            type="button"
            onClick={onBack}
            className="w-full bg-gray-300 text-gray-800 hover:bg-gray-400"
          >
            Kembali
          </Button>
          <Button
            type="submit"
            className="w-full bg-green-200 text-white hover:bg-green-700"
          >
            Selanjutnya
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
