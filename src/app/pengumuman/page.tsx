'use client';

import Typography from '@/components/Typography';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useSemifinal } from './hooks/useSemifinal';

type FormFields = {
  inputNoPeserta: string;
  inputKodePos: string;
};

export default function Pengumuman() {
  const methods = useForm<FormFields>({ mode: 'onBlur' });
  const { handleSubmit } = methods;
  const { checkSemifinalStatus, isSearching } = useSemifinal();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const nomorPeserta = data.inputNoPeserta?.trim();
    const kodePos = data.inputKodePos?.trim();

    if (!nomorPeserta) {
      methods.setError('inputNoPeserta', {
        message: 'Nomor peserta wajib diisi',
      });
      return;
    }

    if (!kodePos) {
      methods.setError('inputKodePos', { message: 'Kode pos wajib diisi' });
      return;
    }

    checkSemifinalStatus({
      participant_number: nomorPeserta,
      postal: kodePos,
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-t from-[#D99417] to-[#E0C47D]">
      {/* Mobile*/}
      <Image
        src="/images/semifinal/Group 217.png"
        width={303}
        height={252}
        alt="cloud"
        className="absolute top-[34%] right-0 object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/a95 1.png"
        width={321}
        height={262}
        alt="cloud"
        className="absolute top-[14%] object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/a95 12.png"
        width={236}
        height={153}
        alt="cloud"
        className="absolute top-[14%] right-0 object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/Asset 95 22.png"
        width={390}
        height={188}
        alt="cloud"
        className="absolute right-0 object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/star.png"
        width={381}
        height={162}
        alt="star"
        className="absolute right-0 left-0 z-10 mx-auto object-contain"
      />

      <Image
        src="/images/semifinal/pohon.png"
        width={230}
        height={250}
        alt="pohon"
        className="absolute top-[10%] object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/book.png"
        width={164}
        height={207}
        alt="book"
        className="absolute bottom-0 object-contain md:hidden"
      />

      <Image
        src="/images/semifinal/jamur.png"
        width={162}
        height={258}
        alt="jamur"
        className="absolute right-0 bottom-0 object-contain md:hidden"
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
        src="/images/semifinal/Group 231.png"
        width={1440}
        height={417}
        alt="cloud"
        className="absolute hidden w-full object-cover md:block"
      />

      <Image
        src="/images/semifinal/Group 233.png"
        width={1440}
        height={473}
        alt="cloud"
        className="absolute top-[30%] hidden w-full object-cover md:block"
      />

      <Image
        src="/images/semifinal/Group 229.png"
        width={289}
        height={499}
        alt="jamur"
        className="absolute top-[10%] right-0 hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/Group 228.png"
        width={389}
        height={550}
        alt="tree"
        className="absolute top-[20%] hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/lilin.png"
        width={124}
        height={257}
        alt="lilin"
        className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 transform object-contain md:block"
      />

      <Image
        src="/images/semifinal/bola.png"
        width={155}
        height={221}
        alt="bola"
        className="absolute bottom-0 hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/Group 223.png"
        width={243}
        height={480}
        alt="bola"
        className="absolute right-0 bottom-0 hidden object-contain md:block"
      />

      <Image
        src="/images/semifinal/Asset 31 1.png"
        width={385}
        height={150}
        alt="book"
        className="absolute bottom-[16%] left-1/2 hidden -translate-x-1/2 transform object-contain md:block"
      />

      {/* Frame */}
      <div className="absolute top-1/2 left-1/2 z-30 flex w-full max-w-xs -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-2xl bg-white px-8 py-8 opacity-90 shadow-md md:max-w-md md:py-10">
        <div className="flex items-center justify-center">
          <Image
            src="/images/semifinal/gulungan-map.png"
            width={304}
            height={152}
            alt="map"
            className="absolute -top-10 left-1/2 z-30 hidden w-[18vh] -translate-x-1/2 transform object-contain md:block lg:w-[20vh]"
          />
          <Typography
            font="Cinzel"
            weight="bold"
            variant="h4"
            className="text-center text-[#E3BF90] [text-shadow:_2px_3px_0_rgb(0_0_0_/_100%)] max-md:text-[32px]"
          >
            PENGUMUMAN
          </Typography>
        </div>

        <Typography
          font="Lora"
          weight="semibold"
          variant="h3"
          className="mt-3 px-2 text-center text-sm text-[#5C2921] md:text-lg"
        >
          Silahkan Masukkan Nomor Peserta dan Kode Pos untuk Mengetahui
          Pengumuman
        </Typography>

        <FormProvider {...methods}>
          <form
            className="mt-4 flex-1 space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Typography
                font="Lora"
                weight="bold"
                variant="p"
                className="mb-2 text-left text-[#5C2921]"
              >
                Nomor Peserta
              </Typography>
              <Input
                {...methods.register('inputNoPeserta', {
                  required: 'Nomor peserta wajib diisi',
                })}
                id="inputNoPeserta"
                sizes="lg"
                placeholder="0171701001"
                className="rounded-md border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-[#B2AAA0] focus:outline-none"
              />
              <Typography
                font="Lora"
                weight="bold"
                variant="p"
                className="mt-2 mb-2 text-left text-[#5C2921]"
              >
                Kode Pos
              </Typography>
              <Input
                {...methods.register('inputKodePos', {
                  required: 'Kode pos wajib diisi',
                  pattern: {
                    value: /^[0-9]{5}$/,
                    message: 'Kode pos harus berupa 5 digit angka',
                  },
                })}
                id="inputKodePos"
                sizes="lg"
                placeholder="45575"
                className="rounded-md border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-[#B2AAA0] focus:outline-none"
              />
            </div>
            <Button
              variant="yellow"
              size="md"
              className="w-full rounded-md md:py-3"
              disabled={isSearching}
            >
              <Typography
                font="Lora"
                weight="bold"
                variant="p"
                className="text-center text-white max-md:text-[18px]"
              >
                {isSearching ? 'Mencari...' : 'Submit'}
              </Typography>
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
