'use client';
import Typography from '@/components/Typography';
import AOS from 'aos';
import Image from 'next/image';
import React from 'react';
import 'aos/dist/aos.css';

interface AboutProps {
  colorPrime: string;
  colorSecond: string;
  colorAbout: string;
  colorSixth: string;
  aboutTitle: string;
  aboutDesc: string;
}

export default function About({
  colorPrime,
  colorSecond,
  colorAbout,
  colorSixth,
  aboutTitle,
  aboutDesc,
}: AboutProps) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center max-md:min-h-[110vh] xl:min-h-[110vh] 2xl:min-h-[130vh]"
      style={{
        background: `linear-gradient(to bottom, #EEE2DF 22%, ${colorAbout} 100%)`,
      }}
    >
      <div
        className="absolute top-0 flex h-12 w-full items-center justify-center drop-shadow-lg md:h-15 xl:h-23 2xl:h-30"
        style={{ backgroundColor: colorSixth }}
      >
        <Typography
          font="CinzelDecorative"
          variant="h5"
          className="bg-clip-text text-center text-[20px] leading-[24px] text-transparent [filter:drop-shadow(-3px_3px_0px_#EEE2DF)] xl:text-5xl xl:leading-[80px] 2xl:text-6xl"
          weight="black"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${colorPrime}, ${colorSecond})`,
          }}
        >
          KENALI LEBIH DEKAT
        </Typography>
      </div>
      <Image
        src={'/images/competition/landing/omits/about/jamur-left-desktop.png'}
        alt="jamur kiri"
        width={321}
        height={630}
        className="absolute -top-5 left-0 z-5 block w-[15%] md:-top-20 xl:w-[10%] 2xl:-top-35"
      />
      <Image
        src={'/images/competition/landing/omits/about/jamur-right-desktop.png'}
        alt="jamur right"
        width={296}
        height={629}
        className="absolute -top-5 right-0 z-5 block w-[15%] md:-top-20 xl:w-[10%] 2xl:-top-35"
      />
      <Image
        src={'/images/competition/landing/omits/about/castle-mobile.png'}
        alt="castle"
        width={456}
        height={748}
        className="absolute bottom-0 left-0 block w-[50%] md:w-[40%] xl:hidden"
      />
      <Image
        src={'/images/competition/landing/omits/about/castle-desktop.png'}
        alt="castle"
        width={456}
        height={748}
        className="absolute bottom-0 left-20 hidden xl:block xl:w-[30%] 2xl:left-[10%]"
      />
      <Image
        src={'/images/competition/landing/omits/about/awan-mobile.png'}
        alt="awan-top"
        width={780}
        height={1010}
        className="absolute top-25 block md:hidden"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/about/awan-top-desktop.png'}
        alt="awan-top"
        width={2880}
        height={1134}
        className="absolute top-35 hidden md:block"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={
          '/images/competition/landing/omits/about/ranting-right-desktop.png'
        }
        alt="ranting"
        width={502}
        height={621}
        className="absolute right-0 bottom-[23%] z-20 block w-[20%] md:bottom-[25%] md:w-[15%] xl:bottom-[5%] xl:w-[18%]"
      />
      <Image
        src={'/images/competition/landing/omits/about/ranting-left-desktop.png'}
        alt="ranting"
        width={489}
        height={651}
        className="absolute top-[15%] left-0 block w-[20%] md:top-[30%] md:w-[15%] xl:top-[15%] xl:w-[17%]"
      />
      <Image
        src={'/images/competition/landing/omits/about/batu-right-desktop.png'}
        alt="batu"
        width={424}
        height={616}
        className="absolute top-[13%] right-0 block w-[20%] md:top-[20%] md:w-[15%] xl:top-[25%] xl:w-[13%]"
      />
      <Image
        src={'/images/competition/landing/omits/about/batu-left-desktop.png'}
        alt="batu"
        width={432}
        height={616}
        className="absolute bottom-[17%] left-0 block w-[20%] md:bottom-[20%] md:w-[15%] xl:bottom-[18%] xl:w-[13%] 2xl:bottom-[16%]"
      />
      <Image
        src={'/images/competition/landing/omits/about/awan-bottom-mobile.png'}
        alt="awan"
        width={780}
        height={400}
        className="absolute -bottom-10 left-0 z-30 block md:hidden"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/about/awan-bottom-desktop.png'}
        alt="awan"
        width={2880}
        height={764}
        className="absolute -bottom-12 left-0 z-30 hidden md:block xl:-bottom-15 2xl:-bottom-30"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <div className="relative z-10 -mt-15 flex flex-col items-center justify-center xl:-mt-30 2xl:-mt-35">
        <Typography
          font="Lora"
          variant="h4"
          className="max-w-2xs text-center text-xl text-[28px] leading-[32px] drop-shadow-md md:max-w-md xl:max-w-2xl"
          weight="medium"
          style={{ color: colorPrime }}
        >
          Olimpiade Matematika ITS
        </Typography>
        <Typography
          font="CinzelDecorative"
          variant="h4"
          className="z-30 mt-3 mb-3 max-w-xs text-center text-xl text-[28px] leading-[32px] drop-shadow-md md:max-w-lg xl:max-w-3xl xl:text-6xl xl:leading-[80px]"
          weight="black"
          style={{ color: colorPrime }}
        >
          {aboutTitle}
        </Typography>
        <Typography
          font="Lora"
          variant="t"
          className="max-w-3xs text-center text-xl text-[14px] drop-shadow-md md:max-w-md xl:max-w-4xl 2xl:max-w-7xl 2xl:text-[28px] 2xl:leading-[32px]"
          weight="regular"
          style={{ color: colorPrime }}
        >
          Olimpiade matematika tingkat nasional yang ditujukan untuk{' '}
          <span className="font-bold">{aboutDesc}</span> di seluruh Indonesia.
          Dengan pengerjaan <span className="font-bold">secara individu</span>,
          babak Penyisihan berlangsung secara offline atau online dan wajib
          sesuai region sekolah masing-masing peserta. Sedangkan babak Semifinal
          hingga Grand Final diselenggarakan secara langsung di Departemen
          Matematika ITS.
        </Typography>
      </div>
    </section>
  );
}
