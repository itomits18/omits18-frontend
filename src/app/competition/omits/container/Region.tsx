'use client';
import Typography from '@/components/Typography';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import AOS from 'aos';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';
import 'aos/dist/aos.css';

const slideData = [
  {
    title: 'OFFLINE 1',
    subtitle: '(SURABAYA)',
    description: 'Meliputi Surabaya, Gresik, dan Bangkalan.',
  },
  {
    title: 'OFFLINE 2',
    subtitle: '(SIDOARJO)',
    description: 'Meliputi Sidoarjo dan Pasuruan.',
  },
  {
    title: 'OFFLINE 3',
    subtitle: '(MOJOKERTO)',
    description: 'Meliputi Mojokerto dan Jombang.',
  },
  {
    title: 'OFFLINE 4',
    subtitle: '(MALANG)',
    description: 'Meliputi Malang dan Kota Batu.',
  },
  {
    title: 'OFFLINE 5',
    subtitle: '(TULUNGAGUNG)',
    description: 'Meliputi Tulungagung, Trenggalek, dan Blitar.',
  },
  {
    title: 'OFFLINE 6',
    subtitle: '(KEDIRI)',
    description: 'Meliputi Kediri dan Nganjuk.',
  },
  {
    title: 'OFFLINE 7',
    subtitle: '(TUBAN)',
    description: 'Meliputi Tuban, Bojonegoro, dan Lamongan.',
  },
  {
    title: 'OFFLINE 8',
    subtitle: '(MADIUN)',
    description: 'Meliputi Madiun, Ngawi, Ponorogo, Pacitan, dan Magetan.',
  },
  {
    title: 'OFFLINE 9',
    subtitle: '(SAMPANG)',
    description: 'Meliputi Sampang, Pamekasan, dan Sumenep.',
  },
  {
    title: 'OFFLINE 10',
    subtitle: '(JEMBER)',
    description: 'Meliputi Jember, Probolinggo, dan Lumajang.',
  },
  {
    title: 'OFFLINE 11',
    subtitle: '(JABODETABEK)',
    description: 'Meliputi DKI Jakarta, Bogor, Depok, Tanggerang, dan Bekasi.',
  },
  {
    title: 'OFFLINE 12',
    subtitle: '(BALI)',
    description: 'Meliputi Bali.',
  },
  {
    title: 'ONLINE 1',
    subtitle: '(BANYUWANGI)',
    description: 'Meliputi Banyuwangi, Bondowoso, dan Situbondo.',
  },
  {
    title: 'ONLINE 2',
    subtitle: '(DI YOGYAKARTA, JAWA TENGAH)',
    description: 'Meliputi Seluruh DI Yogyakarta dan Jawa Tengah.',
  },
  {
    title: 'ONLINE 3',
    subtitle: '(Jawa Barat, Banten)',
    description:
      'Meliputi Seluruh Jawa Barat dan Banten (Kecuali Bogor, Depok, Tanggerang, dan Bekasi).',
  },
  {
    title: 'ONLINE 4',
    subtitle: '(SUMATERA)',
    description: 'Meliputi Pulau Sumatera.',
  },
  {
    title: 'ONLINE 5',
    subtitle: '(SULAWESI, KALIMANTAN)',
    description: 'Meliputi Pulau Sulawesi dan Kalimantan.',
  },
  {
    title: 'ONLINE 6',
    subtitle: '(Indonesia Bagian Timur)',
    description: 'Meliputi NTB, NTT, dan Papua.',
  },
];

interface RegionProps {
  colorPrime: string;
  colorSecond: string;
  colorAbout: string;
  regionAssetDesktop: string;
  regionAssetMobile: string;
  regionPasirDesktop: string;
  regionPasirMobile: string;
}

