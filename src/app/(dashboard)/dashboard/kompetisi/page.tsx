'use client';
import useParticipantStore from '@/app/store/useParticipantStore';
import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ModalDetail from '../(container)/ModalDetail';
import { eventType } from '../(container)/WizardProgress';

export default function page() {
  const [modalDetail, setModalDetail] = useState(false);
  const [modalType, setModalType] = useState('omits');

  const [dataID, setDataID] = useState('');
  // const { user } = useAuthStore();
  const { participant } = useParticipantStore();

  const isOmitsClass =
    participant && participant.length === 1 && participant[0].is_omits_class;
  const isRegistered = participant.length > 0;

  const isRegisterMISSION =
    isRegistered &&
    participant.some((x) => x.participant_detail.type === 'MISSION');

  useEffect(() => {
    setDataID(localStorage.getItem('akun') || '');
  }, []);

  return (
    <>
      <ModalDetail
        id={dataID}
        open={modalDetail}
        setOpen={setModalDetail}
        type={modalType as eventType}
      />

      <section className="flex w-fit flex-col items-center gap-8 rounded-xl bg-[#FFFDF0] p-8 max-lg:w-full lg:px-12">
        <div className="flex flex-col items-center gap-1">
          {/* <div className="relative mb-2">
          {!isRegistered && (
            <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 max-md:hidden">
              <XCircle color="white" fill="black" size={24} />
            </div>
          )}
        </div> */}
          <Image
            src="/images/competition/dashboard/title.png"
            alt="assets"
            width={655}
            height={276}
            className="mx-auto w-full scale-110 max-md:w-[80%]"
          />
        </div>

        <div className="hidden h-8 text-center">
          {' '}
          {/* {isRegistered ? (
            <div className="flex items-center justify-center gap-1">
              <Typography
                variant="p"
                weight="semibold"
                font="Lora"
                className="text-green-600"
              >
                Selamat datang di OMITS 18th. Kamu telah terdaftar sebagai
                Emerald Voyager!
              </Typography>
              <Check
                className="hidden rounded-xl bg-green-600 text-white md:block"
                size={24}
                strokeWidth={3}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1">
              <Typography
                variant="p"
                weight="semibold"
                font="Lora"
                className="text-red-600"
              >
                Kamu belum terdaftar sebagai Emerald Voyager!
              </Typography>
              <X
                className="hidden rounded-xl bg-red-600 text-white md:block"
                size={24}
                strokeWidth={3}
              />
            </div>
          )} */}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex w-fit flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center">
            {/* omits class */}
            <div
              className={cn('items-start justify-center max-md:hidden md:flex')}
            >
              <div
                className={cn(
                  'relative hidden transform overflow-hidden rounded-xl shadow-lg',
                  isOmitsClass ? 'block' : 'hidden',
                )}
              >
                <Image
                  src="/images/competition/dashboard/bg-omits-class-desktop.png"
                  alt="OMITS Class"
                  width={244}
                  height={460}
                  className="z-0 object-cover"
                />
                <div className="absolute inset-0 z-10 mt-12 flex flex-col items-center p-4">
                  <Typography
                    variant="h5"
                    font="CinzelDecorative"
                    weight="bold"
                    className="text-shadow mb-2 text-center text-[#EEE2DF]"
                  >
                    OMITS ClASS
                  </Typography>
                  <Link
                    href="/competition/omits-class"
                    className="font-Lora rounded-md bg-[#565098] px-4 py-2 text-sm font-semibold text-[#EEE2DF] transition duration-300 ease-in-out hover:bg-[#453e8a]"
                  >
                    Lihat detail
                  </Link>
                </div>
              </div>
            </div>

            <div
              className={cn(
                'flex flex-col max-md:gap-4 2xl:flex-row',
                isOmitsClass
                  ? 'min-h-full flex-col justify-between gap-0 2xl:flex-col'
                  : 'gap-6',
              )}
            >
              {/* OMITS */}
              <div className="relative transform overflow-hidden rounded-md shadow-lg lg:rounded-xl">
                <Image
                  src="/images/competition/dashboard/bg-omits.png"
                  alt="OMITS"
                  width={473}
                  height={212}
                  className="z-0 object-cover"
                />
                <div className="absolute inset-0 z-10 mt-3 ml-3 flex flex-col items-start p-4 max-md:mt-0">
                  <Typography
                    variant="h5"
                    font="CinzelDecorative"
                    weight="bold"
                    className="text-shadow text-[#EEE2DF] max-md:text-xl md:mb-2"
                  >
                    OMITS
                  </Typography>
                  {isRegistered && !isRegisterMISSION ? (
                    // Jika kedaftar omiits
                    <div className="space-x-2">
                      {/* <Link href="/competition/omits/registration">
                        <Button
                          variant="green"
                          size="md"
                          className="max-lg:rounded-md max-lg:px-4 max-lg:py-1 max-lg:text-[12px] max-lg:leading-[18px]"
                        >
                          Daftar sekarang
                        </Button>
                      </Link> */}
                      <Button
                        disabled
                        variant="green"
                        size="md"
                        className="max-lg:rounded-md max-lg:px-4 max-lg:py-1 max-lg:text-[12px] max-lg:leading-[18px]"
                      >
                        Daftar Sekarang
                      </Button>
                      {/* <Button
                        variant="green"
                        size="md"
                        className="max-lg:rounded-md max-lg:px-4 max-lg:py-1 max-lg:text-[12px] max-lg:leading-[18px]"
                        onClick={() => {
                          setModalType('omits');
                          setModalDetail(true);
                        }}
                      >
                        Lihat Detail
                      </Button> */}
                    </div>
                  ) : (
                    // bukan daftar omits
                    <Link
                      href={
                        isRegistered && isRegisterMISSION
                          ? // regist mission
                            ''
                          : //jika ga daftar apa2 (blum daftar)
                            '/'
                      }
                    >
                      <Button
                        variant="green"
                        size="md"
                        className="max-lg:rounded-md max-lg:px-4 max-lg:py-1 max-lg:text-[12px] max-lg:leading-[18px]"
                        disabled={isRegistered && isRegisterMISSION}
                      >
                        {isRegistered && isRegisterMISSION
                          ? 'Terdaftar MISSION'
                          : 'Pendaftaran ditutup'}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              {/* MISSION */}
              <div className="relative transform overflow-hidden rounded-md shadow-lg lg:rounded-xl">
                <Image
                  src="/images/competition/dashboard/bg-mission.png"
                  alt="Mission"
                  width={473}
                  height={212}
                  className="z-0 object-cover"
                />
                <div className="absolute inset-0 z-10 mt-3 ml-3 flex flex-col items-start p-4 max-md:mt-0">
                  <Typography
                    variant="h5"
                    font="CinzelDecorative"
                    weight="bold"
                    className="text-shadow text-[#EEE2DF] max-md:text-xl md:mb-2"
                  >
                    MISSION
                  </Typography>
                  {isRegisterMISSION ? (
                    // jika regist mission
                    <div className="flex space-x-2">
                      <Button
                        variant="blue"
                        size="md"
                        className="max-lg:rounded-md max-lg:px-4 max-lg:py-1 max-lg:text-[12px] max-lg:leading-[18px]"
                        onClick={() => {
                          setModalType('mission');
                          setModalDetail(true);
                        }}
                      >
                        Lihat Detail
                      </Button>
                    </div>
                  ) : (
                    // selain mission
                    <Link
                      href={
                        isRegistered && !isRegisterMISSION
                          ? // jika regist omits
                            ''
                          : // jika regist selain omits (blum daftar)
                            '/'
                      }
                    >
                      <Button
                        variant="blue"
                        size="md"
                        className="max-lg:rounded-md max-lg:px-4 max-lg:py-1 max-lg:text-[12px] max-lg:leading-[18px]"
                        disabled={isRegistered && !isRegisterMISSION}
                      >
                        {isRegistered && !isRegisterMISSION
                          ? 'Terdaftar OMITS'
                          : 'Pendaftaran ditutup'}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* omitsclass mobile */}
          <div
            className={cn(
              'justify-center md:hidden',
              isOmitsClass ? 'block' : 'hidden',
            )}
          >
            <div className="relative transform overflow-hidden rounded-md shadow-lg">
              <Image
                src="/images/competition/dashboard/bg-omits-class-mobile.png"
                alt="OMITS Class Mobile"
                width={473}
                height={212}
                className="z-0 object-cover"
              />
              <div className="absolute inset-0 z-10 mt-0 ml-3 flex flex-col items-start p-4">
                <Typography
                  variant="h5"
                  font="CinzelDecorative"
                  weight="bold"
                  className="text-shadow text-[#EEE2DF] max-md:text-xl"
                >
                  OMITS CLASS
                </Typography>
                <Link
                  href="/competition/omits-class"
                  className="font-Lora rounded-md bg-[#565098] px-2 py-1 text-xs font-semibold text-[#EEE2DF] transition duration-300 ease-in-out hover:bg-[#453e8a]"
                >
                  Lihat detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
