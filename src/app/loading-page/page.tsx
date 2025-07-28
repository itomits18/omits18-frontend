import Typography from '@/components/Typography';
import Image from 'next/image';

export default function LoadingPage() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#D0FAFC] to-[#E5DBA6] overflow-hidden">
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
        className="absolute bottom-0 right-0 md:hidden"
      />

      <Image
        src="/images/loading/tree.png"
        width={172}
        height={288}
        alt="pohon"
        className="absolute bottom-0 right-0 z-20 md:w-[300px] md:h-[450px]"
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
        className="absolute bottom-0 right-0 hidden md:block"
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
        className="absolute left-0 bottom-[50%] z-0 hidden md:block"
      />

      <Image
        src="/images/loading/bola.png"
        width={240}
        height={144}
        alt="bola"
        className="absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 md:w-[408px] md:h-[244px] md:top-[38%] z-20"
      />

      <Image
        src="/images/loading/book-1.png"
        width={192}
        height={113}
        alt="book 1"
        className="absolute left-[40%] top-[40%] transform -translate-x-1/2 md:w-[326px] md:h-[102px] md:top-[45%] md:left-[45%] z-10"
      />

      <Image
        src="/images/loading/book-2.png"
        width={192}
        height={113}
        alt="book 2"
        className="absolute left-[60%] top-[40%] transform -translate-x-1/2 md:w-[326px] md:h-[102px] md:top-[45%] md:left-[55%] z-10"
      />

      <Image
        src="/images/loading/Layer_1.png"
        width={98}
        height={65}
        alt="Layer"
        className="absolute left-1/2 top-[45%] transform -translate-x-1/2 md:w-[167px] md:h-[110px] md:top-[45%] z-10"
      />

      <Typography
        font="CinzelDecorative"
        className="absolute left-1/2 top-[55%] transform -translate-x-1/2 text-[#337357] text-3xl md:text-4xl md:top-[60%] font-bold z-20"
      >
        Loading...
      </Typography>
    </div>
  );
}
