'use client';

import Typography from '@/components/Typography';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import AuthBg from '../(container)/AuthBg';

export default function page() {
  const methods = useForm({
    mode: 'onBlur',
    // resolver: zodResolver(LoginSchema),
  });

  const { handleSubmit } = methods;

  // const { mutate, isPending } = useLoginMutation();

  const onSubmit = () => {
    // mutate(data);
  };

  return (
    <section className="min-h-screen max-w-full bg-gradient-to-b from-white via-blue-100 via-20% to-green-200 lg:min-h-[130vh] 2xl:min-h-[150vh]">
      <AuthBg>
        <div className="relative z-40 w-fit rounded-2xl bg-[#577866] bg-opacity-60 p-8 max-lg:mx-auto md:w-[60%] lg:mx-12 lg:w-[470px] xl:mx-20 2xl:mx-24">
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
                id="fullname"
                sizes="lg"
                type="text"
                placeholder="Enter your Email"
                validation={{
                  required: 'This field is required',
                }}
                className="bg-neutral-main"
              />
              <Input
                label="Email"
                required
                id="email"
                sizes="lg"
                type="email"
                placeholder="Enter your Email"
                validation={{
                  required: 'This field is required',
                }}
                className="bg-neutral-main"
              />
              <Input
                label="Password"
                required
                id="password"
                sizes="lg"
                type="password"
                placeholder="Enter your Password"
                validation={{
                  required: 'This field is required',
                }}
                className="mb-2 bg-neutral-main"
              />
              <Input
                label="Konfirmasi Password"
                required
                id="password"
                sizes="lg"
                type="password"
                placeholder="Enter your Password"
                validation={{
                  required: 'This field is required',
                }}
                className="mb-2 bg-neutral-main"
              />

              <div className="space-y-2 md:space-y-4 md:pt-2">
                <Button
                  variant="yellow"
                  className="w-full font-semibold text-[#534343]"
                >
                  Submit
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