export default function Region({
  colorPrime,
  colorSecond,
  colorAbout,
  regionAssetDesktop,
  regionAssetMobile,
  regionPasirDesktop,
  regionPasirMobile,
}: RegionProps) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center max-md:min-h-[110vh] xl:min-h-[110vh] 2xl:min-h-[130vh]"
      style={{
        background: `linear-gradient(to bottom, #EEE2DF, ${colorAbout})`,
      }}
    >
      <Image
        src={'/images/competition/landing/omits/region/castle-mobile.png'}
        alt="castle"
        width={586}
        height={314}
        className="absolute bottom-[10%] left-0 w-[75%] md:hidden"
      />
      <Image
        src={'/images/competition/landing/omits/region/awan-mobile.png'}
        alt="awan"
        width={774}
        height={1158}
        className="absolute top-10 md:hidden"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/region/awan-desktop.png'}
        alt="awan"
        width={2812}
        height={992}
        className="absolute top-20 hidden md:block"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/region/light-mobile.png'}
        alt="light"
        width={780}
        height={1688}
        className="absolute top-0 left-0 z-20 md:hidden"
      />
      <Image
        src={'/images/competition/landing/omits/region/light-desktop.png'}
        alt="light"
        width={2880}
        height={2048}
        className="absolute top-0 left-0 z-20 hidden md:block"
      />
      <Image
        src={'/images/competition/landing/omits/region/witch.png'}
        alt="witch"
        width={69}
        height={74}
        className="absolute top-20 right-15 z-10 max-md:w-[10%]"
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={
          '/images/competition/landing/omits/region/gunung-right-desktop.png'
        }
        alt="gunung"
        width={1072}
        height={640}
        className="absolute right-0 bottom-[30%] hidden w-[60%] md:block"
      />
      <Image
        src={'/images/competition/landing/omits/region/gunung-left-desktop.png'}
        alt="gunung"
        width={994}
        height={640}
        className="absolute bottom-0 left-0 hidden w-[60%] md:block"
      />
      <button
        onClick={() => setIsCarouselOpen(true)}
        className="absolute bottom-[30%] z-20 w-[90%] cursor-pointer transition-transform duration-300 hover:scale-105 md:w-[80%] xl:bottom-[20%]"
        aria-label="Buka galeri region"
      >
        <Image
          src={regionAssetMobile}
          alt="Peta"
          width={745}
          height={361}
          className="z-60 w-full md:hidden"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="100"
        />
        <Image
          src={regionAssetDesktop}
          alt="Peta"
          width={2375}
          height={1045}
          className="z-60 hidden w-full md:block"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="100"
        />
      </button>
      <Image
        src={regionPasirMobile}
        alt="Pasir"
        width={780}
        height={816}
        className="absolute -bottom-5 md:hidden"
      />
      <Image
        src={regionPasirDesktop}
        alt="Pasir"
        width={2880}
        height={1418}
        className="absolute bottom-0 hidden md:block"
      />
      <div className="absolute top-30 z-25 flex flex-col items-center justify-center xl:top-20 2xl:top-30">
        <Typography
          font="Lora"
          variant="h5"
          className="mb-1 max-w-2xs text-center text-xl [text-shadow:-1px_2px_0px_rgba(0,0,0,0.3)] md:max-w-md"
          weight="medium"
          style={{ color: colorPrime }}
        >
          Dimana Saja
        </Typography>
        <Typography
          font="CinzelDecorative"
          variant="h4"
          className="mb-1 max-w-xs text-center text-[28px] [text-shadow:-1px_2px_0px_rgba(0,0,0,0.3)] md:max-w-xl"
          weight="black"
          style={{ color: colorPrime }}
        >
          Region OMITS 2025
        </Typography>
        <Typography
          font="Lora"
          variant="t"
          className="mb-1 max-w-58 text-center text-[14px] md:max-w-xl xl:max-w-4xl"
          weight="regular"
          style={{ color: colorPrime }}
        >
          OMITS 2025 hadir sebagai olimpiade matematika bergengsi yang merangkul{' '}
          <span className="font-bold">18 region di seluruh Indonesia</span>,
          terdiri dari <span className="font-bold">12 region offline</span> dan{' '}
          <span className="font-bold">6 region online</span>, mempertemukan
          talenta-talenta terbaik Indonesia dalam satu arena untuk berjuang dan
          unggul
        </Typography>
      </div>
      {isCarouselOpen && (
        <div className="absolute bottom-15 left-10 z-60">
          <button
            onClick={() => setIsCarouselOpen(false)}
            className="absolute top-10 right-2 z-10 rounded-full p-1 text-gray-800"
            aria-label="Tutup galeri"
          >
            <X size={16} />
          </button>

          <Carousel
            opts={{ loop: true }}
            className="w-full max-w-[180px] md:max-w-sm lg:max-w-md"
          >
            <div className="overflow-hidden rounded-lg">
              <CarouselContent>
                {slideData.map((slide, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="p-1">
                      <div className="relative pt-8">
                        <Typography
                          font="CinzelDecorative"
                          variant="h4"
                          weight="black"
                          className="absolute top-5 left-1/2 z-10 w-full -translate-x-1/2 bg-clip-text text-center text-transparent [filter:drop-shadow(-3px_3px_0px_white)] max-md:text-[20px] max-md:leading-[24px] md:top-0"
                          style={{
                            backgroundImage: `linear-gradient(to bottom, ${colorPrime}, ${colorSecond})`,
                          }}
                        >
                          {slide.title}
                        </Typography>
                        <div className="relative flex h-50 flex-col items-center justify-center rounded-lg bg-[#EEE2DF]/80 p-3 text-center md:h-53">
                          <Typography
                            font="CinzelDecorative"
                            variant="h6"
                            weight="black"
                            className="max-md:text-sm md:-mt-6"
                            style={{ color: colorPrime }}
                          >
                            {slide.subtitle}
                          </Typography>
                          <Typography
                            variant="t"
                            font="Lora"
                            weight="regular"
                            className="mt-3 max-md:text-sm"
                            style={{ color: colorPrime }}
                          >
                            {slide.description}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <CarouselPrevious className="-left-4 inline-flex text-gray-700" />
            <CarouselNext className="-right-4 inline-flex text-gray-700" />
          </Carousel>
        </div>
      )}
    </section>
  );
}
