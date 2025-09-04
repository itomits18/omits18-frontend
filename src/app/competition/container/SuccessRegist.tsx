'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function SuccessRegist() {
  return (
    <section className="via-[#6DA0E1]/30% relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#527EB0] to-[#FFFDF0]">
      <div className="absolute top-[20%] z-10 max-w-md p-4 max-md:text-center md:left-20 md:max-w-2xl md:p-0 lg:left-32 xl:top-[10%]">
        <Typography
          variant="h3"
          font="CinzelDecorative"
          weight="bold"
          className="mb-3 text-3xl text-[#F4F4F5] md:mb-4"
        >
          WELCOME, EMERALD VOYAGER!
        </Typography>
        <Typography
          font="Lora"
          weight="semibold"
          className="mb-3 text-xs text-[#F4F4F5] md:mb-4 md:text-lg"
        >
          Selamat datang di OMITS 18th. Kamu telah terdaftar sebagai Emerald
          Voyager!
        </Typography>
        <Button className="rounded-xl bg-yellow-300 px-5 py-3 text-xs font-bold text-white hover:bg-yellow-600 md:text-lg">
          Kembali ke dashboard
        </Button>
      </div>
      <Image
        src={'/images/competition/SuccessRegist/cloud-bottom-mobile.png'}
        alt="Cloud bottom"
        width={390}
        height={530}
        className="absolute -bottom-5 md:hidden"
      />
      <Image
        src={'/images/competition/SuccessRegist/cloud-top-mobile.png'}
        alt="Cloud top"
        width={349}
        height={184}
        className="absolute top-0 md:hidden"
      />
      <Image
        src={'/images/competition/SuccessRegist/cloud-top-desktop.png'}
        alt="Cloud top"
        width={1440}
        height={447}
        className="absolute top-0 hidden h-auto w-full md:block"
      />
      <Image
        src={'/images/competition/SuccessRegist/background-desktop.png'}
        alt="Bakground desktop"
        width={1738}
        height={644}
        className="absolute -bottom-5 hidden md:block xl:-bottom-20 xl:h-auto xl:w-full"
      />
    </section>
  );
}
