import Typography from '@/components/Typography';
import Image from 'next/image';

export default function LoadingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#D0FAFC] to-[#E5DBA6]">
      {/*Mobile*/}
      <Image
        src="/images/loading/castle.png"
        width={207}
        height={308}
        alt="istana"
        className="absolute bottom-0 md:hidden"
      />

      <Image
        src="/images/loading/rumput mobile.png"
        width={373}
        height={254}
        alt="rumput"
        className="absolute right-0 bottom-0 md:hidden"
      />

      <Image
        src="/images/loading/tree.png"
        width={172}
        height={288}
        alt="pohon"
        className="absolute right-0 bottom-0 z-20 max-[350px]:w-[100px] lg:hidden"
      />

      <Image
        src="/images/loading/awan mob 1.png"
        width={285}
        height={84}
        alt="awan-1"
        className="absolute right-0 bottom-[60%] md:hidden"
      />

      <Image
        src="/images/loading/awan mob 2.png"
        width={250}
        height={100}
        alt="awan-2"
        className="absolute bottom-[70%] md:hidden"
      />

      <Image
        src="/images/loading/awan mob 3.png"
        width={285}
        height={84}
        alt="awan-3"
        className="absolute right-0 md:hidden"
      />

      {/*Desktop*/}
      <Image
        src="/images/loading/black grass.png"
        width={1140}
        height={294}
        alt="black-grass"
        className="absolute bottom-0 z-0 hidden md:block"
      />

      <Image
        src="/images/loading/castle-desk.png"
        width={616}
        height={476}
        alt="castle"
        className="absolute bottom-0 z-10 hidden md:block"
      />

      <Image
        src="/images/loading/grass-desk.png"
        width={580}
        height={237}
        alt="grass"
        className="absolute bottom-0 z-20 hidden md:block"
      />

      <Image
        src="/images/loading/grass-desk-2.png"
        width={663}
        height={187}
        alt="grass"
        className="absolute right-0 bottom-0 hidden md:block"
      />

      <Image
        src="/images/loading/cloud-desk-1.png"
        width={600}
        height={95}
        alt="cloud"
        className="absolute right-0 hidden md:block"
      />

      <Image
        src="/images/loading/cloud-desk-2.png"
        width={500}
        height={118}
        alt="cloud"
        className="absolute left-0 hidden md:block"
      />

      <Image
        src="/images/loading/cloud-desk-3.png"
        width={415}
        height={157}
        alt="cloud"
        className="absolute right-0 bottom-[60%] hidden md:block"
      />

      <Image
        src="/images/loading/cloud-desk-4.png"
        width={425}
        height={136}
        alt="cloud"
        className="absolute bottom-[50%] left-0 z-0 hidden md:block"
      />

      <Image
        src="/images/loading/bola.png"
        width={240}
        height={144}
        alt="bola"
        className="animated-vertical absolute top-[38%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform md:top-[36%] md:h-[244px] md:w-[408px]"
      />

      <Image
        src="/images/loading/book-1.png"
        width={192}
        height={113}
        alt="book 1"
        className="absolute top-[40%] left-[40%] z-10 -translate-x-1/2 transform md:top-[45%] md:left-[45%] md:h-[102px] md:w-[326px]"
      />

      <Image
        src="/images/loading/book-2.png"
        width={192}
        height={113}
        alt="book 2"
        className="absolute top-[40%] left-[60%] z-10 -translate-x-1/2 transform md:top-[45%] md:left-[55%] md:h-[102px] md:w-[326px]"
      />

      <Image
        src="/images/loading/Layer_1.png"
        width={98}
        height={65}
        alt="Layer"
        className="absolute top-[45%] left-1/2 z-10 -translate-x-1/2 transform md:top-[45%] md:h-[110px] md:w-[167px]"
      />

      <Typography
        font="CinzelDecorative"
        variant="h3"
        className="absolute top-[58%] left-1/2 z-20 -translate-x-1/2 transform text-3xl font-bold text-[#337357] max-[350px]:top-[60%] max-md:text-4xl md:top-[65%]"
      >
        Loading
        <span className="dots"></span>
      </Typography>
    </div>
  );
}
