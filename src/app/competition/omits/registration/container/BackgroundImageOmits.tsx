'use client';

import Image from 'next/image';

export default function BackgroundImage() {
  return (
    <>
      <Image
        src={'/images/competition/omits/bg-omits-mobile.png'}
        alt="Mission Background Mobile"
        fill
        priority
        className="absolute object-cover md:hidden"
      />
      <Image
        src={'/images/competition/omits/cloud-omits-desktop.png'}
        alt="Awan"
        width={1440}
        height={536}
        className="absolute left-0 right-0 top-0 hidden w-full object-cover md:block"
      />
      <Image
        src={'/images/competition/omits/grass-omits-desktop.png'}
        alt="grass desktop"
        width={1415}
        height={719}
        className="absolute bottom-0 right-0 hidden w-full object-cover md:block xl:w-[1350px]"
      />
    </>
  );
}
