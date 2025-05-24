import Typography from '@/components/Typography';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/404m/Rectangle 2.png"
        width={390}
        height={844}
        alt="background mob"
        className="absolute h-screen w-full md:hidden"
      />

      <Image
        src="/images/404m/Rectangle 1.png"
        fill
        alt="background desk"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      />

      <Image
        src="/images/404m/image 1.png"
        width={390}
        height={272}
        alt="tanah"
        className="absolute bottom-0 z-10 w-full opacity-80 md:hidden"
      />

      <Image
        src="/images/404m/image 1.desk.png"
        width={1440}
        height={308}
        alt="tanah"
        className="absolute bottom-0 z-10 hidden w-full opacity-80 md:block"
      />

      <Image
        src="/images/404m/Group 62.png"
        width={390}
        height={177}
        alt="bush mob"
        className="absolute bottom-[35%] w-full md:hidden"
      />

      <Image
        src="/images/404m/Group 74.png"
        width={1110}
        height={228}
        alt="bush desk"
        className="absolute bottom-[25%] hidden w-full opacity-60 md:block"
      />

      <Image
        src="/images/404m/Asset 94 1.png"
        width={134}
        height={256}
        alt="castle mob"
        className="absolute bottom-[30%] right-0 md:hidden"
      />

      <Image
        src="/images/404m/Group 68.png"
        width={550}
        height={412}
        alt="castle desk"
        className="absolute bottom-[25%] right-0 hidden opacity-60 md:block"
      />

      <Image
        src="/images/404m/Group 52.png"
        width={207}
        height={177}
        alt="bottom kiri"
        className="absolute bottom-[0%] z-20 md:hidden"
      />

      <Image
        src="/images/404m/Group 72.png"
        width={340}
        height={178}
        alt="bottom kiri"
        className="absolute bottom-[0%] z-20 hidden md:block"
      />

      <Image
        src="/images/404m/Asset 32 1.png"
        width={94}
        height={99}
        alt="bottom kanan"
        className="absolute bottom-[0%] right-0 z-20 md:hidden"
      />

      <Image
        src="/images/404m/Group 76.png"
        width={196}
        height={180}
        alt="bottom kanan"
        className="absolute bottom-[0%] right-0 z-20 hidden md:block"
      />

      <Image
        src="/images/404m/Group 59.png"
        width={164}
        height={265}
        alt="jamur kanan mob"
        className="absolute bottom-[20%] z-20 md:hidden"
      />

      <Image
        src="/images/404m/Group 71.png"
        width={320}
        height={295}
        alt="jamur kanan desk"
        className="absolute bottom-[24%] z-20 hidden md:block"
      />

      <Image
        src="/images/404m/Group 61.png"
        width={161}
        height={125}
        alt="jamur kiri mob"
        className="absolute bottom-[30%] right-0 z-20 md:hidden"
      />

      <Image
        src="/images/404m/Group 77.png"
        width={400}
        height={279}
        alt="jamur kiri desk"
        className="absolute bottom-[20%] right-0 z-20 hidden md:block"
      />

      <Image
        src="/images/404m/Group 25.png"
        width={246}
        height={99}
        alt="tengah bawah desk"
        className="absolute bottom-[0%] left-[45%] z-20 hidden md:block"
      />

      <Image
        src="/images/404m/Asset 45 1.png"
        width={110}
        height={126}
        alt="wicked"
        className="absolute bottom-[70%] right-0 z-20 md:right-[10%] md:top-[14%] md:w-[150px]"
      />

      <Image
        src="/images/404m/Group 16.png"
        width={390}
        height={95}
        alt="cloud mob"
        className="absolute z-20 w-full md:hidden"
      />

      <Image
        src="/images/404m/Group 66.png"
        width={1440}
        height={129}
        alt="cloud desk"
        className="absolute z-20 hidden w-full md:block"
      />

      <Image
        src="/images/404m/Group 14.png"
        width={362}
        height={200}
        alt="404"
        className="absolute left-[50%] top-[20%] z-20 -translate-x-1/2 md:w-[650px]"
      />

      <Typography
        font="Cinzel"
        weight="bold"
        variant="h2"
        className="absolute left-[50%] top-[50%] z-50 -translate-x-1/2 whitespace-nowrap text-center text-2xl text-white max-md:text-2xl md:top-[65%] md:text-4xl"
      >
        Page Not Found
      </Typography>

      <Typography
        font="Lora"
        weight="bold"
        variant="h6"
        className="absolute left-[50%] top-[55%] z-50 -translate-x-1/2 text-center text-base text-white max-md:text-base md:top-[72%] md:text-2xl"
      >
        Halaman yang kamu cari tidak ditemukan
      </Typography>

      <button className="absolute left-[50%] top-[65%] z-50 -translate-x-1/2 rounded-sm bg-purple-500 px-5 py-2 font-Lora text-white hover:bg-purple-300 md:top-[80%]">
        Kembali ke beranda
      </button>
    </div>
  );
}
