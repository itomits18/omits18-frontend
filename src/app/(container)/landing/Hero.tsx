import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Pencapaian = [
  {
    image: '/images/landing/pencapaian/muri.png',
    title: 'Rekor Muri',
    description:
      '"Penyelenggara pengujian Kubus Ajaib bersifat dinamis bergerak” Pada Tahun 2007"',
  },
  {
    image: '/images/landing/pencapaian/puspresnas.png',
    title: 'OMITS 16th',
    description: 'Terkurasi oleh Puspresnas Sejak',
  },
  {
    image: '/images/landing/pencapaian/surat.png',
    title: '+6000',
    description: 'Surat Kecil dari OMITS untuk Mendikbud',
  },
  {
    image: '/images/landing/pencapaian/peserta.png',
    title: '+72000',
    description: 'Total Peserta OMITS',
  },
];

export default function Hero() {
  return (
    <section
      className="pb-20"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #4244AB, #6DA0E1, 10%, #DEC1DB, 65%, #8FBFDA)',
      }}
    >
      <section className="relative flex min-h-screen w-full items-center justify-center lg:min-h-[130vh]">
        <Image
          src="/images/landing/hero/castle-left.png"
          width={1061}
          height={1394}
          alt="assets"
          className="absolute bottom-0 left-0 z-20 max-lg:w-[50%] md:w-[40%] lg:w-[30%]"
        />
        <Image
          src="/images/landing/hero/castle-right.png"
          width={1061}
          height={1394}
          alt="assets"
          className="absolute right-0 bottom-0 z-20 max-lg:bottom-32 max-lg:w-[50%] md:w-[40%] lg:w-[30%]"
        />
        <Image
          src="/images/landing/hero/mountain-right.png"
          width={1310}
          height={526}
          alt="assets"
          className="absolute right-0 opacity-60 max-lg:bottom-0 md:w-[50%] lg:bottom-40 lg:w-[50%]"
        />
        <Image
          src="/images/landing/hero/mountain-left.png"
          width={1310}
          height={526}
          alt="assets"
          className="absolute bottom-40 left-0 opacity-60 md:w-[60%] lg:w-[50%]"
        />
        <Image
          src="/images/landing/hero/awan-lt.png"
          width={694}
          height={208}
          alt="assets"
          className="absolute z-20 max-md:top-28 max-md:left-10 max-md:w-[45%] md:top-28 md:left-20 md:w-[40%] lg:w-[25%]"
        />
        <Image
          src="/images/landing/hero/awan-rt.png"
          width={694}
          height={208}
          alt="assets"
          className="absolute top-32 right-0 opacity-50 max-md:w-[30%] md:w-[40%] lg:w-[30%]"
        />
        <Image
          src="/images/landing/hero/mountain-left.png"
          width={1310}
          height={526}
          alt="assets"
          className="absolute bottom-40 left-0 opacity-60 md:w-[60%] lg:w-[50%]"
        />

        <div className="z-20 mb-20 flex flex-col items-center justify-center space-y-4 lg:space-y-2 xl:mb-52 2xl:mb-72">
          <Image
            src="/images/landing/hero/title.png"
            width={538}
            height={200}
            alt="assets"
            className="mx-auto max-lg:w-[60%] md:w-[30%] lg:w-[30%]"
          />

          <Typography
            variant="h3"
            font="CinzelDecorative"
            weight="black"
            className="text-center text-[#284269] max-md:mx-auto max-md:w-[80%] max-md:text-3xl md:w-[70%] md:!leading-[72px] lg:w-full"
          >
            <span className="text-shadow-[-4px_4px_0px_rgb(249,221,216)]">
              Olimpiade Matematika ITS
            </span>
          </Typography>

          <Typography
            variant="h5"
            className="text-center text-[#405880]"
            weight="semibold"
          >
            Kompetisi Hebat untuk Sang Juara
          </Typography>

          <Button
            variant="purple"
            size="lg"
            className="mt-5 max-md:mt-10 max-md:rounded-md max-md:px-4 max-md:py-1 max-md:text-[12px] max-md:leading-[18px]"
          >
            Mulai Jelajah
          </Button>
        </div>
      </section>

      <section className="min-h-fit">
        <div className="flex flex-col items-center justify-center max-lg:mt-0 lg:-mt-48 xl:-mt-72">
          <Image
            src="/images/landing/pencapaian/portal.png"
            height={826}
            width={580}
            alt="assets"
            className="lg:w-[30%] xl:w-[40%] 2xl:w-[35%]"
          />

          <div className="relative mx-auto w-[80%] items-stretch justify-center rounded-lg bg-gradient-to-r from-pink-100 to-blue-100 px-8 py-8 max-2xl:justify-start 2xl:pt-16">
            <div className="flex justify-center space-x-8 max-2xl:overflow-x-auto max-2xl:pt-16">
              {Pencapaian.map((p, i) => (
                <div key={i}>
                  <div className="from-additions-purple-200 relative flex h-full w-[300px] flex-col items-center rounded-xl bg-gradient-to-b to-[#405881] p-4 pt-14">
                    <Image
                      src={p.image}
                      height={158}
                      width={158}
                      alt="assets"
                      className="absolute -top-12 mx-auto w-[30%]"
                    />
                    <Typography
                      variant="h6"
                      weight="black"
                      font="CinzelDecorative"
                      className="text-additions-brown-50 max-md:text-xl"
                    >
                      {p.title}
                    </Typography>

                    <Typography
                      weight="medium"
                      variant="p"
                      className="text-additions-brown-50 mx-auto text-center"
                    >
                      {p.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
