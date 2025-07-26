'use client';
import Typography from '@/components/Typography';
import AOS from 'aos';
import Image from 'next/image';
import React from 'react';
import 'aos/dist/aos.css';

interface Gallery {
  colorPrime: string;
  colorSecond: string;
  colorThird: string;
  galleryAssetDesktop: string;
  galleryAssetMobile: string;
}

export default function Gallery({
  colorPrime,
  colorSecond,
  colorThird,
  galleryAssetDesktop,
  galleryAssetMobile,
}: Gallery) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center xl:min-h-[120vh] 2xl:min-h-[130vh]"
      style={{
        background: `linear-gradient(to top, ${colorSecond}, ${colorThird})`,
      }}
    >
      <Image
        src={galleryAssetDesktop}
        alt="air"
        width={2880}
        height={2048}
        className="absolute bottom-0 hidden md:block"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={galleryAssetMobile}
        alt="air"
        width={780}
        height={1124}
        className="absolute bottom-0 md:hidden"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/gallery/pasir-desktop.png'}
        alt="air"
        width={2238}
        height={534}
        className="absolute right-10 bottom-0 hidden w-[80%] md:block xl:w-[85%] 2xl:w-[87%]"
      />
      <Image
        src={'/images/competition/landing/omits/gallery/pasir-mobile.png'}
        alt="pasir"
        width={780}
        height={326}
        className="absolute bottom-0 md:hidden"
      />
      <Image
        src={'/images/competition/landing/omits/gallery/batu-right-desktop.png'}
        alt="batu"
        width={766}
        height={1150}
        className="absolute right-0 bottom-0 hidden w-[30%] md:block 2xl:w-[25%]"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/gallery/batu-right-mobile.png'}
        alt="batu"
        width={290}
        height={640}
        className="absolute right-0 bottom-10 w-[37%] md:hidden"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/gallery/batu-left-desktop.png'}
        alt="batu"
        width={896}
        height={888}
        className="absolute bottom-0 left-0 hidden w-[30%] md:block"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/gallery/batu-left-mobile.png'}
        alt="batu"
        width={368}
        height={358}
        className="absolute bottom-0 left-0 w-[47%] md:hidden"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src={'/images/competition/landing/omits/gallery/flower-left.png'}
        alt="flower"
        width={452}
        height={942}
        className="absolute top-10 left-0 w-[25%] md:w-[20%] xl:w-[17%] 2xl:w-[13%]"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      />

      <div className="relative w-full max-w-85 rounded-xl bg-[#C5DAF4]/40 p-6 shadow-lg md:max-w-2xl xl:max-w-3xl 2xl:max-w-6xl">
        <Typography
          font="CinzelDecorative"
          variant="h2"
          weight="black"
          className="absolute -top-5 left-1/2 z-10 w-full -translate-x-1/2 bg-clip-text text-center text-transparent [filter:drop-shadow(-3px_3px_0px_white)] max-md:text-[32px] md:-top-7 md:text-6xl xl:-top-10 xl:text-7xl"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${colorPrime}, ${colorSecond})`,
          }}
        >
          GALLERY OMITS
        </Typography>
        <div className="mt-7 grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-4 xl:gap-15">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="aspect-square rounded-lg">
              <Image
                src={'/images/competition/landing/omits/gallery/fake-photo.png'}
                alt={`Galeri foto ${index + 1}`}
                width={150}
                height={150}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
