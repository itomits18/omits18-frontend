'use client';

import Typography from '@/components/Typography';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import RegisterBg from '../(container)/RegisterBg';

export default function ResetPassword() {
  const methods = useForm({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  const onSubmit = () => {
    return;
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#FFFAFE] via-blue-100 via-15% to-green-200">
      {/*Mobile*/}
      <Image
        src="/images/password/iphone.png"
        fill
        alt="background-1"
        className="absolute object-cover md:hidden"
      />

      {/*Desktop*/}
      <RegisterBg />

      {/*Frame*/}
      <div className="absolute left-1/2 top-1/2 z-30 w-[30%] -translate-x-1/2 -translate-y-1/2 transform space-y-4 rounded-lg bg-[#577866] px-8 py-6 text-neutral-main opacity-90 shadow-md max-md:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[35%] 2xl:w-[30%]">
        <Typography
          variant="h4"
          className="text-shadow-lg text-center font-semibold max-md:text-3xl max-[350px]:text-2xl"
        >
          Forgot Password
        </Typography>
        <Typography
          variant="p"
          weight="semibold"
          className="text-center max-md:text-sm max-[350px]:text-sm"
        >
          Masukkan Email untuk melakukan reset kata sandi akun
        </Typography>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              id="email"
              label="Email"
              placeholder="Masukkan email"
              validation={{ required: 'Field must be filled' }}
            />

            <div className="flex flex-col space-y-3">
              <Button variant="yellow" type="submit">
                Kirim
              </Button>

              <Typography className="text-center">
                Kembali ke halaman{' '}
                <Link href={'/'}>
                  <span className="text-yellow-200 hover:text-yellow-300">
                    Sign In
                  </span>
                </Link>
              </Typography>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
