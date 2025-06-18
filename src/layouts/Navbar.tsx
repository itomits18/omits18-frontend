'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { AlignJustify, ChevronDown, XCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [collapse, setCollapse] = useState(false);

  return (
    <section
      className={cn(
        'fixed left-0 right-0 z-50 flex items-center justify-between bg-[#ADB5BD]/20',
        'rounded-2xl py-5 max-lg:rounded-xl max-lg:px-6 md:px-12 lg:px-8 xl:px-24',
        'my-8 border border-black-100 backdrop-blur-sm max-md:mx-8 md:mx-12',
        'transition-all duration-200',
        open && 'max-md:m-0',
      )}
    >
      <div className="absolute left-0 h-full w-full overflow-hidden rounded-2xl max-lg:rounded-xl">
        <Image
          src="/images/navbar/cloud-1.png"
          width={618}
          height={220}
          alt="assets"
          className="absolute bottom-0 left-0 w-[80%] md:w-[40%] md:opacity-60 xl:w-[30%] 2xl:w-[20%]"
        />
        <Image
          src="/images/navbar/cloud-2.png"
          width={618}
          height={220}
          alt="assets"
          className="absolute right-0 top-0 w-[80%] opacity-60 max-md:hidden md:w-[40%] lg:w-[20%] xl:w-[15%]"
        />
      </div>

      <Image
        src="/images/logo-png.png"
        width={193}
        height={186}
        alt="assets"
        className="relative z-20 w-[20%] md:w-[10%] lg:w-[5%]"
      />

      <div
        className={cn(
          'text-purple-30 flex items-center space-x-8 max-lg:flex-col max-lg:items-start max-lg:space-x-0',
          'max-lg:bg-neutral-10 left-0 top-0 z-[51] max-lg:absolute max-lg:min-h-screen max-lg:w-full max-lg:space-y-6 max-lg:p-8 max-lg:py-12 md:space-y-8 md:px-8 lg:space-y-0',
          'transition-all duration-200 max-lg:h-screen max-lg:overflow-y-scroll max-md:bg-neutral-main',
          open ? 'left-0' : '-left-96 md:-left-[1000px]',
        )}
      >
        <XCircle
          size={32}
          className={cn(
            'absolute right-5 top-5 cursor-pointer text-black-200 transition-all duration-200 max-md:hover:text-black-100 max-[350px]:w-6 lg:hidden',
            open ? 'block' : 'hidden',
          )}
          onClick={() => setOpen(false)}
        />

        <div className="w-full">
          <Image
            src="/images/logo-png.png"
            width={469}
            height={583}
            alt="assets"
            className="mx-auto w-[40%] pb-4 max-[350px]:w-[50%] md:mb-12 md:w-[15%] lg:hidden"
          />
        </div>

        <div>
          <Typography
            variant="t"
            weight="semibold"
            className="cursor-pointer text-neutral-main transition-all duration-200 hover:text-blue-50 max-md:text-black-200 max-md:hover:text-black-100"
          >
            Tentang
          </Typography>
        </div>
        <Collapsible
          className="w-full"
          open={collapse}
          onOpenChange={setCollapse}
        >
          <CollapsibleTrigger className="w-full cursor-pointer">
            <div className="flex w-full items-center justify-between space-x-3">
              <Typography
                variant="t"
                weight="semibold"
                className="cursor-pointer text-neutral-main transition-all duration-200 hover:text-blue-50 max-md:text-black-200 max-md:hover:text-black-100"
              >
                Kompetisi
              </Typography>

              <ChevronDown
                className={cn(
                  'text-neutral-main transition-all duration-200 hover:text-blue-50 max-md:text-black-200',
                  !collapse ? 'rotate-0' : 'rotate-180',
                )}
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 rounded-xl px-4 pt-4 transition-all duration-200 lg:absolute lg:top-28 lg:space-y-3 lg:border lg:border-black-100 lg:bg-[#ADB5BD]/20 lg:p-4 lg:px-6 xl:top-32">
            <div>
              <Typography
                variant="t"
                weight="semibold"
                className="cursor-pointer text-neutral-main transition-all duration-200 hover:text-blue-50 max-md:text-black-200 max-md:hover:text-black-100"
              >
                OMITS
              </Typography>
            </div>
            <div>
              <Typography
                variant="t"
                weight="semibold"
                className="cursor-pointer text-neutral-main transition-all duration-200 hover:text-blue-50 max-md:text-black-200 max-md:hover:text-black-100"
              >
                MISSION
              </Typography>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div>
          <Typography
            variant="t"
            weight="semibold"
            className="cursor-pointer text-neutral-main transition-all duration-200 hover:text-blue-50 max-md:text-black-200 max-md:hover:text-black-100"
          >
            Merchandise
          </Typography>
        </div>

        <div className="w-full space-y-4 md:mt-12 lg:hidden">
          <Button
            size="lg"
            className="w-full border bg-transparent text-black-200"
          >
            <span className="text-violet-30">Sign In</span>
          </Button>
          <Button asChild size="lg" variant="blue" className="w-full">
            <Link href={'/login'}>Login</Link>
          </Button>
        </div>
      </div>

      <AlignJustify
        className="relative z-30 cursor-pointer text-neutral-main max-lg:block lg:hidden"
        onClick={() => setOpen((pre) => !pre)}
      />

      <div className="relative z-20 flex items-center justify-center space-x-4 max-lg:hidden xl:space-x-6">
        <Typography
          variant="t"
          weight="semibold"
          className="cursor-pointer text-neutral-main transition-all duration-200 hover:text-blue-50 max-md:text-black-200 max-md:hover:text-black-100"
        >
          Sign Up
        </Typography>
        <Button asChild variant="blue" size="lg" className="px-12 py-3">
          <Link href={'/login'}>
            <span className="text-xl">Login</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
