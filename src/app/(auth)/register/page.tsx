'use client';

import Typography from '@/components/Typography';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import { RegisterSchema } from '@/validation/RegisterSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import AuthBg from '../(container)/AuthBg';
import useRegister from './hooks/useRegister';

export default function page() {
  const methods = useForm<z.infer<typeof RegisterSchema>>({
    mode: 'onSubmit',
    resolver: zodResolver(RegisterSchema),
  });

  const { handleSubmit } = methods;
  const { mutate, isPending } = useRegister();

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    const payload = {
      name: data.name,
      password: data.password,
      email: data.email,
    };
    mutate(payload);
  };

  return (
    <section className="min-h-screen max-w-full bg-gradient-to-b from-white via-blue-100 via-20% to-green-200 lg:min-h-[130vh] 2xl:min-h-[150vh]">
      <AuthBg>
        <div className="bg-opacity-60 relative z-40 w-fit rounded-2xl bg-[#648573] p-8 max-lg:mx-auto md:w-[60%] lg:mx-12 lg:w-[470px] xl:mx-20 2xl:mx-24">
          <div className="space-y-2">
            <Typography
              variant="h3"
              weight="bold"
              className="text-additions-brown-50 max-md:text-3xl"
            >
              Register
            </Typography>
            <Typography className="text-additions-brown-50">
              Silahkan masukkan data akun anda
            </Typography>
          </div>

          <FormProvider {...methods}>
            <form
              className="mt-6 w-full space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                label="Nama Lengkap"
                required
                id="name"
                sizes="lg"
                type="text"
                placeholder="Masukkan nama lengkap"
                className="bg-neutral-main"
              />
              <Input
                label="Email"
                required
                id="email"
                sizes="lg"
                type="email"
                placeholder="Masukkan email"
                className="bg-neutral-main"
              />
              <Input
                label="Password"
                required
                id="password"
                sizes="lg"
                type="password"
                placeholder="Masukkan password"
                className="bg-neutral-main mb-2"
              />
              <Input
                label="Konfirmasi Password"
                required
                id="konfirmasi"
                sizes="lg"
                type="password"
                placeholder="Konfirmasi password"
                className="bg-neutral-main mb-2"
              />

              <div className="space-y-2 md:space-y-4 md:pt-2">
                <Button
                  type="submit"
                  variant="yellow"
                  className="w-full font-semibold text-[#534343]"
                  disabled={isPending}
                >
                  {isPending ? 'Loading...' : 'Submit'}
                </Button>

                <Typography variant="p" className="text-center text-white">
                  Sudah punya akun?{' '}
                  <Link href="/login">
                    <span className="font-bold text-yellow-200 hover:text-yellow-300">
                      Sign In
                    </span>
                  </Link>
                </Typography>
              </div>
            </form>
          </FormProvider>
        </div>
      </AuthBg>
    </section>
  );
}
