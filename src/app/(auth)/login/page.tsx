'use client';

import Typography from '@/components/Typography';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import { LoginSchema } from '@/validation/LoginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import AuthBg from '../(container)/AuthBg';
import useLogin from './hooks/useLogin';

export default function page() {
  const methods = useForm<z.infer<typeof LoginSchema>>({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema),
  });

  const { handleSubmit } = methods;
  const { mutate, isPending } = useLogin();

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    mutate(data);
  };

  return (
    <section className="min-h-screen max-w-full bg-gradient-to-b from-white via-blue-100 via-20% to-green-200 lg:min-h-[130vh] 2xl:min-h-[150vh]">
      <AuthBg>
        <div className="bg-opacity-60 relative z-40 w-fit rounded-2xl bg-[#577866] p-8 max-lg:mx-auto md:w-[60%] lg:mx-12 lg:w-[470px] xl:mx-20 2xl:mx-24">
          <div className="space-y-2">
            <Typography
              variant="h3"
              weight="bold"
              className="text-additions-brown-50 max-md:text-3xl"
            >
              Sign In
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
                label="Email"
                required
                id="email"
                sizes="lg"
                type="email"
                placeholder="Enter your Email"
                className="bg-neutral-main"
              />
              <div>
                <Input
                  label="Password"
                  required
                  id="password"
                  sizes="lg"
                  type="password"
                  placeholder="Enter your Password"
                  className="bg-neutral-main mb-2"
                />
                <Link
                  href="/forgot-password"
                  className="block w-full text-end text-yellow-200 hover:text-yellow-300"
                >
                  <Typography className="font-medium">
                    Lupa Password ?
                  </Typography>
                </Link>
              </div>

              <div className="space-y-2 md:space-y-4 md:pt-2">
                <Button
                  variant="yellow"
                  disabled={isPending}
                  className="w-full font-semibold text-[#534343]"
                >
                  {isPending ? 'Loading...' : 'Submit'}
                </Button>

                <Typography variant="p" className="text-center text-white">
                  Belum punya akun?{' '}
                  <Link href="/register">
                    <span className="font-bold text-yellow-200 hover:text-yellow-300">
                      Sign Up
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
