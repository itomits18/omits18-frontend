'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FormProvider, useForm } from 'react-hook-form';

export default function Pengumuman() {
  const methods = useForm({
    mode: 'onBlur',
    // resolver: zodResolver(LoginSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = () => {
    // mutate(data);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden 
      bg-gradient-to-t from-[#D99417] via-[rgba(207,142,21,0.65)] to-[rgb(207,142,21,0.2)]"
    >
      {/* Mobile*/}
      <Image
        src="/images/semifinal/Group 217.png"
        width={303}
        height={252}
        alt="cloud"
        className="absolute top-[34%] right-0 md:hidden object-contain"
      />

      <Image
        src="/images/semifinal/a95 1.png"
        width={321}
        height={262}
        alt="cloud"
        className="absolute top-[14%] md:hidden object-contain"
      />

      <Image
        src="/images/semifinal/a95 12.png"
        width={236}
        height={153}
        alt="cloud"
        className="absolute top-[14%] right-0 md:hidden object-contain"
      />

      <Image
        src="/images/semifinal/Asset 95 22.png"
        width={390}
        height={188}
        alt="cloud"
        className="absolute right-0 md:hidden object-contain"
      />

      <Image
        src="/images/semifinal/star.png"
        width={381}
        height={162}
        alt="star"
        className="absolute z-10 object-contain mx-auto left-0 right-0"
      />

      <Image
        src="/images/semifinal/pohon.png"
        width={230}
        height={250}
        alt="pohon"
        className="absolute top-[10%] md:hidden object-contain"
      />

      <Image
        src="/images/semifinal/book.png"
        width={164}
        height={207}
        alt="book"
        className="absolute bottom-0 md:hidden object-contain"
      />

      <Image
        src="/images/semifinal/jamur.png"
        width={162}
        height={258}
        alt="jamur"
        className="absolute right-0 bottom-0 md:hidden object-contain"
      />

      <Image
        src="/images/semifinal/logo.png"
        width={205}
        height={56}
        alt="logo"
        className="absolute left-1/2 transform -translate-x-1/2 top-[5%] object-contain"
      />

      {/* Desktop*/}
      <Image
        src="/images/semifinal/Group 231.png"
        width={1440}
        height={417}
        alt="cloud"
        className="absolute hidden md:block object-cover w-full"
      />

      <Image
        src="/images/semifinal/Group 233.png"
        width={1440}
        height={473}
        alt="cloud"
        className="absolute hidden md:block top-[30%] object-cover w-full"
      />

      <Image
        src="/images/semifinal/Group 229.png"
        width={289}
        height={499}
        alt="jamur"
        className="absolute top-[10%] right-0 hidden md:block object-contain"
      />

      <Image
        src="/images/semifinal/Group 228.png"
        width={389}
        height={550}
        alt="tree"
        className="absolute top-[20%] hidden md:block object-contain"
      />

      <Image
        src="/images/semifinal/lilin.png"
        width={124}
        height={257}
        alt="lilin"
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 hidden md:block object-contain"
      />

      <Image
        src="/images/semifinal/bola.png"
        width={155}
        height={221}
        alt="bola"
        className="absolute bottom-0 hidden md:block object-contain"
      />

      <Image
        src="/images/semifinal/Group 223.png"
        width={243}
        height={480}
        alt="bola"
        className="absolute right-0 bottom-0 hidden md:block object-contain"
      />

      <Image
        src="/images/semifinal/Asset 31 1.png"
        width={385}
        height={150}
        alt="book"
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[16%] hidden md:block object-contain"
      />

      <Image
        src="/images/semifinal/map.png"
        width={92}
        height={76}
        alt="map"
        className="absolute left-1/2 transform -translate-x-1/2 z-30 top-[20%] hidden md:block object-contain"
      />

      {/* Frame */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
       bg-white px-8 py-6 rounded-2xl shadow-md w-[300px] h-[380px] md:w-[400px] md:h-[420px] 
       opacity-90 flex flex-col z-10"
      >
        <Typography
          font="Lora"
          weight="bold"
          variant="h1"
          className="text-2xl md:text-4xl text-[#E3BF90] text-center font-bold [text-shadow:_2px_3px_0_rgb(0_0_0_/_100%)]"
        >
          PENGUMUMAN
        </Typography>

        <Typography
          font="Lora"
          weight="semibold"
          variant="h3"
          className="text-sm md:text-lg text-center px-2 mt-3"
        >
          Silahkan Masukkan Nomor ID dan Nama Lengkap untuk Mengetahui
          Pengumuman
        </Typography>

        <FormProvider {...methods}>
          <form
            className="mt-4 space-y-4 flex-1"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Typography
                font="Lora"
                weight="bold"
                variant="h4"
                className="text-[#5C2921] text-base md:text-lg text-left"
              >
                Nomor Peserta
              </Typography>
              <input
                type="text"
                placeholder="0171701001"
                className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-[#B2AAA0] mt-1 border border-gray-300"
                required
              />
            </div>
            <div>
              <Typography
                font="Lora"
                weight="bold"
                variant="h4"
                className="text-[#5C2921] text-base md:text-lg text-left"
              >
                Nama Lengkap
              </Typography>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none 
                         focus:ring-2 focus:ring-[#B2AAA0] mt-1 border border-gray-300"
                required
              />
            </div>
            <Button
              type="submit"
              className="rounded-md bg-[#CCA459] w-full text-base font-Lora font-bold hover:bg-[#FAEDC8] py-2 mt-4"
            >
              Submit
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
