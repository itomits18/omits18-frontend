'use client';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import { RegistrationMISSION1 } from '@/validation/RegistrationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { missionFormDataType } from '../page';

interface FormPage1Props {
  onNext: () => void;
  setFormData: React.Dispatch<React.SetStateAction<missionFormDataType>>;
}

export default function FormPage1({ onNext, setFormData }: FormPage1Props) {
  const methods = useForm<z.infer<typeof RegistrationMISSION1>>({
    mode: 'onChange',
    resolver: zodResolver(RegistrationMISSION1),
  });
  const { handleSubmit } = methods;

  useEffect(() => {
    const getData = localStorage.getItem('ms_sd1');

    if (getData) {
      methods.reset(JSON.parse(getData || '{}'));
    }
  }, [methods.reset]);

  const onValidSubmit: SubmitHandler<z.infer<typeof RegistrationMISSION1>> = (
    data,
  ) => {
    onNext();
    setFormData((pre) => {
      return {
        ...pre,
        ...data,
      };
    });
    localStorage.setItem('ms_sd1', JSON.stringify(data));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValidSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          {/* <SelectInput
            id="region"
            label="Region"
            placeholder="Pilih Region"
            options={regionOptions}
            validation={{ required: 'Region wajib diisi.' }}
          /> */}

          <Input
            label="Nama Kampus"
            id="namaKampus"
            sizes={'sm'}
            type="text"
            placeholder="Masukkan nama kampus"
            required
            className="bg-neutral-main"
            labelTextClassname="text-black-300"
          />

          <Input
            label="Alamat Kampus"
            id="alamatKampus"
            sizes={'sm'}
            type="text"
            placeholder="Masukkan alamat kampus"
            required
            className="bg-neutral-main"
            labelTextClassname="text-black-300"
          />
        </div>

        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            className="font-lora w-full bg-blue-400 text-lg hover:bg-blue-700"
          >
            Selanjutnya
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
