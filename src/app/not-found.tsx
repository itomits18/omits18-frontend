import Typography from '@/components/Typography';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/404m/Rectangle 2.png"
        width={390}
        height={844}
        alt="background mob"
        className="absolute w-full h-screen md:hidden"
      />

      <Image
        src="/images/404m/Rectangle 1.png"
        fill
        alt="background desk"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
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
        className="absolute bottom-0 z-10 w-full opacity-80 hidden md:block"
      />

      <Image
        src="/images/404m/Group 62.png"
        width={390}
        height={177}
        alt="bush mob"
        className="absolute w-full bottom-[35%] md:hidden"
      />

      <Image
        src="/images/404m/Group 74.png"
        width={1110}
        height={228}
        alt="bush desk"
        className="absolute w-full bottom-[25%] opacity-60 hidden md:block"
      />

      <Image
        src="/images/404m/Asset 94 1.png"
        width={134}
        height={256}
        alt="castle mob"
        className="absolute right-0 bottom-[30%] md:hidden"
      />

      <Image
        src="/images/404m/Group 68.png"
        width={550}
        height={412}
        alt="castle desk"
        className="absolute right-0 bottom-[25%] hidden opacity-60 md:block"
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
        className="absolute bottom-[0%] z-20 right-0 md:hidden"
      />

      <Image
        src="/images/404m/Group 76.png"
        width={196}
        height={180}
        alt="bottom kanan"
        className="absolute bottom-[0%] z-20 right-0 hidden md:block"
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
        className="absolute bottom-[30%] z-20 right-0 md:hidden"
      />

      <Image
        src="/images/404m/Group 77.png"
        width={400}
        height={279}
        alt="jamur kiri desk"
        className="absolute bottom-[20%] z-20 right-0 hidden md:block"
      />

      <Image
        src="/images/404m/Group 25.png"
        width={246}
        height={99}
        alt="tengah bawah desk"
        className="absolute bottom-[0%] z-20 left-[45%] hidden md:block"
      />

      <Image
        src="/images/404m/Asset 45 1.png"
        width={110}
        height={126}
        alt="wicked"
        className="absolute right-0 z-20 bottom-[70%] md:w-[150px] md:right-[10%] md:top-[14%]"
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
        className="absolute z-20 w-full hidden md:block"
      />

      <Image
        src="/images/404m/Group 14.png"
        width={362}
        height={200}
        alt="404"
        className="absolute z-20 top-[20%] left-[50%] -translate-x-1/2 md:w-[650px]"
      />

      <Typography
        font="Cinzel"
        weight="bold"
        variant="h2"
        className="absolute text-white z-50 top-[50%] left-[50%] -translate-x-1/2 text-2xl max-md:text-2xl text-center whitespace-nowrap 
        md:text-4xl md:top-[65%]"
      >
        Page Not Found
      </Typography>

      <Typography
        font="Lora"
        weight="bold"
        variant="h6"
        className="absolute text-white z-50 top-[55%] left-[50%] -translate-x-1/2 text-base max-md:text-base text-center
        md:text-2xl md:top-[72%]"
      >
        Halaman yang kamu cari tidak ditemukan
      </Typography>

      <button
        className="bg-purple-500 text-white font-Lora absolute z-50 top-[65%] left-[50%] -translate-x-1/2 rounded-sm px-5 py-2
        md:top-[80%] hover:bg-purple-300"
      >
        Kembali ke beranda
      </button>
    </div>
  );
}
