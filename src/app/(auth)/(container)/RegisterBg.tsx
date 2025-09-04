import Image from 'next/image';

export default function RegisterBg() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <Image
        src="/images/password/Group 3.png"
        width={643}
        height={838}
        alt="assets"
        className="absolute bottom-0 left-0 z-20"
      />
      <Image
        src="/images/password/Group 4.png"
        width={643}
        height={838}
        alt="assets"
        className="absolute bottom-0 right-0 z-20"
      />
      <Image
        src="/images/password/Asset 89 1.png"
        width={1325}
        height={401}
        alt="assets"
        className="absolute bottom-0 z-10 w-full md:bottom-20 xl:-bottom-32"
      />
      <Image
        src="/images/password/Group 5.png"
        width={1325}
        height={401}
        alt="assets"
        className="absolute z-[5] w-full md:bottom-32 lg:top-20 xl:top-0"
      />
      <Image
        src="/images/password/Group 6.png"
        width={745}
        height={494}
        alt="assets"
        className="absolute left-32 z-[15] w-[40%]"
      />
      <Image
        src="/images/password/Group 7.png"
        width={745}
        height={494}
        alt="assets"
        className="absolute right-32 z-[15] w-[40%]"
      />
      <Image
        src="/images/password/Group 1.png"
        width={1440}
        height={378}
        alt="assets"
        className="absolute top-0 w-full"
      />
    </div>
  );
}
