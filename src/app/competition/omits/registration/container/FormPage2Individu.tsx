'use client';
import FileUpload from '@/components/form/FileUpload';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type FormIndividuValues = {
  email_1?: string;
  namaLengkap_1?: string;
  nomorNISN_1?: string;
  nomorTelepon_1?: string;
  buktiNISN?: any;
};

interface FormPage2IndividuProps {
  onBack: () => void;
  onSubmit: (data: FormIndividuValues) => void;
}

export default function FormPage2Individu({
  onBack,
  onSubmit,
}: FormPage2IndividuProps) {
  const methods = useForm<FormIndividuValues>();
  const { handleSubmit } = methods;

  const onValidSubmit: SubmitHandler<FormIndividuValues> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValidSubmit)} className="space-y-8">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              id="email_1"
              label="Email"
              labelTextClassname="text-black-300"
              type="email"
              placeholder="Masukkan email"
              validation={{ required: 'Email Peserta wajib diisi' }}
            />
            <Input
              labelTextClassname="text-black-300"
              id="namaLengkap_1"
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap"
              validation={{ required: 'Nama lengkap tidak boleh kosong.' }}
            />
            <Input
              labelTextClassname="text-black-300"
              id="nomorTelepon_1"
              label="Nomor Telepon Siswa"
              placeholder="Masukkan nomor telepon"
              validation={{ required: 'Nomor telepon tidak boleh kosong.' }}
            />
            <Input
              labelTextClassname="text-black-300"
              id="nomorNISN_1"
              label="Nomor NISN"
              placeholder="Masukkan nomor NISN"
              validation={{ required: 'Nomor NISN tidak boleh kosong.' }}
            />
            <div className="md:col-span-2">
              <FileUpload
                id="buktiNISN"
                label="Bukti NISN"
                isRequired={true}
                supportFiles={['png', 'jpg', 'jpeg', 'pdf']}
                validation={{
                  required: 'Kartu Pelajar wajib diupload.',
                }}
                labelTextClassName="text-black-300"
                helpertext="Maksimal ukuran file yang diunggah adalah 3 MB."
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
