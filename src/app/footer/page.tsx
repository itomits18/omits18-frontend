'use client';
import Typography from '@/components/Typography';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#658578] px-4 py-12 text-white md:px-8">
      <Image
        src="/images/footer/Group 188.png"
        alt="top"
        width="349"
        height="278"
        className="absolute right-0 top-0 z-0 md:hidden"
      />

      <Image
        src="/images/footer/Group 216.png"
        alt="top"
        width="380"
        height="705"
        className="absolute right-0 top-0 z-0 hidden md:block"
      />

      <Image
        src="/images/footer/Group 189.png"
        alt="bottom"
        width="295"
        height="679"
        className="absolute bottom-0 left-0 z-0 md:top-0 md:w-[325px]"
      />

      {/* Judul */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex items-center gap-4 pl-8 md:pl-[30%]">
          <Image
            src="/images/footer/logo-omits.png"
            alt="himatika"
            width="90"
            height="100"
            className="object-contain md:w-[150px]"
          />
          <div className="mb-2 text-left">
            <Typography
              variant="h2"
              className="mb-2 font-Cinzel text-2xl font-bold text-[#E5DBA6] md:text-4xl"
            >
              OMITS 18th
            </Typography>
            <Typography
              variant="h4"
              className="font-Lora text-sm font-semibold text-[#E5DBA6] md:text-xl"
            >
              Olimpiade Matematika ITS
            </Typography>
          </div>
        </div>

        <div className="hidden md:block">
          <p className="mx-auto mb-4 mt-2 max-w-3xl text-center font-Lora text-xl">
            Olimpiade Matematika ITS atau OMITS merupakan olimpiade matematika
            bergengsi tingkat nasional yang diselenggarakan untuk siswa jenjang
            SD, SMP, dan SMA sederajat serta mahasiswa.
          </p>
        </div>

        {/* OMITS */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-4">
          <div className="md:hidden">
            <p className="mb-4 mt-2 text-center font-Lora">
              Olimpiade Matematika ITS atau OMITS merupakan olimpiade matematika
              bergengsi tingkat nasional yang diselenggarakan untuk siswa
              jenjang SD, SMP, dan SMA sederajat serta mahasiswa.
            </p>
          </div>

          {/* Organized by */}
          <div>
            <p className="mb-2 font-OZWizard text-xl font-bold text-[#E5DBA6] md:text-2xl">
              Organized by
            </p>
            <div className="flex gap-2">
              <Image
                src="/images/footer/logo-himatika.png"
                alt="himatika"
                width="100"
                height="200"
                className="relative"
              />

              <Image
                src="/images/footer/logo-math.png"
                alt="himatika"
                width="100"
                height="200"
                className="relative"
              />
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <Typography
              variant="h3"
              className="mb-2 font-OZWizard text-xl font-bold text-[#E5DBA6] md:text-2xl"
            >
              Navigasi
            </Typography>
            <div className="flex gap-10">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="block hover:underline">
                      Tentang
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Video Tutorial
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="block hover:underline">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Contact Person
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kompetisi */}
          <div>
            <p className="mb-3 font-OZWizard text-xl font-bold text-[#E5DBA6] md:text-2xl">
              Kompetisi
            </p>
            <ul>
              <li>
                <a href="#" className="block hover:underline">
                  OMITS
                </a>
              </li>
              <li>
                <a href="#" className="block hover:underline">
                  MISSION
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <Typography
              variant="h3"
              className="mb-4 font-OZWizard text-xl font-bold text-[#E5DBA6] md:text-2xl"
            >
              Contact Person
            </Typography>
            <div className="mb-4">
              <p className="font-bold">External</p>
              <p>Maftho (+6281234567890)</p>
              <p>maftho@gmail.com</p>
            </div>
            <div>
              <p className="font-bold">Sponsorship</p>
              <p>Person (+6281234567890)</p>
              <p>person@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Copyright Section + Social Media */}
        <div className="mt-10 border-t border-white/20 pt-6 md:mt-20">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <div className="text-center text-xs md:text-left">
              <div className="inline">Copyright © </div>
              <div className="inline text-[#E5DBA6]">
                2025 OMITS HIMATIKA ITS
              </div>
              <div className="inline">
                {' '}
                | Gedung F Ruang 103, Institut Teknologi Sepuluh Nopember
              </div>
              <div className="inline"> Surabaya, Indonesia</div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
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
