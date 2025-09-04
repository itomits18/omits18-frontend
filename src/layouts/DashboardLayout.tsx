'use client';

import useAuthStore from '@/app/store/useAuthStore';
import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  AlignJustify,
  BookOpen,
  ChartColumnIncreasing,
  ChevronLeft,
  CircleUserRound,
  LinkIcon,
  LogOut,
  LucideProps,
  NotepadText,
  Trophy,
  TvMinimalPlay,
  User,
  UsersRound,
} from 'lucide-react';
// import useAuthStore from '@/app/store/useAuthStore';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

type LucideIconType = React.ComponentType<LucideProps>;

type SidebarType = {
  title: string;
  link: string;
  icon: LucideIconType;
}[];

type UserNavigation = {
  navigation: SidebarType;
};

type AdminNavigation = {
  navigation: SidebarType;
  registrasi: SidebarType;
};

type NavigationType = UserNavigation | AdminNavigation;

const USER = {
  navigation: [
    {
      title: 'Profile',
      link: '/dashboard/profile',
      icon: <User size={24} className="text-additions-brown-200" />,
    },
    {
      title: 'Kompetisi',
      link: '/dashboard/kompetisi',
      icon: <BookOpen size={24} className="text-additions-brown-200" />,
    },
    {
      title: 'OMITS Class',
      link: '/dashboard/omits-class',
      icon: <TvMinimalPlay size={24} className="text-additions-brown-200" />,
    },
  ],
};

const ADMIN = {
  navigation: [
    {
      title: 'Insight',
      link: '/admin/insight',
      icon: (
        <ChartColumnIncreasing size={24} className="text-additions-brown-200" />
      ),
    },
    {
      title: 'OMITS',
      link: '/admin/omits',
      icon: <BookOpen size={24} className="text-additions-brown-200" />,
    },
    {
      title: 'MISSION',
      link: '/admin/mission',
      icon: <Trophy size={24} className="text-additions-brown-200" />,
    },
    {
      title: 'OMITS Class',
      link: '/admin/omits-class',
      icon: <TvMinimalPlay size={24} className="text-additions-brown-200" />,
    },
  ],
  registrasi: [
    {
      title: 'Registrasi Penyisihan',
      link: '/registrasi/penyisihan',
      icon: <NotepadText size={24} className="text-additions-brown-200" />,
    },
    {
      title: 'Peserta Penyisihan',
      link: '/admin/registrasi-penyisihan',
      icon: <UsersRound size={24} className="text-additions-brown-200" />,
    },
    {
      title: 'Shorten Link',
      link: '/admin/shorten-link',
      icon: <LinkIcon size={24} className="text-additions-brown-200" />,
    },
  ],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const { logout, user } = useAuthStore();
  const isDesktoplg = useMediaQuery({ query: '(max-width: 1024px)' });

  const handleClickNav = () => {
    setOpen((pre) => !pre);
    if (!isDesktoplg) {
      if (!open) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    }
  };

  useEffect(() => {
    document.body.classList.remove('overflow-hidden');
  }, [path]);

  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-linear-to-b from-[#EEE2DF] via-[#CFEBD1] via-50% to-[#658E78]">
      <Image
        src="/images/dashboard/layout/assets-bl.png"
        width={930}
        height={614}
        alt="assets images"
        className="absolute bottom-0 left-0 w-[30%]"
      />
      <Image
        src="/images/dashboard/layout/assets-br.png"
        width={930}
        height={614}
        alt="assets images"
        className="absolute right-0 bottom-0 w-[30%]"
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

      {/* mobile */}
      <div className="flex w-full items-center px-8 py-6 lg:hidden">
        <AlignJustify
          className="text-white-main cursor-pointer"
          onClick={handleClickNav}
        />

        <Image
          src="/images/logo-png.png"
          width={193}
          height={186}
          alt="assets images"
          className="absolute inset-x-0 top-4 mx-auto w-[12%] md:w-[8%]"
        />
      </div>

      {/* desktop */}
      <div className="z-20 flex px-8 py-6 lg:space-x-8 lg:px-0 lg:py-10 xl:space-x-10 xl:px-16">
        <div
          className={cn(
            'bg-black-main/30 absolute top-0 z-52 min-h-screen w-full transition-all duration-200 lg:hidden',
            open ? 'block opacity-100' : 'hidden opacity-0',
          )}
          onClick={handleClickNav}
        ></div>
        {/* sidebar */}
        <div
          className={cn(
            'relative h-fit flex-shrink-0 flex-col items-center rounded-xl bg-[#FFFDF0] lg:flex lg:min-w-[300px] lg:px-8 lg:py-14 xl:min-w-fit',
            'top-0 left-0 z-50 min-h-screen px-6 py-12 max-lg:absolute max-md:z-[53] lg:flex',
            'max-lg:scrollbar-hide transition-all duration-200 max-lg:max-h-screen max-lg:overflow-y-scroll',
            open ? 'max-lg:left-0' : 'max-lg:-left-96',
          )}
        >
          <div className="w-full space-y-5 py-6">
            <Image
              src="/images/logo-png.png"
              width={193}
              height={186}
              alt="assets images"
              className="mx-auto w-[50%] max-md:w-[40%]"
            />

            <div className="bg-additions-brown-100 absolute top-3 right-5 rounded-full p-2 shadow-md lg:hidden">
              <ChevronLeft
                className="text-[#FFFDF0]"
                onClick={handleClickNav}
              />
            </div>

            <div className="flex max-w-[280px] space-x-4">
              <CircleUserRound size={40} />

              <div className="">
                <Typography
                  variant="t"
                  weight="bold"
                  className="text-additions-brown-100"
                >
                  {user?.name}
                </Typography>
                <Typography
                  variant="bs"
                  weight="medium"
                  className="break-words text-[#D19891]"
                >
                  {user?.email}
                </Typography>
              </div>
            </div>
          </div>

          <div className="divide-y divide-pink-100 border-y border-y-pink-100">
            {Object.keys(path.startsWith('/dashboard') ? USER : ADMIN).map(
              (nav, i) => (
                <div key={i} className="flex w-full flex-col space-y-3 py-6">
                  {(path.startsWith('/dashboard') ? USER : ADMIN)[
                    nav as keyof NavigationType
                  ].map((link, k) => (
                    <Link key={k} href={link.link} className="">
                      <div
                        className={cn(
                          'flex w-[250px] cursor-pointer items-center space-x-2 rounded-lg px-4 py-4 transition-all duration-200 hover:bg-[#F9DDD8]',
                          path.startsWith(link.link) && 'bg-[#F9DDD8]',
                        )}
                      >
                        {link.icon}
                        <Typography
                          variant="p"
                          weight="medium"
                          className="text-additions-brown-200"
                        >
                          {link.title}
                        </Typography>
                      </div>
                    </Link>
                  ))}
                </div>
              ),
            )}
          </div>

          <div className="w-full py-6">
            <Button
              className="bg-additions-brown-200 w-full font-semibold"
              size="lg"
              onClick={logout}
            >
              <LogOut size={32} className="h-6 w-6" />
              <span>Keluar</span>
            </Button>
          </div>
        </div>

        <div className="z-50 w-0 flex-1 overflow-hidden lg:pr-8 xl:pr-0">
          {children}
        </div>
      </div>
    </section>
  );
}
