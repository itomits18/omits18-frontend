'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';

const Pencapaian = [
  {
    image: '/images/landing/pencapaian/muri.png',
    title: 'Rekor Muri',
    description:
      '"Penyelenggara pengujian Kubus Ajaib bersifat dinamis bergerak” Pada Tahun 2007"',
  },
  {
    image: '/images/landing/pencapaian/puspresnas.png',
    title: 'OMITS 16th',
    description: 'Terkurasi oleh Puspresnas Sejak',
  },
  {
    image: '/images/landing/pencapaian/surat.png',
    title: '+6000',
    description: 'Surat Kecil dari OMITS untuk Mendikbud',
  },
  {
    image: '/images/landing/pencapaian/peserta.png',
    title: '+72000',
    description: 'Total Peserta OMITS',
  },
];

export default function Hero() {
  const refe = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="relative pb-20"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #4244AB, #6DA0E1, 12%, #DEC1DB, 32%, #8FBFDA, 50%, #DEC1DB, 63%, #F3BABA, 76%, #FFF4F4, 86%, #FFF4F4)',
      }}
    >
      <section className="relative flex min-h-screen w-full items-center justify-center lg:min-h-[130vh]">
        <Image
          src="/images/landing/hero/castle-left.png"
          width={1061}
          height={1394}
          alt="assets"
          className="absolute bottom-0 left-0 z-20 max-lg:w-[50%] md:w-[40%] lg:w-[30%]"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        />
        <Image
          src="/images/landing/hero/castle-right.png"
          width={1061}
          height={1394}
          alt="assets"
          className="absolute bottom-0 right-0 z-20 max-lg:bottom-32 max-lg:w-[50%] md:w-[40%] lg:w-[30%]"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        />
        <Image
          src="/images/landing/hero/mountain-right.png"
          width={1310}
          height={526}
          alt="assets"
          className="absolute right-0 opacity-60 max-lg:bottom-0 md:w-[50%] lg:bottom-40 lg:w-[50%]"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        />
        <Image
          src="/images/landing/hero/mountain-left.png"
          width={1310}
          height={526}
          alt="assets"
          className="absolute bottom-40 left-0 opacity-60 md:w-[60%] lg:w-[50%]"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        />
        <Image
          src="/images/landing/hero/awan-lt.png"
          width={694}
          height={208}
          alt="assets"
          className="absolute z-20 max-md:left-10 max-md:top-28 max-md:w-[45%] md:left-20 md:top-28 md:w-[40%] lg:w-[25%]"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="500"
        />
        <Image
          src="/images/landing/hero/awan-rt.png"
          width={694}
          height={208}
          alt="assets"
          className="absolute right-0 top-32 opacity-50 max-md:w-[30%] md:w-[40%] lg:w-[30%]"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="500"
        />
        <Image
          src="/images/landing/hero/mountain-left.png"
          width={1310}
          height={526}
          alt="assets"
          className="absolute bottom-40 left-0 opacity-60 md:w-[60%] lg:w-[50%]"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
        />

        <div className="z-20 mb-20 flex flex-col items-center justify-center space-y-4 lg:space-y-2 xl:mb-52 2xl:mb-72">
          <Image
            src="/images/landing/hero/title.png"
            width={538}
            height={200}
            alt="assets"
            className="mx-auto max-lg:w-[60%] md:w-[30%] lg:w-[30%]"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          />

          <Typography
            variant="h3"
            font="CinzelDecorative"
            weight="black"
            className="text-center text-[#284269] max-md:mx-auto max-md:w-[80%] max-md:text-3xl md:w-[70%] md:!leading-[72px] lg:w-full"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <span className="text-shadow-[-4px_4px_0px_rgb(249,221,216)] max-md:text-shadow-[-3px_3px_0px_rgb(249,221,216)]">
              Olimpiade Matematika ITS
            </span>
          </Typography>

          <Typography
            variant="h5"
            className="text-center text-[#405880]"
            weight="semibold"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            Kompetisi Hebat untuk Sang Juara
          </Typography>

          <Button
            variant="purple"
            size="lg"
            className="mt-5 max-md:mt-10 max-md:rounded-md max-md:px-4 max-md:py-1 max-md:text-[12px] max-md:leading-[18px]"
            onClick={() => {
              refe.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="700"
          >
            Mulai Jelajah
          </Button>
        </div>
      </section>

      <section ref={refe} className="relative z-40 min-h-fit">
        <div className="flex flex-col items-center justify-center max-lg:mt-0 lg:-mt-48 xl:-mt-72">
          <Image
            src="/images/landing/pencapaian/portal.png"
            height={826}
            width={580}
            alt="assets"
            className="lg:w-[30%] xl:w-[40%] 2xl:w-[35%]"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          />

          <div
            className="relative mx-auto w-[80%] items-stretch justify-center rounded-lg bg-gradient-to-r from-pink-100 to-blue-100 px-8 py-8 max-2xl:justify-start 2xl:pt-16"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <div className="flex justify-center space-x-8 max-2xl:overflow-x-auto max-2xl:pt-16">
              {Pencapaian.map((p, i) => (
                <div key={i}>
                  <div className="from-additions-purple-200 relative flex h-full w-[300px] flex-col items-center rounded-xl bg-gradient-to-b to-[#405881] p-4 pt-14">
                    <Image
                      src={p.image}
                      height={158}
                      width={158}
                      alt="assets"
                      className="absolute -top-12 mx-auto w-[30%]"
                    />
                    <Typography
                      variant="h6"
                      weight="black"
                      font="CinzelDecorative"
                      className="text-additions-brown-50 max-md:text-xl"
                    >
                      {p.title}
                    </Typography>

                    <Typography
                      weight="medium"
                      variant="p"
                      className="text-additions-brown-50 mx-auto text-center"
                    >
                      {p.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-[80vh] justify-center md:min-h-[60vh] lg:min-h-screen xl:min-h-[80vh] 2xl:min-h-[90vh]">
        <Image
          id="awanatas"
          src="/images/landing/tentang/awan-atas.png"
          width={2358}
          height={1142}
          alt="assets"
          className="absolute -left-10 bottom-20 md:bottom-10 md:left-0 lg:-left-20"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="200"
        />
        <Image
          id="awanbawah"
          src="/images/landing/tentang/awan-bawah.png"
          width={2358}
          height={1142}
          alt="assets"
          className="absolute bottom-10 right-0 z-20 md:bottom-0 md:hidden md:w-[60%]"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
          data-aos-anchor="#awanatas"
        />
        <Image
          src="/images/landing/tentang/awan-bawah.png"
          width={2358}
          height={1142}
          alt="assets"
          className="absolute -left-10 bottom-10 z-20 md:-bottom-10 md:left-0 md:w-[70%]"
        />
        <Image
          src="/images/landing/tentang/awan-bawah-mobile.png"
          width={2358}
          height={1142}
          alt="assets"
          className="absolute -left-10 bottom-0 z-20 scale-125 md:-bottom-10 md:left-0 md:w-[70%] lg:hidden"
        />
        <Image
          src="/images/landing/tentang/awan-bawah-mobile.png"
          width={2358}
          height={1142}
          alt="assets"
          className="absolute -left-10 bottom-0 z-20 scale-125 md:-bottom-5 md:left-0 md:right-0 md:w-[70%] lg:hidden"
        />
        <Image
          src="/images/landing/tentang/awan-bawah-desktop.png"
          width={2358}
          height={1142}
          alt="assets"
          className="absolute -bottom-10 right-0 z-[32] max-lg:hidden xl:-bottom-24"
        />
        <Image
          src="/images/landing/tentang/awan-bawah-desktop.png"
          width={2358}
          height={1142}
          alt="assets"
          className="absolute -bottom-32 right-0 z-[32] max-lg:hidden xl:-bottom-40"
        />
        <Image
          src="/images/landing/tentang/awan-bawah-desktop.png"
          width={2358}
          height={1142}
          alt="assets"
          className="absolute -bottom-32 right-0 z-[32] max-lg:hidden xl:-bottom-40 xl:w-[70%]"
        />
        <div className="z-40 flex flex-col items-center space-y-2 max-lg:w-[80%] lg:ml-32 lg:items-start">
          <div
            id="tentang"
            className="mt-10 rounded-md bg-gradient-to-r from-pink-100 to-blue-100 px-3 py-2 min-[410px]:mt-20"
            data-aos="fade-right"
            data-aos-duration="200"
            data-aos-delay="500"
          >
            <Typography
              variant="t"
              className="text-[#405880]"
              weight="semibold"
            >
              Yuk Ketahui Tentang
            </Typography>
          </div>

          <Typography
            font="CinzelDecorative"
            weight="bold"
            variant="h3"
            className="shadow-2xs text-[#284269] max-md:text-3xl"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-anchor="#tentang"
          >
            <span className="text-shadow-[-4px_4px_0px_rgb(222,193,219)] max-md:text-shadow-[-3px_3px_0px_rgb(222,193,219)]">
              OMITS 18th
            </span>
          </Typography>

          <Typography
            variant="t"
            className="text-center text-[#284269] lg:w-[60%] lg:text-start 2xl:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="500"
            data-aos-anchor="#tentang"
          >
            Olimpiade Matematika ITS atau OMITS merupakan olimpiade bergengsi
            tingkat nasional yang diselenggarakan untuk siswa jenjang SD, SMP,
            dan SMA sederajat serta untuk mahasiswa.
          </Typography>
        </div>

        <div className="bottom-15 absolute right-0 w-[80%] md:-bottom-10 lg:bottom-0 lg:w-[60%]">
          <div className="relative flex justify-center">
            <Image
              src="/images/landing/tentang/omits-atas.png"
              width={696}
              height={390}
              alt="assets"
              className="animated-vertical bottom-35 xl:bottom-85 2xl:bottom-92 absolute z-30 w-[50%] md:bottom-60 md:w-[35%] lg:right-32"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="500"
              data-aos-anchor="#awanatas"
            />

            <Image
              src="/images/landing/tentang/omits-bawah.png"
              width={696}
              height={390}
              alt="assets"
              className="absolute bottom-20 z-30 w-[50%] md:bottom-40 md:w-[40%] lg:bottom-52 lg:right-32 xl:bottom-60"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="500"
              data-aos-anchor="#awanbawah"
            />
            <Image
              src="/images/landing/tentang/batu.png"
              width={2195}
              height={907}
              alt="assets"
              className="mr-10 lg:hidden"
              data-aos="fade-up"
              data-aos-duration="200"
              data-aos-delay="500"
              data-aos-anchor="#awanbawah"
            />
            <Image
              src="/images/landing/tentang/batu-desktop.png"
              width={2195}
              height={907}
              alt="assets"
              className="absolute -bottom-20 right-0 max-lg:hidden xl:-bottom-40 2xl:-bottom-52"
              data-aos="fade-up"
              data-aos-duration="200"
              data-aos-delay="500"
              data-aos-anchor="#awanbawah"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
