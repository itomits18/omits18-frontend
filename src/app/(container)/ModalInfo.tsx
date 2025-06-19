'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { DialogPortal } from '@radix-ui/react-dialog';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export default function ModalInfo() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogPortal>
        <DialogOverlay className="bg-black-200/30 fixed inset-0 z-20 backdrop-blur-sm" />
        <DialogContent
          className={cn(
            'max-h-screen max-w-[95%] overflow-auto rounded-2xl max-md:h-[90%] md:h-[70%] md:max-w-[80%] xl:h-[80] 2xl:h-[90%]',
            'bg-gradient-to-b from-[#D0E4EF] via-[#8FBFDA] via-30% to-[#D9BBC2]',
            'flex items-center justify-center border-none',
          )}
        >
          <VisuallyHidden asChild>
            <DialogTitle>Modal Title</DialogTitle>
          </VisuallyHidden>

          <div className="z-20">
            <Image
              src="/images/landing/modal/batu-kanan.png"
              width={980}
              height={722}
              alt="assets"
              className="absolute right-0 bottom-0 max-lg:hidden lg:w-[30%]"
            />
            <Image
              src="/images/landing/modal/batu-kiri.png"
              width={980}
              height={722}
              alt="assets"
              className="absolute bottom-0 left-0 max-lg:hidden lg:w-[30%]"
            />
            <Image
              src="/images/landing/modal/batu-kanan-mobile.png"
              width={304}
              height={322}
              alt="assets"
              className="absolute right-0 bottom-0 w-[40%] lg:hidden"
            />
            <Image
              src="/images/landing/modal/batu-kiri-mobile.png"
              width={334}
              height={484}
              alt="assets"
              className="absolute bottom-0 left-0 w-[40%] lg:hidden"
            />
          </div>

          {/* awan */}
          <Image
            src="/images/landing/modal/awan.png"
            width={2496}
            height={604}
            alt="assets"
            className="absolute bottom-0 z-10 w-full max-lg:hidden"
          />
          <Image
            src="/images/landing/modal/awan-mobile.png"
            width={684}
            height={424}
            alt="assets"
            className="absolute bottom-0 z-10 w-full lg:hidden"
          />
          {/* bola awan */}
          <Image
            src="/images/landing/modal/bola.png"
            width={968}
            height={478}
            alt="assets"
            className="absolute bottom-28 z-10 mx-auto w-full max-[350px]:bottom-24 max-md:w-[90%] md:w-[75%] lg:bottom-16 lg:w-[40%] xl:bottom-24"
          />

          <Image
            src="/images/landing/modal/castle.png"
            width={701}
            height={562}
            alt="assets"
            className="absolute bottom-5 left-0 z-[4] opacity-60 mix-blend-luminosity max-md:-left-20 md:-left-20 md:w-[70%] lg:w-[30%]"
          />

          <Image
            src="/images/landing/modal/pagar.png"
            width={296}
            height={972}
            alt="assets"
            className="absolute right-0 bottom-0 z-[5] max-lg:hidden lg:w-[15%]"
          />
          <Image
            src="/images/landing/modal/bola-atas.png"
            width={634}
            height={458}
            alt="assets"
            className="absolute top-0 z-[4] mx-auto mix-blend-overlay max-lg:hidden lg:w-[20%]"
          />
          <Image
            src="/images/landing/modal/bola-atas-mobile.png"
            width={634}
            height={458}
            alt="assets"
            className="absolute top-0 right-0 z-[4] mx-auto opacity-80 mix-blend-overlay max-lg:w-[40%] md:w-[30%] lg:hidden"
          />
          <Image
            src="/images/landing/modal/awan-lt.png"
            width={219}
            height={98}
            alt="assets"
            className="absolute top-0 left-0 max-md:w-[50%] lg:w-[20%]"
          />
          <Image
            src="/images/landing/modal/awan-rt.png"
            width={260}
            height={98}
            alt="assets"
            className="absolute top-32 right-72 z-[2] max-md:top-52 max-md:right-10 max-md:w-[30%] md:right-40 md:w-[20%] lg:w-[10%] 2xl:right-72"
          />

          <div className="relative z-30 mb-20 flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2 text-center">
              <Typography
                variant="h3"
                weight="medium"
                className="text-neutral-main max-md:text-4xl"
                style={{
                  textShadow: '-3px 3px 0px rgba(0,0,0,0.25)',
                }}
              >
                <span className="font-OZWizard font-bold">J</span>
                ela
                <span className="font-OZWizard font-bold">j</span>
                ahi <span className="font-OZWizard font-bold">L</span>an
                <span className="font-OZWizard font-bold">gk</span>a
                <span className="font-OZWizard font-bold">h</span>{' '}
                <span className="font-OZWizard font-bold">B</span>a
                <span className="font-OZWizard font-bold">r</span>umu
              </Typography>

              <Typography
                variant="h6"
                weight="medium"
                className="text-neutral-main mx-auto w-[80%] max-md:w-full max-md:text-base"
                style={{
                  textShadow: '-3px 3px 2px rgba(0,0,0,0.15)',
                }}
              >
                Waktunya buka lembar baru! Ayo jelajahi perjalanan barumu bareng
                OMITS 18th dan raih prestasi terbaikmu.
              </Typography>
            </div>

            <Button variant="purple" size="lg" className="mx-auto">
              Daftarkan Dirimu
              <ArrowRight size={32} />
            </Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
