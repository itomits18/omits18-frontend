'use client';
import Typography from '@/components/Typography';
import Image from 'next/image';
import { useState } from 'react';

const cardsData = [
  {
    id: 1,
    level: 'SD',
    imageSrc: '/images/landing/testimonial/sd-testimonial.png',
  },
  {
    id: 2,
    level: 'SMA',
    imageSrc: '/images/landing/testimonial/sma-testimonial.png',
  },
  {
    id: 3,
    level: 'SMP',
    imageSrc: '/images/landing/testimonial/smp-testimonial.png',
  },
];
export default function Testimonial() {
  const [selectedId, setSelectedId] = useState(2);
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-purple-900 to-yellow-300 xl:min-h-[75vh]">
      <Typography
        variant="h3"
        weight="bold"
        font="CinzelDecorative"
        className="mx-auto max-w-70 text-center text-yellow-100 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.5)] [-webkit-text-stroke-color:theme(colors.yellow.300)] [-webkit-text-stroke-width:1px] max-xl:pt-30 max-md:pt-15 max-md:text-2xl md:max-w-xl xl:max-w-5xl"
      >
        Apa kata sang juara omits?
      </Typography>
      <Image
        src="/images/landing/testimonial/mashroom-desktop.png"
        width={770}
        height={704}
        alt="mashroom"
        className="absolute -top-10 left-0 z-10 w-[30%] md:-top-15 xl:-top-35 xl:w-[20%] 2xl:-top-50"
      />
      <Image
        src="/images/landing/testimonial/ranting-desktop.png"
        width={370}
        height={942}
        alt="ranting"
        className="absolute -top-5 right-0 z-10 w-[15%] md:-top-10 xl:-top-15 xl:w-[10%] 2xl:-top-25"
      />
      <Image
        src="/images/landing/testimonial/asset-left.png"
        width={408}
        height={796}
        alt="asset"
        className="absolute -bottom-5 left-0 z-10 w-[25%] md:-bottom-30 md:w-[16%] xl:-bottom-50 xl:w-[12%] 2xl:-bottom-75"
      />
      <Image
        src="/images/landing/testimonial/asset-right.png"
        width={408}
        height={796}
        alt="asset"
        className="absolute right-0 -bottom-5 z-10 w-[25%] md:-bottom-30 md:w-[16%] xl:-bottom-50 xl:w-[12%] 2xl:-bottom-75"
      />
      <div className="mt-10 flex w-full items-end justify-center gap-4 py-10 md:mt-20 md:gap-8">
        {cardsData.map((card) => (
          <button
            key={card.id}
            onClick={() => setSelectedId(card.id)}
            className={`relative flex w-1/4 max-w-[400px] flex-col items-center justify-end rounded-xl pt-5 text-white shadow-lg transition-all duration-300 ease-in-out ${
              selectedId === card.id
                ? 'z-10 -translate-y-8 scale-110 bg-gray-700 shadow-2xl'
                : 'bg-gray-800/50 hover:-translate-y-2 hover:bg-gray-800/80'
            } `}
            style={{
              order: card.level === 'SMA' ? 2 : card.level === 'SD' ? 1 : 3,
            }}
          >
            <div className="relative h-24 w-24 md:h-50 md:w-40">
              <Image
                src={card.imageSrc}
                alt={`Ilustrasi untuk ${card.level}`}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-3 w-full rounded-xl bg-gray-800/50 p-1 shadow-lg">
              <Typography variant="h6" weight="bold">
                {card.level}
              </Typography>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
