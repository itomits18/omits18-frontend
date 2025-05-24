import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function AuthBg() {
  return (
    <>
      <Image
        src="/images/auth/wind-mobile.png"
        width={680}
        height={314}
        alt="castle"
        className="absolute right-0 top-0 w-full lg:opacity-30"
      />
      <Image
        src="/images/auth/wind.png"
        width={1786}
        height={502}
        alt="castle"
        className="absolute inset-x-0 top-0 mx-auto w-[70%] bg-cover max-lg:hidden"
      />
      <section className="relative min-h-screen max-w-full overflow-hidden bg-[url('/images/auth/background-mobile.png')] bg-cover lg:min-h-[130vh] lg:bg-[url('/images/auth/background-desktop.png')] 2xl:min-h-[150vh]">
        <Image
          src="/images/auth/flower.png"
          width={272}
          height={672}
          alt="flower"
          className="absolute bottom-0 right-0 z-30 max-md:hidden md:w-[15%] lg:w-[10%] xl:w-[7%]"
        />
        <Image
          src="/images/auth/portal.png"
          width={1680}
          height={1786}
          alt="portal"
          className={cn(
            'absolute z-20 w-[70%] max-lg:top-44 max-[350px]:top-20 md:w-[50%]',
            'lg:bottom-0 lg:left-0 lg:w-[55%] xl:w-[50%] 2xl:w-[45%]',
          )}
        />
        <Image
          src="/images/auth/batu-magic-kiri.png"
          width={428}
          height={378}
          alt="flower"
          className="absolute bottom-0 left-0 w-[50%] md:w-[40%] lg:hidden"
        />
        <Image
          src="/images/auth/magic-pink.png"
          width={302}
          height={416}
          alt="flower"
          className="max-[350px]: absolute bottom-0 right-0 z-30 hidden w-[40%] md:hidden"
        />
        <Image
          src="/images/auth/batu-kanan-mobile.png"
          width={302}
          height={416}
          alt="flower"
          className="absolute bottom-32 right-0 z-20 w-[50%] max-[350px]:bottom-12 max-[350px]:w-[40%] md:w-[40%] lg:hidden"
        />
        <Image
          src="/images/auth/castle.png"
          width={701}
          height={562}
          alt="castle"
          className={cn(
            'absolute max-lg:hidden',
            'left-36 top-24 w-[25%] max-[350px]:left-32 max-[350px]:top-20',
            'lg:left-60 lg:top-8 lg:w-[30%] xl:top-3 xl:w-[35%] 2xl:left-72 2xl:top-5 2xl:w-[30%]',
          )}
        />
        <Image
          src="/images/auth/witch.png"
          width={352}
          height={380}
          alt="castle"
          className="absolute right-10 top-20 w-[10%] xl:right-20 xl:top-32 xl:w-[8%]"
        />
        <Image
          src="/images/auth/batu.png"
          width={526}
          height={444}
          alt="castle"
          className={cn(
            'absolute right-5 top-52 w-[40%] max-[350px]:right-0 max-[350px]:top-40 md:right-32 md:top-80 md:w-[30%]',
            'lg:left-[450px] lg:top-80 lg:w-[25%] xl:left-[500px] xl:top-96 2xl:left-[550px] 2xl:top-[450px] 2xl:w-[20%]',
          )}
        />
      </section>
    </>
  );
}
