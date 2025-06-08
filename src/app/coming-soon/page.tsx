'use client';

import Typography from '@/components/Typography';
import Image from 'next/image';

import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function page() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative min-h-screen max-w-full overflow-x-hidden bg-linear-to-b from-purple-300 via-pink-400 via-50% to-yellow-200 max-lg:overflow-hidden lg:min-h-screen xl:min-h-[120vh]">
      <Image
        src="/images/coming-soon/witch.png"
        width={100}
        height={106}
        alt="wind"
        className="absolute inset-x-0 top-24 mx-auto w-[20%] md:top-16 md:w-[15%] lg:w-[7%]"
        data-aos="fade-up-right"
        data-aos-delay="700"
        data-aos-duration="500"
      />

      <Image
        src="/images/coming-soon/wind-right.png"
        width={1208}
        height={689}
        alt="wind"
        className="absolute right-0 top-10 w-[40%] max-lg:hidden lg:block 2xl:top-5"
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="500"
      />
      <Image
        src="/images/coming-soon/wind-left.png"
        width={1208}
        height={689}
        alt="wind"
        className="absolute left-0 top-10 w-[40%] max-lg:hidden lg:block 2xl:top-5"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="500"
      />

      <Image
        src="/images/coming-soon/wind-right-mobile.png"
        width={1208}
        height={689}
        alt="wind"
        className="absolute right-0 w-[40%] lg:hidden 2xl:top-5"
      />
      <Image
        src="/images/coming-soon/wind-left-mobile.png"
        width={1208}
        height={689}
        alt="wind"
        className="absolute left-0 w-[40%] lg:hidden 2xl:top-5"
      />

      <div className="relative flex min-h-screen items-center justify-center lg:min-h-screen xl:min-h-[120vh]">
        <Image
          src="/images/coming-soon/pohon-back.png"
          width={2496}
          height={758}
          alt="wind"
          className="absolute right-0 w-full max-md:bottom-52 md:bottom-80 lg:bottom-32 lg:block lg:w-[80%] xl:bottom-52 2xl:w-[80%]"
          data-aos="fade-in"
          data-aos-delay="500"
          data-aos-duration="500"
          data-aos-anchor="#state"
        />

        <Image
          src="/images/coming-soon/jalan.png"
          width={2880}
          height={758}
          alt="wind"
          className="absolute bottom-0 max-lg:hidden lg:block"
        />

        <Image
          src="/images/coming-soon/jalan-mobile.png"
          width={780}
          height={672}
          alt="wind"
          className="absolute bottom-0 md:scale-110 lg:hidden"
        />

        <Image
          src="/images/coming-soon/batu-kiri.png"
          width={518}
          height={366}
          alt="wind"
          className="absolute bottom-6 left-10 z-20 w-[25%] lg:bottom-10 lg:left-10 lg:w-[15%] xl:bottom-5"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="500"
          data-aos-anchor="#state"
        />

        <Image
          src="/images/coming-soon/batu-kanan.png"
          width={518}
          height={366}
          alt="wind"
          className="absolute bottom-5 right-10 z-20 w-[25%] lg:bottom-10 lg:right-16 lg:w-[15%] xl:bottom-5"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="500"
          data-aos-anchor="#state"
        />

        <Image
          src="/images/coming-soon/leaf-left.png"
          width={124}
          height={166}
          alt="wind"
          className="absolute -bottom-5 -left-5 z-25 w-[25%] md:w-[20%] lg:hidden"
        />

        <Image
          src="/images/coming-soon/leaf-right.png"
          width={124}
          height={166}
          alt="wind"
          className="absolute -bottom-5 -right-5 z-25 w-[25%] md:w-[20%] lg:hidden"
        />

        <Image
          src="/images/coming-soon/pohon-kanan.png"
          width={808}
          height={1296}
          alt="wind"
          className="absolute bottom-40 right-0 w-[40%] md:bottom-60 lg:bottom-32 lg:w-[25%] xl:bottom-36 2xl:w-[25%]"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-anchor="#state"
        />

        <Image
          src="/images/coming-soon/pohon-kiri.png"
          width={808}
          height={1296}
          alt="wind"
          className="absolute bottom-40 left-0 w-[40%] md:bottom-60 lg:bottom-32 lg:w-[25%] xl:bottom-36 2xl:w-[25%]"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-anchor="#state"
        />

        <Image
          src="/images/coming-soon/portal.png"
          width={1698}
          height={988}
          alt="wind"
          className="absolute bottom-20 w-[90%] md:bottom-28 md:w-[80%] lg:bottom-14 lg:w-[60%] xl:bottom-20 2xl:w-[50%]"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-anchor="#state"
        />

        <div className="relative z-20 flex flex-col items-center max-md:mb-44 md:mb-80 lg:mb-72 2xl:mb-80">
          <span
            style={{
              textShadow: '0px 3px 2px rgba(0,0,0,0.5)',
            }}
          >
            <Typography
              id="state"
              font="OZWizard"
              variant="h5"
              className="text-center text-pink-100 max-md:text-lg"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              Lets be part of Twisted Path
            </Typography>
          </span>
          <span
            style={{
              textShadow: '0px 10px 10px rgba(0,0,0,0.5)',
            }}
          >
            <Typography
              font="CinzelDecorative"
              variant="h1"
              className="text-center text-pink-100 max-md:text-5xl max-md:leading-10 md:leading-[72px] 2xl:text-[126px] 2xl:leading-[108px]"
              weight="black"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              Coming Soon
            </Typography>
          </span>

          {/* <Button variant="purple" className="mx-auto mt-3">
            Check our instagram
          </Button> */}
        </div>
      </div>
    </section>
  );
}
