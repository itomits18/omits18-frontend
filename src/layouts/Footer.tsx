import Typography from '@/components/Typography';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="relative z-40 w-full overflow-hidden bg-[#658578] px-6 py-16 text-white md:px-28 xl:px-32">
      <Image
        src="/images/footer/Group 188.png"
        alt="top"
        width="349"
        height="278"
        className="absolute top-0 right-0 z-0 lg:hidden"
      />

      <Image
        src="/images/footer/Group 216.png"
        alt="top"
        width="380"
        height="705"
        className="absolute right-0 bottom-0 z-0 hidden lg:block lg:w-[35%] xl:w-[25%] 2xl:w-[20%]"
      />

      <Image
        src="/images/footer/Group 189.png"
        alt="bottom"
        width="295"
        height="679"
        className="absolute bottom-0 left-0 z-0 md:w-[325px] lg:w-[30%] xl:w-[21%] 2xl:w-[17%]"
      />

      {/* Judul */}
      <div className="relative z-10 mx-auto space-y-14">
        <div className="space-y-4">
          <div className="flex w-full items-center justify-center gap-4">
            <Image
              src="/images/footer/logo-omits.png"
              alt="himatika"
              width="90"
              height="100"
              className="max-md:w-[30%] md:w-[20%] lg:w-[10%] xl:w-[8%]"
            />

            <div className="text-left">
              <Typography
                variant="h4"
                weight="bold"
                className="text-yellow-100 max-[350px]:text-2xl max-md:text-3xl"
              >
                OMITS 18th
              </Typography>
              <Typography
                variant="p"
                weight="semibold"
                className="text-[#E5DBA6] max-[350px]:text-xs max-md:text-sm"
              >
                Olimpiade Matematika ITS
              </Typography>
            </div>
          </div>

          <Typography
            variant="p"
            className="mx-auto text-center max-md:text-sm xl:w-[80%]"
          >
            Olimpiade Matematika ITS atau OMITS merupakan olimpiade matematika
            bergengsi tingkat nasional yang diselenggarakan untuk siswa jenjang
            SD, SMP, dan SMA sederajat serta mahasiswa.
          </Typography>
        </div>

        {/* OMITS */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex lg:justify-between xl:px-12 2xl:px-24">
          {/* Organized by */}
          <div className="space-y-2">
            <Typography
              variant="h6"
              font="OZWizard"
              className="text-yellow-100 max-md:text-2xl"
            >
              Organized by
            </Typography>

            <div className="flex w-full">
              <Image
                src="/images/footer/logo-himatika.png"
                alt="himatika"
                width={261}
                height={264}
                className="w-[30%] object-cover lg:w-[50%] xl:w-[40%]"
              />

              <Image
                src="/images/footer/logo-math.png"
                alt="himatika"
                width={261}
                height={264}
                className="w-[30%] object-cover lg:w-[50%] xl:w-[40%]"
              />
            </div>
          </div>

          {/* Navigasi */}
          <div className="space-y-4">
            <Typography
              variant="h6"
              font="OZWizard"
              className="text-yellow-100 max-md:text-2xl"
            >
              Navigasi
            </Typography>

            <div className="grid grid-cols-2 gap-3 max-[350px]:gap-6 md:w-full md:grid-cols-2">
              <Typography
                variant="p"
                weight="semibold"
                className="max-md:text-xl"
              >
                Tentang
              </Typography>
              <Typography
                variant="p"
                weight="semibold"
                className="max-md:text-xl"
              >
                Testimonial
              </Typography>
              <Typography
                variant="p"
                weight="semibold"
                className="max-md:text-xl"
              >
                Video Tutorial
              </Typography>
              <Typography
                variant="p"
                weight="semibold"
                className="max-md:text-xl"
              >
                Contact Person
              </Typography>
              <Typography
                variant="p"
                weight="semibold"
                className="max-md:text-xl"
              >
                Timeline
              </Typography>
            </div>
          </div>

          {/* Kompetisi */}
          <div className="space-y-4">
            <Typography
              variant="h6"
              font="OZWizard"
              className="text-yellow-100 max-md:text-2xl"
            >
              Kompetisi
            </Typography>

            <div className="grid grid-cols-1 gap-3 max-[350px]:gap-6">
              <Typography
                variant="p"
                weight="semibold"
                className="max-md:text-xl"
              >
                OMITS
              </Typography>

              <Typography
                variant="p"
                weight="semibold"
                className="max-md:text-xl"
              >
                MISSION
              </Typography>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <Typography
              variant="h6"
              font="OZWizard"
              className="text-yellow-100 max-md:text-2xl"
            >
              Contact Person
            </Typography>

            <div className="space-y-2">
              <div>
                <Typography
                  variant="t"
                  weight="bold"
                  className="max-md:text-xl"
                >
                  External
                </Typography>

                <Link href={'wa.me/+6281234567890'}>
                  <Typography variant="p" className="max-md:text-lg">
                    Mafto(+6281234567890)
                  </Typography>
                </Link>
                <Link href={'mailto:mafto@gmail.com'}>
                  <Typography variant="p" className="max-md:text-lg">
                    mafto@gmail.com
                  </Typography>
                </Link>
              </div>

              <div>
                <Typography
                  variant="t"
                  weight="bold"
                  className="max-md:text-xl"
                >
                  Sponsorship
                </Typography>

                <Link href={'wa.me/+628884088682'}>
                  <Typography variant="p" className="max-md:text-lg">
                    Ayunda(+628884088682)
                  </Typography>
                </Link>
                <Link href={'mailto:aniyayunda@gmail.com'}>
                  <Typography variant="p" className="max-md:text-lg">
                    aniyayunda@gmail.com
                  </Typography>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section + Social Media */}
        <div className="mt-10 border-t border-white/20 pt-6 md:mt-20">
          <div className="flex flex-col items-center justify-between gap-4">
            {/* Copyright */}
            <Typography variant="bs" className="text-center max-md:text-sm">
              © Copyright 2025{' '}
              <span className="font-bold text-yellow-100">
                OMITS HIMATIKA ITS
              </span>{' '}
              | Gedung F Ruang 103, Institut Teknologi Sepuluh Nopember,
              Surabaya, Jawa Timur
            </Typography>

            {/* Social Media */}
            <div className="flex items-center justify-center gap-4">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/omits_himatika?igsh=ZjIzbXZseGY3dHFt"
                target="_blank"
              >
                <Image
                  src="/images/footer/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="transition-opacity hover:opacity-50"
                />
              </Link>

              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@omits_himatika?_t=ZS-8wogChGW1xP&_r=1"
                target="_blank"
              >
                <Image
                  src="/images/footer/tiktok.png"
                  alt="TikTok"
                  width={20}
                  height={20}
                  className="transition-opacity hover:opacity-50"
                />
              </Link>

              {/* YouTube */}
              <Link
                href="https://www.youtube.com/@OMITSHIMATIKAITS/featured"
                target="_blank"
              >
                <Image
                  src="/images/footer/youtube.png"
                  alt="YouTube"
                  width={20}
                  height={20}
                  className="transition-opacity hover:opacity-50"
                />
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/share/16FhPPBezr/"
                target="_blank"
              >
                <Image
                  src="/images/footer/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={25}
                  className="transition-opacity hover:opacity-50"
                />
              </Link>

              {/* X */}
              <Link
                href="https://x.com/omits_himatika?s=21&t=EVk6AXmdxt8hZrEG0WiSxQ"
                target="_blank"
              >
                <Image
                  src="/images/footer/twitter.png"
                  alt="Facebook"
                  width={24}
                  height={25}
                  className="transition-opacity hover:opacity-50"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
