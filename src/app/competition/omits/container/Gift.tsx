'use client';
import Typography from '@/components/Typography';
import AOS from 'aos';
import Image from 'next/image';
import React from 'react';
import 'aos/dist/aos.css';

interface GiftProps {
  colorPrime: string;
  colorSecond: string;
  colorFifth: string;
  colorGift: string;
  giftDescription: string;
  giftAssetDesktop: string;
  giftAssetMobile: string;
  giftTiangMobile: string;
}

export default function Gift({
  colorPrime,
  colorSecond,
  colorFifth,
  colorGift,
  giftDescription,
  giftAssetDesktop,
  giftAssetMobile,
  giftTiangMobile,
}: GiftProps) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden xl:min-h-[120vh] 2xl:min-h-[130vh]"
      style={{
        background: `linear-gradient(to top, ${colorGift} 22%, ${colorFifth})`,
      }}
    >
      <Image
        src={'/images/competition/landing/omits/gift/ranting-kanan-desktop.png'}
        alt="ranting kanan"
        width={314}
        height={414}
        className="absolute top-[20%] right-0 w-[15%] md:top-5 md:w-[10%]"
      />
      <Image
        src={'/images/competition/landing/omits/gift/ranting-kiri-desktop.png'}
        alt="ranting kiri"
        width={314}
        height={414}
        className="absolute top-[30%] left-0 w-[15%] md:top-5 md:w-[10%]"
      />
      <Image
        src={'/images/competition/landing/omits/gift/awan-desktop.png'}
        alt="awan"
        width={2708}
        height={964}
        className="absolute top-30 hidden md:block"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/gift/light-desktop.png'}
        alt="light"
        width={2880}
        height={2048}
        className="absolute top-0 left-0 hidden md:block"
      />
      <Image
        src={'/images/competition/landing/omits/gift/light-mobile.png'}
        alt="light"
        width={780}
        height={1688}
        className="absolute top-0 left-0 md:hidden"
      />
      <Image
        src={giftAssetDesktop}
        alt="pasir"
        width={2880}
        height={718}
        className="absolute bottom-0 hidden md:block"
      />
      <Image
        src={giftTiangMobile}
        alt="tiang"
        width={780}
        height={436}
        className="absolute right-0 bottom-5 md:hidden"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={giftAssetMobile}
        alt="pasir"
        width={780}
        height={320}
        className="absolute right-0 bottom-0 md:hidden"
      />
      <Image
        src={'/images/competition/landing/omits/gift/ball-desktop.png'}
        alt="bola"
        width={635}
        height={357}
        className="absolute bottom-5 w-[35%] md:w-[23%]"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/gift/tiang-right-desktop.png'}
        alt="tiang"
        width={660}
        height={1196}
        className="absolute right-0 bottom-5 hidden w-[25%] md:block"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/gift/buku-mobile.png'}
        alt="buku"
        width={222}
        height={178}
        className="absolute right-0 bottom-15 w-[25%] md:hidden"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/gift/tiang-left-desktop.png'}
        alt="tiang"
        width={778}
        height={1308}
        className="absolute bottom-5 left-0 hidden w-[25%] md:block"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/gift/tiang-mobile.png'}
        alt="tiang"
        width={216}
        height={390}
        className="absolute bottom-12 left-0 w-[25%] md:hidden"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/gift/witch-desktop.png'}
        alt="witch"
        width={140}
        height={130}
        className="absolute top-[30%] right-[23%] w-[10%] md:w-[5%]"
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <div className="absolute top-[55%] right-[5%] w-full max-w-[50%] md:top-[60%] md:right-[10%] md:max-w-xs xl:top-[41%] xl:right-[6%] xl:max-w-sm 2xl:right-[12%] 2xl:max-w-md">
        <div className="relative flex items-center justify-center">
          <Image
            src={'/images/competition/landing/omits/gift/bronze-desktop.png'}
            alt="bronze"
            width={886}
            height={890}
            className="w-full"
          />
          <Typography
            font="CinzelDecorative"
            variant="h5"
            className="absolute top-[25%] max-w-xs bg-clip-text text-center text-transparent max-md:text-[20px] md:max-w-xl xl:text-5xl 2xl:top-[27%]"
            weight="black"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${colorPrime}, ${colorSecond})`,
            }}
          >
            Juara 3
          </Typography>
          <Typography
            font="Lora"
            variant="t"
            className="absolute top-[40%] max-w-25 text-center max-md:ml-2 max-md:text-[13px] md:max-w-40 xl:text-2xl xl:leading-[30px] 2xl:text-3xl"
            weight="medium"
            style={{ color: colorPrime }}
          >
            Uang Pembinaan, Piagam, Medali Perunggu
          </Typography>
        </div>
      </div>
      <div className="absolute top-[48%] left-[4%] w-full max-w-[55%] md:top-[55%] md:left-[6%] md:max-w-xs xl:top-[43%] xl:left-[8%] xl:max-w-sm 2xl:left-[14%] 2xl:max-w-md">
        <div className="relative flex items-center justify-center">
          <Image
            src={'/images/competition/landing/omits/gift/silver-desktop.png'}
            alt="silver"
            width={885}
            height={889}
            className="w-full"
          />
          <Typography
            font="CinzelDecorative"
            variant="h5"
            className="absolute top-[25%] max-w-xs bg-clip-text text-center text-transparent max-md:text-[20px] md:max-w-xl xl:text-5xl 2xl:top-[27%]"
            weight="black"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${colorPrime}, ${colorSecond})`,
            }}
          >
            Juara 2
          </Typography>
          <Typography
            font="Lora"
            variant="t"
            className="absolute top-[40%] max-w-25 text-center max-md:mr-2 max-md:text-[14px] md:max-w-40 xl:text-2xl xl:leading-[30px] 2xl:text-3xl"
            weight="medium"
            style={{ color: colorPrime }}
          >
            Uang Pembinaan, Piagam, Medali Perak
          </Typography>
        </div>
      </div>
      <div className="absolute top-[12%] w-full max-w-[60%] md:top-[17%] md:max-w-xs xl:top-[25%] xl:max-w-md 2xl:max-w-lg">
        <div className="relative flex items-center justify-center">
          <Image
            src={'/images/competition/landing/omits/gift/gold-desktop.png'}
            alt="gold"
            width={949}
            height={1064}
            className="w-full"
          />
          <Typography
            font="CinzelDecorative"
            variant="h5"
            className="absolute top-[20%] max-w-xs bg-clip-text text-center text-transparent max-md:text-[28px] md:top-[25%] md:max-w-xl xl:text-5xl 2xl:top-[27%] 2xl:text-6xl"
            weight="black"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${colorPrime}, ${colorSecond})`,
            }}
          >
            Juara 1
          </Typography>
          <Typography
            font="Lora"
            variant="t"
            className="absolute top-[38%] ml-2 max-w-43 text-center max-xl:pr-5 max-xl:pl-5 max-md:text-[16px] md:top-[37%] md:ml-5 md:max-w-50 md:text-xl xl:top-[40%] xl:max-w-55 xl:text-3xl xl:leading-[35px] 2xl:text-4xl"
            weight="medium"
            style={{ color: colorPrime }}
          >
            {giftDescription} Uang Pembinaan, Piagam, Medali Emas
          </Typography>
        </div>
      </div>
      <div className="absolute top-0 w-full max-w-xs md:max-w-2xl xl:max-w-3xl">
        <div className="relative flex items-center justify-center">
          <Image
            src={'/images/competition/landing/omits/gift/frame-desktop.png'}
            alt="frame"
            width={1592}
            height={629}
            className="w-full"
          />
          <Typography
            font="CinzelDecorative"
            variant="h4"
            className="absolute top-[28%] max-w-xs text-center text-[#5B61B2] max-xl:text-4xl max-md:text-xl md:max-w-xl"
            weight="black"
          >
            HADIAH OMITS 2025
          </Typography>
        </div>
      </div>
    </section>
  );
}
