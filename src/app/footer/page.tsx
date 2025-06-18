'use client';
import Typography from '@/components/Typography';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-[#658578] relative w-full min-h-screen py-12 px-4 md:px-8 text-white overflow-hidden">
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
        className="absolute bottom-0 md:top-0 left-0 z-0 md:w-[325px]"
      />

      {/* Judul */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 pl-8 md:pl-[30%]">
          <Image
            src="/images/footer/logo-omits.png"
            alt="himatika"
            width="90"
            height="100"
            className="object-contain md:w-[150px]"
          />
          <div className="text-left mb-2">
            <Typography
              variant="h2"
              className="text-2xl md:text-4xl text-[#E5DBA6] font-Cinzel font-bold mb-2"
            >
              OMITS 18th
            </Typography>
            <Typography
              variant="h4"
              className="text-sm md:text-xl text-[#E5DBA6] font-Lora font-semibold"
            >
              Olimpiade Matematika ITS
            </Typography>
          </div>
        </div>

        <div className="hidden md:block">
          <p className="mb-4 mx-auto max-w-3xl text-center text-xl font-Lora mt-2">
            Olimpiade Matematika ITS atau OMITS merupakan olimpiade matematika
            bergengsi tingkat nasional yang diselenggarakan untuk siswa jenjang
            SD, SMP, dan SMA sederajat serta mahasiswa.
          </p>
        </div>

        {/* OMITS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 md:mt-10">
          <div className="md:hidden">
            <p className="mb-4 text-center font-Lora mt-2">
              Olimpiade Matematika ITS atau OMITS merupakan olimpiade matematika
              bergengsi tingkat nasional yang diselenggarakan untuk siswa
              jenjang SD, SMP, dan SMA sederajat serta mahasiswa.
            </p>
          </div>

          {/* Organized by */}
          <div>
            <p className="text-xl md:text-2xl text-[#E5DBA6] font-bold mb-2 font-OZWizard">
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
              className="text-xl md:text-2xl text-[#E5DBA6] font-bold mb-2 font-OZWizard"
            >
              Navigasi
            </Typography>
            <div className="flex gap-10">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline block">
                      Tentang
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline block">
                      Video Tutorial
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline block">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline block">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline block">
                      Contact Person
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kompetisi */}
          <div>
            <p className="text-xl md:text-2xl text-[#E5DBA6] font-bold mb-3 font-OZWizard">
              Kompetisi
            </p>
            <ul>
              <li>
                <a href="#" className="hover:underline block">
                  OMITS
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline block">
                  MISSION
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <Typography
              variant="h3"
              className="text-xl md:text-2xl text-[#E5DBA6] font-bold mb-4 font-OZWizard"
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
        <div className="border-t border-white/20 pt-6 mt-10 md:mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-xs text-center md:text-left">
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
                  className="hover:opacity-50 transition-opacity"
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
                  className="hover:opacity-50 transition-opacity"
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
                  className="hover:opacity-50 transition-opacity"
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
                  className="hover:opacity-50 transition-opacity"
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
                  className="hover:opacity-50 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
