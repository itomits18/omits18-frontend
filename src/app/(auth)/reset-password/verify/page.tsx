'use client';

import Typography from '@/components/Typography';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import { setToken } from '@/lib/cookies';
import { ResetPasswordSchema } from '@/validation/ResetPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import RegisterBg from '../../(container)/RegisterBg';
import useResetPassword from '../hooks/useResetPassword';

function ResetPassword() {
  const token = useSearchParams().get('token');

  const methods = useForm({
    mode: 'onChange',
    resolver: zodResolver(ResetPasswordSchema),
  });

  const { handleSubmit } = methods;
  if (!token) {
    return redirect('/login');
  }
  setToken(token as string);
  const { mutate, isPending } = useResetPassword();

  const onSubmit = (data: z.infer<typeof ResetPasswordSchema>) => {
    mutate(data.confirmPassword);
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
      <div className="font-Lora text-neutral-main absolute top-1/2 left-1/2 z-30 w-[30%] -translate-x-1/2 -translate-y-1/2 transform space-y-4 rounded-lg bg-[#577866] px-8 py-6 opacity-90 shadow-md max-md:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[35%] 2xl:w-[30%]">
        <Typography
          variant="h4"
          className="text-center font-semibold text-shadow-lg max-[350px]:text-2xl max-md:text-3xl"
        >
          Reset Password
        </Typography>
        <Typography
          variant="p"
          weight="semibold"
          className="text-center max-[350px]:text-sm max-md:text-sm"
        >
          Silahkan masukkan password baru
        </Typography>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              id="password"
              label="Password"
              type="password"
              required
              placeholder="Masukkan password baru"
              className="text-black placeholder:text-gray-500"
            />
            <Input
              label="Konfirmasi Password"
              required
              id="confirmPassword"
              sizes="lg"
              type="password"
              placeholder="Konfirmasi password baru"
              className="text-black placeholder:text-gray-500"
            />

            <div className="flex flex-col space-y-3">
              <Button
                variant="yellow"
                type="submit"
                size="lg"
                disabled={isPending}
              >
                {isPending ? 'Loading...' : 'Reset Password'}
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

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
}
