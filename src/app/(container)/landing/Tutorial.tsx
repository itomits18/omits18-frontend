'use client';
import Image from 'next/image';

export default function Tutorial() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-pink-300 via-purple-100 via-[22%] to-purple-300 to-[86%] xl:min-h-[130vh] 2xl:min-h-[160vh]">
      <Image
        src="/images/landing/tutorial/castle-desktop.png"
        width={760}
        height={1728}
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="castle"
        className="absolute right-0 bottom-10 z-10 hidden md:block md:w-[50%] xl:top-5 xl:w-[33%]"
      />
      <Image
        src="/images/landing/tutorial/castle-mobile.png"
        width={348}
        height={1080}
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="castle"
        className="absolute right-0 bottom-0 z-10 w-[50%] md:hidden"
      />
      <Image
        src="/images/landing/tutorial/awan-desktop.png"
        width={2880}
        height={1312}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="awan"
        className="absolute top-0 z-10 hidden md:block"
      />
      <Image
        src="/images/landing/tutorial/awan-mobile.png"
        width={780}
        height={608}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="awan"
        className="absolute top-0 z-10 md:hidden"
      />
      <Image
        src="/images/landing/tutorial/mashroom-desktop.png"
        width={2880}
        height={1570}
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="mashroom"
        className="absolute bottom-25 z-10 hidden md:block xl:bottom-[15%]"
      />
      <Image
        src="/images/landing/tutorial/mashroom-mobile.png"
        width={780}
        height={942}
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
        alt="mashroom"
        className="absolute bottom-0 z-10 md:hidden"
      />
      <div className="absolute top-[15%] z-30 aspect-video w-full max-w-4xl md:top-[10%] md:left-15 xl:top-[17%] xl:left-[25%] xl:max-w-5xl 2xl:top-[20%] 2xl:left-[30%] 2xl:max-w-7xl">
        <Image
          src="/images/landing/tutorial/frame.png"
          alt="Video Frame"
          fill
          className="pointer-events-none z-10 object-contain"
        />
        <iframe
          className="absolute top-[59%] left-1/2 z-30 h-[69%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-md md:h-[70%] md:w-[63%] xl:h-[69%]"
          src="https://www.youtube.com/embed/OqjDsyew6so"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <Image
        src="/images/landing/tutorial/assets-bottom-desktop.png"
        width={2880}
        height={837}
        alt="assets"
        className="absolute bottom-0 z-10 hidden md:block"
      />
      <Image
        src="/images/landing/tutorial/assets-bottom-mobile.png"
        width={780}
        height={294}
        alt="assets"
        className="absolute bottom-0 z-10 md:hidden"
      />
    </section>
  );
}
