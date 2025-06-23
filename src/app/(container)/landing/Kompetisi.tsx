'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Kompetisi() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative min-h-[120vh] bg-gradient-to-b from-[#FFF4F4] via-yellow-100 via-35% to-[#456C1B] lg:min-h-[140vh] xl:min-h-[130vh] 2xl:min-h-[150vh]">
      <Image
        src="/images/landing/kompetisi/floor-mobile.png"
        width={780}
        height={398}
        alt="assets"
        className="absolute bottom-0 z-10 w-full lg:hidden"
        quality={100}
      />
      <Image
        src="/images/landing/kompetisi/floor-desktop.png"
        width={2880}
        height={562}
        alt="assets"
        className="absolute bottom-0 z-10 w-full max-lg:hidden lg:-bottom-4"
        quality={100}
      />
      <Image
        src="/images/landing/kompetisi/grass-left.png"
        width={1514}
        height={1505}
        alt="assets"
        className="absolute bottom-0 -left-20 z-[5] w-full md:bottom-10 md:w-[80%] lg:-bottom-10 lg:w-[60%] 2xl:w-[55%]"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src="/images/landing/kompetisi/habit-left.png"
        width={2130}
        height={1876}
        alt="assets"
        className="absolute bottom-10 left-0 z-20 w-full lg:w-[60%] 2xl:bottom-16 2xl:w-[50%]"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src="/images/landing/kompetisi/habit-right.png"
        width={796}
        height={794}
        alt="assets"
        className="absolute right-0 bottom-0 z-20 w-full max-lg:hidden lg:w-[40%]"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src="/images/landing/kompetisi/grass-right.png"
        width={1900}
        height={1409}
        alt="assets"
        className="absolute right-0 -bottom-40 z-[5] w-full max-lg:hidden lg:w-[60%] 2xl:-bottom-52 2xl:w-[50%]"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src="/images/landing/kompetisi/ranting.png"
        width={1149}
        height={903}
        alt="assets"
        className="absolute top-40 right-0 z-[5] w-full max-lg:hidden lg:w-[40%] xl:top-60"
      />
      <Image
        src="/images/landing/kompetisi/castle.png"
        width={711}
        height={750}
        alt="assets"
        className="absolute right-0 bottom-10 w-[80%] md:w-[70%] lg:inset-x-0 lg:mx-auto lg:w-[40%]"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      />

      <div className="relative z-[41] mx-auto w-fit space-y-2 pt-20 lg:float-end lg:mx-30 xl:pt-32 2xl:mx-52">
        <Typography
          variant="h4"
          weight="bold"
          font="CinzelDecorative"
          className="text-additions-brown-200 text-center max-md:text-3xl"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <span className="text-shadow-[-3px_3px_5px_rgba(0,0,0,0.25)]">
            Kompetisi
          </span>
        </Typography>
        <Typography
          variant="h2"
          weight="bold"
          font="CinzelDecorative"
          className="text-additions-brown-200 text-center max-md:text-5xl"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <span className="text-shadow-[-3px_3px_5px_rgba(0,0,0,0.25)]">
            OMITS 18TH
          </span>
        </Typography>

        <div
          className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-5"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <Button
            variant="green"
            size="lg"
            className="rounded-full px-12"
            asChild
          >
            <Link href="https://its.id/m/GuidebookPesertaOMITS2025">
              OMITS 18th
            </Link>
          </Button>
          <Button
            variant="blue"
            size="lg"
            className="rounded-full px-12"
            asChild
          >
            <Link href="https://its.id/m/GuidebookPesertaMission9">
              MISSION 9.0
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
