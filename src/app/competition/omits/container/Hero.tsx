'use client';
import Typography from '@/components/Typography';
import AOS from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'aos/dist/aos.css';

interface HeroProps {
  colorPrime: string;
  colorSecond: string;
  colorThird: string;
  heroTitle: string;
}

export default function Hero({
  colorPrime,
  colorSecond,
  colorThird,
  heroTitle,
}: HeroProps) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center xl:min-h-[110vh] 2xl:min-h-[130vh]"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${colorThird}, #FFFFFF`,
      }}
    >
      <Image
        src={'/images/competition/landing/omits/hero/awan-desktop.png'}
        alt="Awan"
        width={2836}
        height={820}
        className="absolute top-[10%] right-0 left-0 hidden md:block"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/hero/awan-mobile.png'}
        alt="Awan"
        width={780}
        height={1020}
        className="absolute top-0 right-0 left-0 md:hidden"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="50"
      />
      <Image
        src={'/images/competition/landing/omits/hero/gunung-desktop.png'}
        alt="gunung"
        width={1702}
        height={896}
        className="absolute right-0 hidden md:block xl:top-[30%] xl:w-[60%] 2xl:top-[27%]"
      />
      <Image
        src={'/images/competition/landing/omits/hero/gunung-mobile.png'}
        alt="gunung"
        width={1702}
        height={896}
        className="absolute right-0 md:hidden"
      />
      <Image
        src={'/images/competition/landing/omits/hero/taman-kanan.png'}
        alt="taman"
        width={1326}
        height={642}
        className="absolute right-0 hidden w-[48%] md:top-[71%] md:block lg:top-[47%] 2xl:w-[900px]"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="50"
      />
      <Image
        src={'/images/competition/landing/omits/hero/taman-kanan-mobile.png'}
        alt="taman"
        width={454}
        height={325}
        className="absolute top-[50%] right-0 w-[60%] md:hidden"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="50"
      />
      <Image
        src={'/images/competition/landing/omits/hero/taman-kiri.png'}
        alt="taman"
        width={1929}
        height={1200}
        className="absolute left-0 hidden w-[65%] md:top-[67%] md:block xl:top-[41%] 2xl:top-[35%]"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="50"
      />
      <Image
        src={'/images/competition/landing/omits/hero/taman-kiri-mobile.png'}
        alt="taman"
        width={774}
        height={604}
        className="absolute bottom-0 left-0 md:hidden"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="50"
      />
      <Image
        src={'/images/competition/landing/omits/hero/rumput-kanan.png'}
        alt="rumput kanan"
        width={1238}
        height={370}
        className="absolute right-0 bottom-0 hidden w-[43%] md:block"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="50"
      />
      <Image
        src={'/images/competition/landing/omits/hero/rumput-kanan-mobile.png'}
        alt="rumput kanan"
        width={136}
        height={188}
        className="absolute right-0 bottom-0 block w-[25%] md:hidden"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="50"
      />
      <Image
        src={'/images/competition/landing/omits/hero/rumput-kiri.png'}
        alt="rumput kiri"
        width={1326}
        height={642}
        className="absolute bottom-0 left-0 hidden w-[44%] md:block"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="50"
      />
      <Image
        src={'/images/competition/landing/omits/hero/rumput-kiri-mobile.png'}
        alt="rumput kiri"
        width={492}
        height={194}
        className="absolute bottom-0 left-0 block w-[55%] md:hidden"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="50"
      />
      <div className="relative z-10 m-4 flex max-w-md flex-col items-center md:max-w-5xl xl:-mt-30 2xl:-mt-80">
        <Typography
          font="Lora"
          variant="h5"
          className="mb-2 max-w-2xs text-center text-xl [text-shadow:-1px_1px_0px_white,_0px_0px_0px_rgba(255,255,255,1)] md:max-w-md"
          weight="medium"
          style={{ color: colorPrime }}
        >
          Halo The Emerald Voyagers Yuk Cari Tahu
        </Typography>
        <div className="flex flex-col items-center text-center xl:flex-row xl:gap-3">
          <Typography
            font="CinzelDecorative"
            variant="h4"
            className="mb-1 bg-clip-text text-center text-[28px] leading-[32px] text-transparent [filter:drop-shadow(-3px_3px_0px_white)]"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${colorPrime}, ${colorSecond})`,
            }}
            weight="black"
          >
            OLIMPIADE
          </Typography>
          <Typography
            font="CinzelDecorative"
            variant="h4"
            className="bg-clip-text text-center text-[28px] leading-[32px] text-transparent [filter:drop-shadow(-3px_3px_0px_white)]"
            weight="black"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${colorPrime}, ${colorSecond})`,
            }}
          >
            MATEMATIKA ITS 2025
          </Typography>
        </div>
        <div
          className="mt-5 rounded-full border border-yellow-100 p-2 pr-5 pl-5 md:p-3 md:pr-7 md:pl-7"
          style={{
            backgroundImage: `linear-gradient(to right, ${colorPrime}, ${colorSecond})`,
          }}
        >
          <Typography
            font="CinzelDecorative"
            variant="t"
            className="text-[#EEE2DF] drop-shadow-[3px_3px_2px_rgba(0,0,0,0.5)]"
            weight="black"
          >
            {heroTitle}
          </Typography>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link
            href="/competition/omits/registration"
            className="mt-5 bg-[#EEE2DF] p-4 pr-5 pl-5"
          >
            <Typography
              font="Lora"
              variant="p"
              className="text-[12px] leading-[18px]"
              weight="semibold"
              style={{ color: colorPrime }}
            >
              Daftar Sekarang
            </Typography>
          </Link>
          <Link
            href="https://its.id/m/GuidebookPesertaOMITS2025
"
            className="mt-5 bg-[#EEE2DF] p-4 pr-5 pl-5"
          >
            <Typography
              font="Lora"
              variant="p"
              className="text-[12px] leading-[18px]"
              weight="semibold"
              style={{ color: colorPrime }}
            >
              Link Guidebook
            </Typography>
          </Link>
        </div>
      </div>
    </section>
  );
}
