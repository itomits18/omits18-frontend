'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ModalAnn() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogContent
        className={cn(
          'max-h-screen max-w-[95%] overflow-auto rounded-2xl max-md:h-[90%] md:h-[70%] md:max-w-[80%] xl:h-[80%] 2xl:h-[90%]',
          'bg-linear-to-b from-[#EEE2DF] via-[#CFEBD1] via-50% to-[#658E78]',
          'flex items-center justify-center border-none',
        )}
      >
        <VisuallyHidden asChild>
          <DialogTitle>Modal Title</DialogTitle>
        </VisuallyHidden>

        {/* Background assets */}
        <Image
          src="/images/dashboard/layout/assets-bl.png"
          width={930}
          height={614}
          alt="assets images"
          className="absolute bottom-0 left-0 w-[30%] max-md:w-[50%]"
        />
        <Image
          src="/images/dashboard/layout/assets-br.png"
          width={930}
          height={614}
          alt="assets images"
          className="absolute right-0 bottom-0 w-[30%] max-md:w-[50%]"
        />
        <Image
          src="/images/dashboard/layout/assets-tr.png"
          width={286}
          height={144}
          alt="assets images"
          className="absolute top-52 right-0 w-[15%]"
          quality={100}
        />
        <Image
          src="/images/dashboard/layout/assets-tl.png"
          width={286}
          height={144}
          alt="assets images"
          className="absolute top-72 left-0 w-[15%]"
        />

        {/* Content */}
        <div className="relative z-30 mb-20 flex flex-col items-center justify-center space-y-4">
          <div className="space-y-2 text-center">
            <Typography
              variant="h4"
              weight="medium"
              className="text-green-200 max-md:text-4xl xl:!text-[60px] xl:!leading-[80px]"
              style={{ textShadow: '-3px 3px 0px rgba(255,255,255,0.25)' }}
            >
              <span className="font-OZWizard font-bold">P</span>engumuman{' '}
              <span className="font-OZWizard font-bold">R</span>esmi{' '}
              <span className="font-OZWizard font-bold">OMITS 18th</span>
            </Typography>

            <Typography
              variant="t"
              weight="medium"
              className="mx-auto w-[75%] text-green-100 max-md:w-full max-md:text-base md:!text-[28px] md:!leading-[32px]"
              style={{ textShadow: '-3px 3px 0px rgba(255,255,255,0.25)' }}
            >
              Pengumuman terbaru sudah keluar!, cek informasi seputar hasil
              penyisihan OMITS 18th.
            </Typography>
          </div>

          <Button
            variant="green"
            size="lg"
            className="mx-auto border-0 shadow-none outline-none focus:ring-0 focus:outline-none"
            asChild
          >
            <Link href="/pengumuman">
              Lihat Pengumuman
              <ArrowRight size={32} />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
