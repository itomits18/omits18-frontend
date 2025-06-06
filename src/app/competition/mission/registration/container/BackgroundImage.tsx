'use client';

import Image from 'next/image';

export default function BackgroundImage() {
  return (
    <>
      <Image
        src={'/images/competition/mission/bg-mission-mobile.png'}
        alt="Mission Background Mobile"
        fill
        priority
        className="absolute object-cover md:hidden"
      />
      <Image
        src={'/images/competition/mission/cloud-mission-desktop.png'}
        alt="Awan"
        width={1440}
        height={536}
        className="absolute left-0 right-0 top-0 hidden w-full object-cover md:block"
      />
      <Image
        src={'/images/competition/mission/batu-mission-dekstop.png'}
        alt="Batu Desktop"
        width={1440}
        height={764}
        className="absolute bottom-0 hidden w-full object-cover md:block"
      />
      <Image
        src={'/images/competition/mission/flower-mission-dekstop.png'}
        alt="FLower"
        width={1377}
        height={376}
        className="absolute bottom-0 hidden w-full object-cover md:block"
      />
    </>
  );
}
