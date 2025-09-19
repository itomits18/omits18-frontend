'use client';
import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function LolosSemifinal() {
  const searchParams = useSearchParams();

  const participantNumber = searchParams.get('participantNumber');
  const name = searchParams.get('name');
  const region = searchParams.get('region');
  const skLink = searchParams.get('skLink') || '';
  const groupSemiFinal = searchParams.get('groupSemiFinal') || '';
  const scoreLink = searchParams.get('scoreLink') || '';
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-t from-[#86ABC0] to-[#35547B]">
      {/* Mobile*/}
      <Image
        src="/images/semifinal/Asset 95 9.png"
        width={288}
        height={171}
        alt="cloud1"
        className="absolute top-[15%] object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 96 7.png"
        width={283}
        height={230}
        alt="cloud1"
        className="absolute top-[20%] right-0 object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 95 4.png"
        width={251}
        height={255}
        alt="cloud2"
        className="absolute top-[30%] object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 95 3.png"
        width={168}
        height={163}
        alt="cloud3"
        className="absolute top-[42%] right-0 object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 95 5.png"
        width={273}
        height={163}
        alt="cloud4"
        className="absolute top-[50%] object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 95 6.png"
        width={167}
        height={163}
        alt="cloud5"
        className="absolute top-[50%] right-0 object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 95 8.png"
        width={262}
        height={247}
        alt="cloud6"
        className="absolute top-[54%] right-0 object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 95 7.png"
        width={267}
        height={214}
        alt="cloud7"
        className="absolute top-[62%] object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 95 2.png"
        width={260}
        height={205}
        alt="cloud8"
        className="absolute top-[70%] right-0 object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 95 1.png"
        width={364}
        height={220}
        alt="cloud9"
        className="absolute top-[74%] object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 95 10.png"
        width={311}
        height={151}
        alt="cloud10"
        className="absolute right-0 bottom-0 object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 95 13.png"
        width={172}
        height={103}
        alt="cloud11"
        className="absolute top-[80%] object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 95 12.png"
        width={176}
        height={105}
        alt="cloud12"
        className="absolute top-[80%] right-0 object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 43 1.png"
        width={43}
        height={64}
        alt="bottle"
        className="absolute top-[80%] left-[10%] object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 42 1.png"
        width={52}
        height={55}
        alt="bottle2"
        className="absolute top-[80%] right-[10%] object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 46 1.png"
        width={117}
        height={63}
        alt="hiasan"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 transform object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/omits-logo.png"
        width={576}
        height={144}
        alt="logo"
        className="absolute top-[5%] left-1/2 z-10 w-[25vh] -translate-x-1/2 transform object-contain md:w-[30vh]"
      />

      {/* Desktop*/}
      <Image
        src="/images/semifinal/Group 235.png"
        width={1389}
        height={126}
        alt="star"
        className="absolute left-1/2 hidden -translate-x-1/2 transform object-contain md:block"
      />

      <Image
        src="/images/semifinal/c1.png"
        width={530}
        height={386}
        alt="cloud1"
        className="absolute top-[15%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 95 2.png"
        width={385}
        height={386}
        alt="cloud2"
        className="absolute top-[20%] right-0 hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 95 4.png"
        width={489}
        height={386}
        alt="cloud3"
        className="absolute top-[34%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/h 102 3.png"
        width={155}
        height={367}
        alt="hiasan1"
        className="absolute top-[35%] right-0 hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 96 1.png"
        width={329}
        height={174}
        alt="cloud4"
        className="absolute top-[40%] right-0 hidden object-contain opacity-30 md:block"
      />

      <Image
        src="/images/semifinal/h 102 2.png"
        width={155}
        height={367}
        alt="hiasan1"
        className="absolute top-[35%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 97 1.png"
        width={450}
        height={199}
        alt="cloud5"
        className="absolute top-[50%] hidden object-contain opacity-50 md:block"
      />

      <Image
        src="/images/semifinal/c 95 6.png"
        width={559}
        height={386}
        alt="cloud5"
        className="absolute top-[44%] left-[25%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 95 9.png"
        width={559}
        height={386}
        alt="cloud5"
        className="absolute top-[44%] left-[50%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 96 4.png"
        width={570}
        height={179}
        alt="cloud5"
        className="absolute top-[54%] left-1/2 hidden -translate-x-1/2 transform object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 95 5.png"
        width={548}
        height={241}
        alt="cloud5"
        className="absolute bottom-0 left-[20%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 95 1.png"
        width={630}
        height={386}
        alt="cloud5"
        className="absolute bottom-0 left-[20%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 96 2.png"
        width={604}
        height={172}
        alt="cloud5"
        className="absolute bottom-0 left-[50%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 95 11.png"
        width={206}
        height={209}
        alt="cloud5"
        className="absolute right-0 bottom-[20%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 96 3.png"
        width={478}
        height={179}
        alt="cloud5"
        className="absolute bottom-[10%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 95 7.png"
        width={408}
        height={197}
        alt="cloud5"
        className="absolute bottom-[10%] left-[10%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 97 1.png"
        width={400}
        height={199}
        alt="cloud5"
        className="absolute bottom-0 hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 95 10.png"
        width={508}
        height={161}
        alt="cloud5"
        className="absolute bottom-0 left-[10%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/c 97 2.png"
        width={329}
        height={174}
        alt="cloud4"
        className="absolute right-0 bottom-[10%] hidden object-contain opacity-80 md:block"
      />

      <Image
        src="/images/semifinal/c 96 1.png"
        width={429}
        height={174}
        alt="cloud4"
        className="absolute right-0 bottom-0 hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/h 46 1.png"
        width={180}
        height={95}
        alt="cloud4"
        className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 transform object-contain md:block"
      />

      <Image
        src="/images/semifinal/h 42 1.png"
        width={88}
        height={106}
        alt="cloud4"
        className="absolute right-0 bottom-0 hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/h 42 2.png"
        width={120}
        height={130}
        alt="cloud4"
        className="absolute right-[10%] bottom-[10%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/Group 236.png"
        width={147}
        height={143}
        alt="cloud4"
        className="absolute bottom-0 hidden object-contain md:block"
      />

      {/*Frame*/}
      <div className="absolute top-1/2 left-1/2 flex w-full max-w-xs -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-4xl px-4 py-6 md:max-w-xl md:px-12 md:py-12 xl:max-w-4xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/semifinal/bg-lolos.png')",
            filter: 'blur(25px)',
            transform: 'scale(1.1)',
          }}
        />
        <div className="z-20">
          <Image
            src="/images/semifinal/gulungan-map.png"
            width={304}
            height={152}
            alt="map"
            className="absolute -top-15 left-1/2 z-30 hidden w-[18vh] -translate-x-1/2 transform object-contain md:block lg:w-[20vh]"
          />
          <Typography
            font="Lora"
            weight="bold"
            variant="h4"
            className="text-center text-2xl text-[#658E78] [text-shadow:_2px_3px_0_rgb(0_0_0_/_100%)] md:text-4xl xl:text-5xl"
          >
            HASIL PENGUMUMAN
          </Typography>

          {/*Identitas*/}
          <Typography
            font="Lora"
            weight="bold"
            variant="h3"
            className="mt-5 px-2 text-center text-sm text-[#5C2921] md:text-lg"
          >
            Peserta dengan nomor identitas
          </Typography>

          <div className="mt-3 mb-8 flex w-full justify-center space-y-3">
            <div className="grid grid-cols-[auto_auto_1fr] gap-x-2 gap-y-1">
              <Typography
                variant="p"
                className="text-sm font-semibold text-gray-700"
              >
                No Peserta
              </Typography>
              <Typography
                variant="p"
                className="text-sm font-semibold text-gray-700"
              >
                :
              </Typography>
              <Typography
                variant="p"
                className="text-sm font-bold text-gray-900"
              >
                {participantNumber}
              </Typography>

              <Typography
                variant="p"
                className="text-sm font-semibold text-gray-700"
              >
                Nama
              </Typography>
              <Typography
                variant="p"
                className="text-sm font-semibold text-gray-700"
              >
                :
              </Typography>
              <Typography
                variant="p"
                className="text-sm font-bold text-gray-900"
              >
                {name}
              </Typography>

              <Typography
                variant="p"
                className="text-sm font-semibold text-gray-700"
              >
                Region
              </Typography>
              <Typography
                variant="p"
                className="text-sm font-semibold text-gray-700"
              >
                :
              </Typography>
              <Typography
                variant="p"
                className="text-sm font-bold text-gray-900"
              >
                {region}
              </Typography>
            </div>
          </div>

          <div className="flex justify-center">
            <Typography
              font="Lora"
              weight="bold"
              variant="h6"
              className="mt-1 max-w-md text-center text-sm text-[#5C2921] md:text-lg"
            >
              Dinyatakan{' '}
              <span className="mx-1 rounded-xl bg-blue-500 px-2 py-1 text-white">
                Lolos
              </span>{' '}
              ke tahap Semi Final. Silakan bergabung ke Grup WhatsApp untuk
              informasi selanjutnya
            </Typography>
          </div>

          <div className="mt-4 flex flex-col flex-wrap justify-center gap-2 text-center sm:flex-row">
            <Link
              href={groupSemiFinal}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="green"
                className="w-fit rounded-md px-2 py-1.5 text-xs text-white hover:bg-green-600 md:px-4 md:py-2 md:text-base"
              >
                Gabung Grup WA
              </Button>
            </Link>
            <Link href={scoreLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="yellow"
                className="w-fit rounded-md px-2 py-1.5 text-xs text-white hover:bg-yellow-600 md:px-4 md:py-2 md:text-base"
              >
                Lihat Nilai
              </Button>
            </Link>
            <Link href={skLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="blue"
                className="w-fit rounded-md px-2 py-1.5 text-xs text-white hover:bg-blue-800 md:px-4 md:py-2 md:text-base"
              >
                SK Pengumuman
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
