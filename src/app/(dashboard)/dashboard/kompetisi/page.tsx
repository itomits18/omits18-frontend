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
            <div className="relative transform overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/competition/dashboard/bg-omits-class-desktop.png"
                alt="OMITS Class"
                width={244}
                height={460}
                className="z-0 object-cover"
              />
              <div className="absolute inset-0 z-10 mt-12 flex flex-col items-center p-4">
                <Typography
                  variant="h5"
                  font="CinzelDecorative"
                  weight="bold"
                  className="text-shadow mb-2 text-center text-[#EEE2DF]"
                >
                  OMITS ClASS
                </Typography>
                <Link
                  href="/omits-class"
                  className="rounded-md bg-[#565098] px-4 py-2 font-Lora text-sm font-semibold text-[#EEE2DF] transition duration-300 ease-in-out hover:bg-[#453e8a]"
                >
                  Lihat detail
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative transform overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/competition/dashboard/bg-omits.png"
                alt="OMITS"
                width={473}
                height={212}
                className="z-0 object-cover"
              />
              <div className="absolute inset-0 z-10 ml-3 mt-3 flex flex-col items-start p-4 max-md:mt-0">
                <Typography
                  variant="h5"
                  font="CinzelDecorative"
                  weight="bold"
                  className="text-shadow text-[#EEE2DF] max-md:text-xl md:mb-2"
                >
                  OMITS
                </Typography>
                <Link
                  href="/omits"
                  className="rounded-md bg-green-400 px-2 py-1 font-Lora text-xs text-[#EEE2DF] transition duration-300 ease-in-out hover:bg-green-600 md:px-4 md:py-2 md:text-sm md:font-semibold"
                >
                  Lihat detail
                </Link>
              </div>
            </div>
            <div className="relative transform overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/competition/dashboard/bg-mission.png"
                alt="Mission"
                width={473}
                height={212}
                className="z-0 object-cover"
              />
              <div className="absolute inset-0 z-10 ml-3 mt-3 flex flex-col items-start p-4 max-md:mt-0">
                <Typography
                  variant="h5"
                  font="CinzelDecorative"
                  weight="bold"
                  className="text-shadow text-[#EEE2DF] max-md:text-xl md:mb-2"
                >
                  MISSION
                </Typography>
                <Link
                  href="/mission"
                  className="rounded-md bg-[#30669B] px-2 py-1 font-Lora text-xs font-semibold text-[#EEE2DF] transition duration-300 ease-in-out hover:bg-[#408cd8] md:px-4 md:py-2 md:text-sm"
                >
                  Lihat detail
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:hidden">
          <div className="relative transform overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/competition/dashboard/bg-omits-class-mobile.png"
              alt="OMITS Class Mobile"
              width={473}
              height={212}
              className="z-0 object-cover"
            />
            <div className="absolute inset-0 z-10 ml-3 mt-0 flex flex-col items-start p-4">
              <Typography
                variant="h5"
                font="CinzelDecorative"
                weight="bold"
                className="text-shadow text-[#EEE2DF] max-md:text-xl"
              >
                OMITS CLASS
              </Typography>
              <Link
                href="/omits-class"
                className="rounded-md bg-[#565098] px-2 py-1 font-Lora text-xs font-semibold text-[#EEE2DF] transition duration-300 ease-in-out hover:bg-[#453e8a]"
              >
                Lihat detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
