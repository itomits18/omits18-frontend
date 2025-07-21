import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { Participant } from '@/types/participants';
import { Check, CreditCard, IdCard, NotepadText } from 'lucide-react';
import Link from 'next/link';

export type eventType = 'omits' | 'mission';

type ProgressType = {
  type: eventType;
  data: Participant;
};

export default function WizardProgress({ type, data }: ProgressType) {
  const STATUS = data.participant_detail.status;
  const STATUS_INDEX = [
    'DATA_DIRI',
    'PAYMENT',
    'PENDING',
    'NEED_REVISION',
    'VERIFIED',
  ];
  const progress = STATUS_INDEX.findIndex((val) => val === STATUS);

  const ContentProgress = {
    PAYMENT: {
      success: 'Pembayaran berhasil',
      failed: 'Pembayaran gagal',
      pending: 'Menunggu transaksi',
    },
    PENDING: {
      success: 'Verifikasi data berhasil',
      failed: 'Verifikasi data gagal',
      pending: 'Verifikasi dalam proses',
      alt: 'Data sedang direvisi',
    },
    VERIFIED: {
      success: 'Verifikasi data berhasil',
      failed: 'Verifikasi data gagal',
      alt: 'Data sedang direvisi',
    },
    // VERIFIED: {
    //   success: 'Berhasil mendaftar',
    //   failed: 'Gagal mendaftar',
    // },
  };

  const colorType = {
    omits: 'bg-yellow-200 text-yellow-200',
    mission: 'bg-green-300 text-green-300',
  };
  const currentColor = colorType[type];

  return (
    <div className="scrollbar-hide flex h-fit items-center justify-center space-x-[120px] max-md:h-[150px] max-md:justify-start max-md:overflow-x-auto max-md:overflow-y-hidden max-md:px-20 max-md:pb-24">
      <div className="relative flex w-fit flex-col items-center justify-center">
        <div
          className={cn(
            'flex w-fit space-x-2 rounded-full p-3',
            progress >= 1 ? currentColor : 'bg-black-100',
          )}
        >
          <IdCard size={32} className="text-neutral-main" />
        </div>
        <div
          className={cn(
            'absolute -right-24 h-2 w-20 rounded-md',
            progress >= 1 ? currentColor : 'bg-black-100',
          )}
        ></div>

        <div className="absolute -bottom-12 -left-3/4 w-fit text-center max-md:-bottom-20">
          <Typography variant="bs" weight="bold" className="whitespace-nowrap">
            Pengisian Data Diri
          </Typography>

          <Typography
            variant="c"
            weight="regular"
            className="md:whitespace-nowrap"
          >
            Berhasil Mengisi Data Diri
          </Typography>
        </div>
      </div>

      {/* step 2 */}
      <div className="relative flex w-fit flex-col items-center justify-center">
        <div
          className={cn(
            'flex w-fit space-x-2 rounded-full p-3',
            progress >= 1 ? currentColor : 'bg-black-100',
          )}
        >
          <CreditCard size={32} className="text-neutral-main" />
        </div>
        <div
          className={cn(
            'absolute -right-24 h-2 w-20 rounded-md',
            progress >= 2 ? currentColor : 'bg-black-100',
          )}
        ></div>

        <div
          className={cn(
            'absolute -left-1/2 w-fit text-center max-md:-left-[30%]',
            STATUS === 'PAYMENT'
              ? '-bottom-21'
              : '-bottom-12 max-md:-bottom-20',
          )}
        >
          <Typography variant="bs" weight="bold" className="whitespace-nowrap">
            Pembayaran
          </Typography>

          <Typography
            variant="c"
            weight="regular"
            className="md:whitespace-nowrap"
          >
            {STATUS === 'PAYMENT' ? '' : ContentProgress.PAYMENT.success}
          </Typography>

          {STATUS === 'PAYMENT' && (
            <Link href={data.payment_url} target="_blank">
              <button className="mt-1 cursor-pointer rounded-lg bg-green-300 p-2 text-xs font-semibold text-neutral-50">
                Link pembayaran
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* step 3 */}
      <div className="relative flex w-fit flex-col items-center justify-center">
        <div
          className={cn(
            'flex w-fit space-x-2 rounded-full p-3',
            progress >= 2 ? currentColor : 'bg-black-100',
          )}
        >
          <NotepadText size={32} className="text-neutral-main" />
        </div>
        <div
          className={cn(
            'absolute -right-24 h-2 w-20 rounded-md',
            progress >= 4 ? currentColor : 'bg-black-100',
          )}
        ></div>

        <div className="absolute -bottom-12 -left-[70%] w-fit text-center max-md:-bottom-20 max-md:-left-[75%]">
          <Typography variant="bs" weight="bold" className="whitespace-nowrap">
            Verifikasi Data Diri
          </Typography>

          <Typography
            variant="c"
            weight="regular"
            className="md:whitespace-nowrap"
          >
            {STATUS === 'PENDING'
              ? ContentProgress.PENDING.pending
              : STATUS === 'NEED_REVISION'
                ? ContentProgress.PENDING.alt
                : progress >= 2
                  ? ContentProgress.PENDING.success
                  : 'Verifikasi data diri'}
          </Typography>
        </div>
      </div>

      {/* step 4 */}
      <div className="relative flex w-fit flex-col items-center justify-center">
        <div
          className={cn(
            'flex w-fit space-x-2 rounded-full p-3',
            progress >= 4 ? currentColor : 'bg-black-100',
          )}
        >
          <Check size={32} className="text-neutral-main" />
        </div>

        <div className="absolute -bottom-12 -left-3/4 w-fit text-center max-md:-bottom-20">
          <Typography variant="bs" weight="bold" className="whitespace-nowrap">
            Pendaftaran Berhasil
          </Typography>

          <Typography
            variant="c"
            weight="regular"
            className="md:whitespace-nowrap"
          >
            {STATUS === 'VERIFIED'
              ? 'Berhasil mengisi data diri'
              : 'Pendaftaran sedang proses'}
          </Typography>
        </div>
      </div>
    </div>
  );
}
