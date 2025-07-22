import Typography from '@/components/Typography';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-blue-100 to-[#FFFFFF] xl:min-h-[110vh] 2xl:min-h-[130vh]">
      <Image
        src={'/images/competition/landing/omits/awan-desktop.png'}
        alt="Awan"
        width={2836}
        height={820}
        className="absolute top-[10%] right-0 left-0 hidden md:block"
      />
      <Image
        src={'/images/competition/landing/omits/awan-mobile.png'}
        alt="Awan"
        width={780}
        height={1020}
        className="absolute top-0 right-0 left-0 md:hidden"
      />
      <Image
        src={'/images/competition/landing/omits/gunung-desktop.png'}
        alt="gunung"
        width={1702}
        height={896}
        className="absolute right-0 hidden md:block xl:top-[30%] xl:w-[60%] 2xl:top-[27%]"
      />
      <Image
        src={'/images/competition/landing/omits/gunung-mobile.png'}
        alt="gunung"
        width={1702}
        height={896}
        className="absolute right-0 md:hidden"
      />
      <Image
        src={'/images/competition/landing/omits/taman-kanan.png'}
        alt="taman"
        width={1326}
        height={642}
        className="absolute right-0 hidden w-[48%] md:top-[71%] md:block lg:top-[47%] 2xl:w-[900px]"
      />
      <Image
        src={'/images/competition/landing/omits/taman-kanan-mobile.png'}
        alt="taman"
        width={454}
        height={325}
        className="absolute top-[50%] right-0 w-[60%] md:hidden"
      />
      <Image
        src={'/images/competition/landing/omits/taman-kiri.png'}
        alt="taman"
        width={1929}
        height={1200}
        className="absolute left-0 hidden w-[65%] md:top-[67%] md:block xl:top-[41%] 2xl:top-[35%]"
      />
      <Image
        src={'/images/competition/landing/omits/taman-kiri-mobile.png'}
        alt="taman"
        width={774}
        height={604}
        className="absolute bottom-0 left-0 md:hidden"
      />
      <Image
        src={'/images/competition/landing/omits/rumput-kanan.png'}
        alt="rumput kanan"
        width={1238}
        height={370}
        className="absolute right-0 bottom-0 hidden w-[43%] md:block"
      />
      <Image
        src={'/images/competition/landing/omits/rumput-kanan-mobile.png'}
        alt="rumput kanan"
        width={136}
        height={188}
        className="absolute right-0 bottom-0 block w-[25%] md:hidden"
      />
      <Image
        src={'/images/competition/landing/omits/rumput-kiri.png'}
        alt="rumput kiri"
        width={1326}
        height={642}
        className="absolute bottom-0 left-0 hidden w-[44%] md:block"
      />
      <Image
        src={'/images/competition/landing/omits/rumput-kiri-mobile.png'}
        alt="rumput kiri"
        width={492}
        height={194}
        className="absolute bottom-0 left-0 block w-[55%] md:hidden"
      />
      <div className="drop-shadow-white">
        <Typography
          font="Lora"
          variant="t"
          className="text-center text-2xl text-[#284269]"
          weight="medium"
        >
          Halo The Emerald Voyagers Yuk Cari Tahu
        </Typography>
      </div>
    </section>
  );
}
