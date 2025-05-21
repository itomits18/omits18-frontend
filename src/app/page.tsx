'use client';

import AOS from 'aos';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#23243B] to-[#5E63A1]">
      <Image
        src={'/images/global-error/bintang-mobile.png'}
        alt="Bintang"
        width={390}
        height={379}
        className="absolute top-0 md:hidden"
      />
      <Image
        src={'/images/global-error/jalan-mobile.png'}
        alt="Jalan-mobile"
        width={390}
        height={426}
        className="absolute bottom-0 left-0 h-auto w-full overflow-hidden object-cover sm:-bottom-40 md:hidden"
      />
      <Image
        src={'/images/global-error/semaksemak-kanan-mobile.png'}
        alt="Semak-semak kanan"
        width={174}
        height={508}
        className="absolute bottom-0 right-0 md:hidden"
      />
      <Image
        src={'/images/global-error/semaksemak-kiri-mobile.png'}
        alt="Semak-semak kiri"
        width={279}
        height={521}
        className="absolute bottom-0 left-0 md:hidden"
      />
      <Image
        src={'/images/global-error/awan-mobile.png'}
        alt="Awan-mobile"
        width={379}
        height={106}
        className="absolute right-0 top-0 md:hidden"
      />
      <div className="pointer-events-none absolute inset-0 z-20 bg-[rgb(15,14,14)] bg-opacity-50" />
      <div className="absolute left-1/2 top-[30%] z-30 w-[350px] -translate-x-1/2 md:w-[450px] lg:top-[23%] lg:w-[500px]">
        <Image
          src={'/images/global-error/500-dekstop.png'}
          alt="500-error"
          width={650}
          height={372}
          className="w-full"
          data-aos="fade-down"
        />
      </div>
      <div className="absolute left-1/2 top-[57%] z-30 -translate-x-1/2 md:top-[55%] lg:top-[58%] xl:top-[57%] 2xl:top-[52%]">
        <p
          className="font-Cinzel text-2xl font-bold text-purple-100 md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Whoops...
        </p>
      </div>
      <div className="absolute left-1/2 top-[61%] z-30 -translate-x-1/2 md:top-[59%] md:text-xl lg:top-[61%] xl:top-[62%] 2xl:top-[57%]">
        <p
          className="whitespace-nowrap text-center font-Lora text-base font-bold text-purple-100"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          It’s looks like something went wrong
        </p>
      </div>
      <div className="absolute left-1/2 top-[66%] z-30 -translate-x-1/2 md:top-[64%] lg:top-[66%] xl:top-[67%] 2xl:top-[63%]">
        <button
          className="whitespace-nowrap rounded-lg bg-[#658E78] px-4 py-2 text-center font-Lora text-base font-bold text-purple-100 md:px-8 md:py-4 md:text-xl"
          data-aos="zoom-in"
          data-aos-delay="400"
          onClick={() => router.push('/')}
        >
          Kembali ke Beranda
        </button>
      </div>
      <Image
        src={'/images/global-error/bintang-dekstop.png'}
        alt="Bintang"
        width={1224}
        height={386}
        className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block 2xl:hidden"
      />
      <Image
        src={'/images/global-error/jalan-dekstop.png'}
        alt="Jalan-dekstop"
        width={1440}
        height={351}
        className="absolute bottom-0 left-0 hidden h-auto w-full object-cover md:block md:h-[350px] lg:h-[240px] xl:h-[260px] 2xl:h-[351px]"
      />
      <Image
        src={'/images/global-error/awan-dekstop.png'}
        alt="Awan-dekstop"
        width={1440}
        height={190}
        className="absolute left-0 top-0 hidden h-auto w-full md:block"
      />
      <div className="absolute bottom-0 left-0 z-10 hidden w-[30vw] max-w-[300px] md:block md:w-[60vw] md:min-w-[300px] md:max-w-[600px] lg:w-[40vw] lg:max-w-[400px] xl:w-[45vw] xl:max-w-[430px] 2xl:w-[50vw] 2xl:max-w-[550px]">
        <div className="relative w-full" style={{ height: 'auto' }}>
          <Image
            src="/images/global-error/semaksemak-kiri-dekstop.png"
            alt="Semak semak kiri"
            width={584}
            height={966}
            className="object-cover object-left-bottom"
            priority
          />
        </div>
      </div>
      <div className="z-5 absolute bottom-0 right-0 hidden w-[40vw] max-w-[400px] md:block md:w-[90vw] md:max-w-[1200px] lg:w-[50vw] lg:max-w-[600px] xl:w-[60vw] xl:max-w-[700px] 2xl:w-[60vw] 2xl:max-w-[900px]">
        <div className="relative w-full" style={{ height: 'auto' }}>
          <Image
            src="/images/global-error/semaksemak-kanan-dekstop.png"
            alt="Semak semak kanan"
            width={959}
            height={908}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
