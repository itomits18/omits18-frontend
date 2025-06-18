import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { Check, CreditCard, IdCard, NotepadText } from 'lucide-react';

export type eventType = 'omits' | 'mission';

type ProgressType = {
  progress: number;
  type: eventType;
};

export default function WizardProgress({ progress, type }: ProgressType) {
  const _ContentProgress = {
    dataDiri: {
      success: 'Berhasil Mengisi Data Diri',
      failed: '',
    },
    pembayaran: {
      success: 'Pembayaran berhasil',
      failed: 'Pembayaran gagal',
      alt: 'Retry pembayaran',
    },
    verifikasi: {
      success: 'Verifikasi data berhasil',
      failed: 'Verifikasi data gagal',
      alt: 'Data sedang direvisi',
    },
    finish: {
      success: 'Berhasil mendaftar',
      failed: 'Gagal mendaftar',
    },
  };

  const colorType = {
    omits: 'bg-yellow-200 text-yellow-200',
    mission: 'bg-green-300 text-green-300',
  };
  const currentColor = colorType[type];

  return (
    <div className="scrollbar-hide flex h-fit items-center justify-center space-x-[120px] max-md:justify-start max-md:overflow-x-auto max-md:overflow-y-hidden">
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
            progress >= 2 ? currentColor : 'bg-black-100',
          )}
        ></div>

        <div className="absolute -bottom-12 -left-3/4 w-fit text-center">
          <Typography variant="bs" weight="bold" className="whitespace-nowrap">
            Pengisian Data Diri
          </Typography>

          <Typography
            variant="c"
            weight="regular"
            className="whitespace-nowrap"
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
            progress >= 2 ? currentColor : 'bg-black-100',
          )}
        >
          <CreditCard size={32} className="text-neutral-main" />
        </div>
        <div
          className={cn(
            'absolute -right-24 h-2 w-20 rounded-md',
            progress >= 3 ? currentColor : 'bg-black-100',
          )}
        ></div>

        <div className="absolute -bottom-12 -left-1/2 w-fit text-center">
          <Typography variant="bs" weight="bold" className="whitespace-nowrap">
            Pembayaran
          </Typography>

          <Typography
            variant="c"
            weight="regular"
            className="whitespace-nowrap"
          >
            Pembayaran berhasil
          </Typography>
        </div>
      </div>

      {/* step 3 */}
      <div className="relative flex w-fit flex-col items-center justify-center">
        <div
          className={cn(
            'flex w-fit space-x-2 rounded-full p-3',
            progress >= 3 ? currentColor : 'bg-black-100',
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

        <div className="absolute -bottom-12 -left-[70%] w-fit text-center">
          <Typography variant="bs" weight="bold" className="whitespace-nowrap">
            Verifikasi Data Diri
          </Typography>

          <Typography
            variant="c"
            weight="regular"
            className="whitespace-nowrap"
          >
            Verifikasi data berhasil
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

        <div className="absolute -bottom-12 -left-3/4 w-fit text-center">
          <Typography variant="bs" weight="bold" className="whitespace-nowrap">
            Pendaftaran Berhasil
          </Typography>

          <Typography
            variant="c"
            weight="regular"
            className="whitespace-nowrap"
          >
            Berhasil Mengisi Data Diri
          </Typography>
        </div>
      </div>
    </div>
  );
}
