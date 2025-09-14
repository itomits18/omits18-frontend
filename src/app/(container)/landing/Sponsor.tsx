'use client';
import Typography from '@/components/Typography';
import AOS from 'aos';
import Image from 'next/image';
import React from 'react';
import 'aos/dist/aos.css';

export default function Sponsor() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const mediaPartners = [
    {
      id: 1,
      src: '/images/landing/sponsor/logo-media-partner/domath_its.png',
      alt: 'Domath ITS',
    },
    {
      id: 2,
      src: '/images/landing/sponsor/logo-media-partner/himatika_itera.png',
      alt: 'Himatika ITERA',
    },
    {
      id: 3,
      src: '/images/landing/sponsor/logo-media-partner/Logo_Himatika_Unsoed.png',
      alt: 'Himatika Unsoed',
    },
    {
      id: 4,
      src: '/images/landing/sponsor/logo-media-partner/HIMATIKA_UB.png',
      alt: ' HIMATIKA UB',
    },
    {
      id: 5,
      src: '/images/landing/sponsor/logo-media-partner/BEM_FTEIC_ITS.png',
      alt: 'BEM FTEIC ITS',
    },
    {
      id: 6,
      src: '/images/landing/sponsor/logo-media-partner/BEM_FDKBD_ITS.png',
      alt: 'BEM FDKBD ITS',
    },
    {
      id: 7,
      src: '/images/landing/sponsor/logo-media-partner/Bemfa.png',
      alt: 'BEM FMIPA UMM',
    },
    {
      id: 8,
      src: '/images/landing/sponsor/logo-media-partner/BEMFMIPA_UNJ.png',
      alt: 'BEM FMIPA UNJ',
    },
    {
      id: 9,
      src: '/images/landing/sponsor/logo-media-partner/Mahasiswa_Malang.jpg',
      alt: 'Mahasiswa Malang',
    },
    {
      id: 10,
      src: '/images/landing/sponsor/logo-media-partner/Love_Suroboyo.png',
      alt: 'Love Suroboyo',
    },
    {
      id: 11,
      src: '/images/landing/sponsor/logo-media-partner/infoeventjatim.png',
      alt: 'Info Event Jatim',
    },
    {
      id: 12,
      src: '/images/landing/sponsor/logo-media-partner/eventbandunginfo.png',
      alt: 'Event Bandung Info',
    },
    {
      id: 13,
      src: '/images/landing/sponsor/logo-media-partner/pekanbaru_info_2.jpg',
      alt: 'Pekanbaru Info',
    },
    {
      id: 14,
      src: '/images/landing/sponsor/logo-media-partner/pekanbaru_info_1.jpg',
      alt: 'Pekanbaru Info',
    },
    {
      id: 15,
      src: '/images/landing/sponsor/logo-media-partner/elekktro.png',
      alt: 'ELektro ITS',
    },
    {
      id: 16,
      src: '/images/landing/sponsor/logo-media-partner/eventsurabaya.png',
      alt: 'Event Surabaya',
    },
    {
      id: 17,
      src: '/images/landing/sponsor/logo-media-partner/Event_Jogjakartans.jpg',
      alt: 'Event Jogjakartans',
    },
    {
      id: 18,
      src: '/images/landing/sponsor/logo-media-partner/HMSI.png',
      alt: 'HMSI',
    },
    {
      id: 19,
      src: '/images/landing/sponsor/logo-media-partner/Expojogja_New.png',
      alt: 'Expo Jogja',
    },
    {
      id: 20,
      src: '/images/landing/sponsor/logo-media-partner/ITS_TV.png',
      alt: 'ITS TV',
    },
    {
      id: 21,
      src: '/images/landing/sponsor/logo-media-partner/Logo_BM.png',
      alt: 'Berita Magetan',
    },
  ];
  const sponsors = [
    {
      id: 1,
      src: '/images/landing/sponsor/logo-sponsor/dewaweb-horizontal-logo-rgb.png',
      alt: 'Dewaweb',
    },
    {
      id: 2,
      src: '/images/landing/sponsor/logo-sponsor/002_LIVOC.png',
      alt: 'LIVOC',
    },
    {
      id: 3,
      src: '/images/landing/sponsor/logo-sponsor/003_PRINT_N_PRINT.jpg',
      alt: 'PrintNPrint',
    },
    {
      id: 4,
      src: '/images/landing/sponsor/logo-sponsor/004_fave_hotel_Rungkut.png',
      alt: 'Fave Hotel Rungkut',
    },
    {
      id: 5,
      src: '/images/landing/sponsor/logo-sponsor/005_PT_PETROKIMIA_GRESIK.png',
      alt: 'PT Petrokomia Gresik',
    },
    {
      id: 6,
      src: '/images/landing/sponsor/logo-sponsor/006_PT_INKA.png',
      alt: 'PT INKA',
    },
    {
      id: 7,
      src: '/images/landing/sponsor/logo-sponsor/007_Laritta_Bakery.jpg',
      alt: 'Laritta Bakery',
    },
    {
      id: 8,
      src: '/images/landing/sponsor/logo-sponsor/009_KTOM.png',
      alt: 'KTOM',
    },
    {
      id: 9,
      src: '/images/landing/sponsor/logo-sponsor/010_Sobat_Arin.png',
      alt: 'Sobat Arin',
    },
    {
      id: 10,
      src: '/images/landing/sponsor/logo-sponsor/LOGO_FONT_CHEERS.png',
      alt: 'Cheers',
    },
  ];
  return (
    <section className="relative grid min-h-[115vh] w-full place-items-center bg-gradient-to-b from-[#DCAE57] from-[3%] via-[#E0C994] via-[35%] to-[#E5AE66] to-[100%] xl:min-h-[130vh] 2xl:min-h-[170vh]">
      <Image
        src="/images/landing/sponsor/awan-bottom.png"
        width={2878}
        height={2038}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
        alt="awan"
        className="absolute bottom-0 hidden md:block"
      />
      <Image
        src="/images/landing/sponsor/awan-bottom-mobile.png"
        width={780}
        height={1532}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="awan"
        className="absolute bottom-0 md:hidden"
      />
      <Image
        src="/images/landing/sponsor/awan-top.png"
        width={2880}
        height={892}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="awan"
        className="absolute hidden md:top-0 md:block"
      />
      <Image
        src="/images/landing/sponsor/awan-top-mobile.png"
        width={780}
        height={682}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="awan"
        className="absolute top-0 md:hidden"
      />
      <div className="absolute top-0 h-0 w-full bg-gradient-to-b from-[#E4B753] to-[#E1C483] pb-[69%] opacity-60 md:top-0 md:pb-[31%] xl:top-0"></div>
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="100"
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-y-8 px-6"
      >
        {/* <div className="w-full max-w-4xl rounded-3xl border border-white/30 bg-white/20 p-8 shadow-lg backdrop-blur-md">
          <Typography
            variant="h3"
            weight="bold"
            font="CinzelDecorative"
            className="[-webkit-text-stroke-color:theme(colors.brown.300)] bg-gradient-to-b from-[#FFFFFF] to-[#99722F] bg-clip-text text-center text-transparent drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] [-webkit-text-stroke-width:1px] max-md:text-2xl"
          >
            Media Partners
          </Typography>
          <div className="mt-4 flex flex-wrap justify-center gap-4 md:m-4 md:gap-5 lg:m-8 lg:gap-8">
            {mediaPartners.map((logo) => (
              <div key={logo.id} className="relative h-12 w-28 md:h-20 md:w-40">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 64px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div> */}
        <div className="w-full max-w-4xl rounded-3xl border border-white/30 bg-white/20 p-8 shadow-lg backdrop-blur-md">
          <Typography
            variant="h3"
            weight="bold"
            font="CinzelDecorative"
            className="[-webkit-text-stroke-color:theme(colors.brown.300)] bg-gradient-to-b from-[#FFFFFF] to-[#99722F] bg-clip-text text-center text-transparent drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] [-webkit-text-stroke-width:1px] max-md:text-2xl"
          >
            Sponsors
          </Typography>
          <div className="mt-4 flex flex-wrap justify-center gap-4 md:m-4 md:gap-5 lg:m-8 lg:gap-8">
            {sponsors.map((logo) => (
              <div key={logo.id} className="relative h-12 w-28 md:h-20 md:w-40">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 64px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
