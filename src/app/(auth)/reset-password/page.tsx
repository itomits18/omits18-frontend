import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import RegisterBg from '../(container)/RegisterBg';

export default function ResetPassword() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#FFFAFE] via-blue-100 via-15% to-green-200">
      {/*Mobile*/}
      <Image
        src="/images/password/iphone.png"
        fill
        alt="background-1"
        className="absolute object-cover md:hidden"
      />

      {/*Desktop*/}
      <RegisterBg />

      {/*Frame*/}
      <div className="absolute left-1/2 top-1/2 z-30 w-[30%] -translate-x-1/2 -translate-y-1/2 transform space-y-4 rounded-lg bg-[#577866] px-8 py-6 font-Lora text-[#FFFFFF] opacity-90 shadow-md max-md:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[35%] 2xl:w-[30%]">
        <Typography
          variant="h4"
          className="text-shadow-lg text-center font-semibold max-md:text-3xl max-[350px]:text-2xl"
        >
          Check Your Email
        </Typography>

        <Typography variant="p" className="max-md:text-sm max-[350px]:text-sm">
          Kami telah mengirimkan tautan untuk mengatur ulang password ke email
          yang Anda berikan.
        </Typography>

        <Typography
          variant="p"
          className="font-bold italic max-md:text-sm max-[350px]:text-sm"
        >
          email@gmail.com
        </Typography>

        <Typography variant="p" className="max-md:text-sm max-[350px]:text-sm">
          Jika tidak ada email masuk, coba periksa folder sampah, spam, sosial,
          atau folder lainnya yang mungkin ada
        </Typography>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            variant="yellow"
            size="lg"
            className="w-[50%] border border-neutral-main bg-transparent text-neutral-main max-md:w-full max-md:rounded-md max-md:px-5 max-md:py-2 max-md:text-[14px] max-md:leading-[24px]"
          >
            Ganti Alamat Email
          </Button>
          <Button
            variant="yellow"
            size="lg"
            className="w-[50%] max-md:w-full max-md:rounded-md max-md:px-5 max-md:py-2 max-md:text-[14px] max-md:leading-[24px]"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
