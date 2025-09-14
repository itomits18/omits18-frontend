'use client';
import Typography from '@/components/Typography';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('2025-10-05T00:00:00');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = { Hari: 0, Jam: 0, Menit: 0, Detik: 0 };

    if (difference > 0) {
      timeLeft = {
        Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Menit: Math.floor((difference / 1000 / 60) % 60),
        Detik: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="inline-block rounded-xl border border-white bg-[#F9DDD8]/50 p-4 shadow-lg backdrop-blur-xl md:px-6 md:py-4">
      <div className="flex justify-center space-x-3 md:space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center space-y-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#435980] shadow-md md:h-20 md:w-20">
              <Typography
                font="CinzelDecorative"
                variant="h5"
                weight="black"
                className="text-pink-100 max-md:text-xl"
              >
                {String(value).padStart(2, '0')}
              </Typography>
            </div>

            <Typography
              variant="p"
              font="Lora"
              weight="semibold"
              className="text-additions-brown-200"
            >
              {unit}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Timeline() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-end justify-center overflow-hidden bg-gradient-to-b from-[#E5DBA6] via-purple-100 to-pink-300 xl:min-h-[130vh] 2xl:min-h-[150vh]">
      <Image
        src="/images/landing/timeline/matahari-mobile.png"
        width={524}
        height={524}
        alt="Sun"
        className="absolute bottom-20 z-5 w-[65%] md:hidden"
      />
      <Image
        src="/images/landing/timeline/matahari-desktop.png"
        width={956}
        height={896}
        alt="Sun"
        className="absolute bottom-10 z-5 hidden md:block md:w-[50%] xl:w-[30%]"
      />
      <Image
        src="/images/landing/timeline/awan-mobile.png"
        width={780}
        height={910}
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="awan"
        className="absolute top-0 z-3 block md:hidden"
      />
      <Image
        src="/images/landing/timeline/awan-desktop.png"
        width={2880}
        height={1358}
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="cloud"
        className="absolute top-0 left-0 hidden w-full md:block 2xl:h-[75%]"
      />
      <Image
        src="/images/landing/timeline/batu-desktop.png"
        width={2880}
        height={1371}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="batu"
        className="absolute right-0 bottom-[23%] z-10 md:bottom-20"
      />
      <div className="absolute bottom-[13%] z-10 hidden h-30 w-full bg-gradient-to-t from-pink-400 to-transparent md:block xl:bottom-[22%]"></div>
      <Image
        src="/images/landing/timeline/pasir-gradient-mobile.png"
        width={780}
        height={584}
        alt="pasir"
        className="absolute bottom-10 z-10 block md:hidden"
      />
      <Image
        src="/images/landing/timeline/witch-desktop.png"
        width={2944}
        height={612}
        alt="witch"
        className="absolute right-0 bottom-20 z-10 hidden md:block"
      />
      <Image
        src="/images/landing/timeline/pasir-pink-mobile.png"
        width={780}
        height={518}
        alt="pasir"
        className="absolute bottom-0 z-10 block md:hidden"
      />
      <Image
        src="/images/landing/timeline/pasir-pink-desktop.png"
        width={2906}
        height={542}
        alt="Pasir Pink"
        className="absolute bottom-0 left-0 z-10 hidden w-[130%] max-w-none md:block xl:w-[100%]"
      />

      <Image
        src="/images/landing/timeline/tiang-desktop.png"
        width={520}
        height={1260}
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="Tiang"
        className="absolute bottom-5 -left-5 z-10 w-[32%] md:left-5 md:w-[17%]"
      />
      <Image
        src="/images/landing/timeline/buah-desktop.png"
        width={738}
        height={766}
        alt="buah"
        className="absolute -right-5 bottom-10 z-10 w-[42%] md:right-0 md:w-[23%]"
      />
      {/* <div className="absolute top-0 z-20 flex w-full max-w-xs justify-center md:max-w-2xl lg:max-w-3xl">
        {isClient && <CountdownTimer />}
      </div> */}
    </section>
  );
}
