'use client';

import Typography from '@/components/Typography';
import { Check, X, XCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function page() {
  const [isRegistered, _setIsRegistered] = useState(false);
  return (
    <section className="flex w-full max-w-7xl flex-col items-center gap-8 rounded-xl bg-[#FFFDF0] p-6 md:mt-16 xl:mt-0">
      <div className="flex flex-col items-center gap-1">
        <div className="relative mb-2">
          {!isRegistered && (
            <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 max-md:hidden">
              <XCircle color="white" fill="black" size={24} />
            </div>
          )}
        </div>
        <Image
          src="/images/competition/dashboard/witch.png"
          alt="witch-logo"
          width={40}
          height={42}
        />
        <Typography
          variant="h6"
          font="OZWizard"
          className="text-center text-additions-brown-200"
        >
          Let&apos;s be part of
        </Typography>
        <Typography
          variant="h3"
          font="CinzelDecorative"
          weight="bold"
          className="text-center text-additions-brown-200 max-md:text-3xl"
        >
          Twisted Path
        </Typography>
      </div>
      <div className="h-8 text-center">
        {' '}
        {isRegistered ? (
          <div className="flex items-center justify-center gap-1">
            <Typography
              variant="p"
              weight="semibold"
              font="Lora"
              className="text-green-600"
            >
              Selamat datang di OMITS 18th. Kamu telah terdaftar sebagai Emerald
              Voyager!
            </Typography>
            <Check
              className="hidden rounded-xl bg-green-600 text-white md:block"
              size={24}
              strokeWidth={3}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center gap-1">
            <Typography
              variant="p"
              weight="semibold"
              font="Lora"
              className="text-red-600"
            >
              Kamu belum terdaftar sebagai Emerald Voyager!
            </Typography>
            <X
              className="hidden rounded-xl bg-red-600 text-white md:block"
              size={24}
              strokeWidth={3}
            />
          </div>
        )}
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center md:gap-8">
          <div className="hidden items-start justify-center md:flex">
            <Link
              href="/omits-class"
              className="transform rounded-2xl transition duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src="/images/competition/dashboard/omits-class.png"
                alt="OMITS Class"
                width={244}
                height={460}
                className="rounded-2xl"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="/omits"
              className="transform rounded-2xl transition duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src="/images/competition/dashboard/omits.png"
                alt="OMITS"
                width={473}
                height={212}
                className="rounded-2xl"
              />
            </Link>
            <Link
              href="/mission"
              className="transform rounded-2xl transition duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src="/images/competition/dashboard/mission.png"
                alt="Mission"
                width={473}
                height={212}
                className="rounded-2xl"
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:hidden">
          <Link
            href="/omits-class"
            className="transform rounded-2xl transition duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src="/images/competition/dashboard/omits-class-mobile.png"
              alt="OMITS Class Mobile"
              width={309}
              height={149}
              className="rounded-2xl"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
