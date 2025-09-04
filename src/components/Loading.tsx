import Image from 'next/image';
import Typography from './Typography';

export default function Loading() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-linear-to-b from-[#EEE2DF] via-[#CFEBD1] via-50% to-[#658E78]">
      <Image
        src="/images/dashboard/layout/assets-bl.png"
        width={930}
        height={614}
        alt="assets images"
        className="absolute bottom-0 left-0 w-[30%] max-md:w-[50%]"
      />
      <Image
        src="/images/dashboard/layout/assets-br.png"
        width={930}
        height={614}
        alt="assets images"
        className="absolute right-0 bottom-0 w-[30%] max-md:w-[50%]"
      />
      <Image
        src="/images/dashboard/layout/assets-tr.png"
        width={286}
        height={144}
        alt="assets images"
        className="absolute top-52 right-0 w-[15%]"
        quality={100}
      />
      <Image
        src="/images/dashboard/layout/assets-tl.png"
        width={286}
        height={144}
        alt="assets images"
        className="absolute top-72 left-0 w-[15%]"
      />

      <div className="flex flex-col items-center justify-center space-y-3 max-md:space-y-6">
        <Image
          src="/images/loading/bola.png"
          width={817}
          height={488}
          alt="assets images"
          className="animated-vertical max-md:w-[70%] md:w-[80%] lg:w-[60%] xl:w-[90%]"
        />

        <Typography
          font="Cinzel"
          variant="h3"
          weight="semibold"
          className="text-green-300 max-md:text-4xl"
        >
          Loading
          <span className="dots"></span>
        </Typography>
      </div>
    </section>
  );
}
