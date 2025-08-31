'use client';

import { Subject, subjects } from '@/contents/OmitsClass';
import Image from 'next/image';
import { useState } from 'react';
import ContentDisplay from './container/ContentDisplay';
import ControlSidebar from './container/ControlSidebar';

export default function OmitsClass() {
  const [activeSubject, setActiveSubject] = useState<Subject>(subjects[0]);
  return (
    <section className="relative min-h-[115vh] w-full overflow-hidden bg-gradient-to-b from-[#658E78] from-[0%] to-[#C4C7C6] to-[50%] md:min-h-screen xl:min-h-[117vh] 2xl:min-h-[130vh]">
      <Image
        src={'/images/competition/omits-class/background-mobile.png'}
        alt="Background"
        width={780}
        height={1491}
        className="absolute md:hidden"
      />
      <Image
        src={'/images/competition/omits-class/background-left-desktop.png'}
        alt="Background"
        width={1252}
        height={1556}
        className="absolute top-[30%] left-0 hidden w-[50%] md:block lg:top-5 lg:w-[42%] 2xl:w-[35%]"
      />
      <Image
        src={'/images/competition/omits-class/background-right-desktop.png'}
        alt="Background"
        width={1182}
        height={1618}
        className="absolute top-[30%] right-0 hidden w-[50%] md:block lg:top-5 lg:w-[42%] 2xl:w-[35%]"
      />
      <Image
        src={'/images/competition/omits-class/ground-desktop.png'}
        alt="Ground"
        width={2880}
        height={1370}
        className="absolute bottom-0 hidden md:block"
      />
      <Image
        src={'/images/competition/omits-class/ground-mobile.png'}
        alt="Ground"
        width={780}
        height={488}
        className="absolute bottom-0 md:hidden"
      />
      <Image
        src={'/images/competition/omits-class/feather-mobile.png'}
        alt="feather"
        width={778}
        height={634}
        className="absolute top-20 md:hidden"
      />
      <Image
        src={'/images/competition/omits-class/feather-desktop.png'}
        alt="feather"
        width={2820}
        height={262}
        className="absolute top-40 hidden md:block lg:top-30"
      />
      <div className="flex min-h-screen items-center justify-center p-4 md:p-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-stretch 2xl:max-w-[90vw]">
          <div className="w-full lg:w-2/3">
            <div className="flex h-full flex-col overflow-hidden rounded-md bg-white shadow-xl backdrop-blur-sm">
              <ContentDisplay subject={activeSubject} />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <ControlSidebar
              activeSubject={activeSubject}
              setActiveSubject={setActiveSubject}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
