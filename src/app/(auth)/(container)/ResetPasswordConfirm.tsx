import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import RegisterBg from '../(container)/RegisterBg';

export default function ResetPasswordConfirm({ email }: { email: string }) {
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
      <div className="font-Lora absolute top-1/2 left-1/2 z-30 w-[30%] -translate-x-1/2 -translate-y-1/2 transform space-y-4 rounded-lg bg-[#577866] px-8 py-6 text-[#FFFFFF] opacity-90 shadow-md max-md:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[35%] 2xl:w-[30%]">
        <Typography
          variant="h4"
          className="text-center font-semibold text-shadow-lg max-[350px]:text-2xl max-md:text-3xl"
        >
          Periksa email kamu
        </Typography>

        <Typography variant="p" className="max-[350px]:text-sm max-md:text-sm">
          Kami telah mengirimkan link verifikasi untuk mengatur ulang password
          ke email yang Anda berikan.
        </Typography>

        <Typography
          variant="p"
          className="font-bold italic max-[350px]:text-sm max-md:text-sm"
        >
          {email}
        </Typography>

        <Typography variant="p" className="max-[350px]:text-sm max-md:text-sm">
          Jika tidak ada email masuk, coba periksa folder spam yang mungkin ada
        </Typography>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="yellow" size="md" className="w-full">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
