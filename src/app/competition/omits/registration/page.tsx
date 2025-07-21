'use client';

import useParticipantStore from '@/app/store/useParticipantStore';
import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  PaymentRegistration,
  RegistrationForm,
} from '@/types/registrationForm';
import {
  RegistrationOMITS1,
  RegistrationOMITS2,
} from '@/validation/RegistrationSchema';
import { Check, CreditCard, IdCard } from 'lucide-react';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';
import usePayment from '../../hooks/usePayment';
import useRegistration from '../../hooks/useRegistration';
import BackgroundImage from './container/BackgroundImageOmits';
import FormPage1 from './container/FormPage1';
import FormPage2Individu from './container/FormPage2Individu';
import FormPage2Team from './container/FormPage2Team';
import FormPage3Individu from './container/FormPage3Individu';
import FormPage3Team from './container/FormPage3Team';

export type formDataType = z.infer<typeof RegistrationOMITS1> &
  z.infer<typeof RegistrationOMITS2>;

const steps = [
  { name: 'Data Pendaftar', description: 'Berhasil Mengisi Data Pendaftar' },
  { name: 'Data Peserta', description: 'Berhasil Mengisi Data Diri' },
];

export default function OmitsRegistrationPage() {
  const { participant } = useParticipantStore();

  const isRegistered = participant.length > 0;
  const isRegisterMISSION =
    isRegistered &&
    participant.some((x) => x.participant_detail.type === 'MISSION');

  if (isRegistered && isRegisterMISSION) {
    return redirect('/dashboard/kompetisi');
  }

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<
    z.infer<typeof RegistrationOMITS1> & z.infer<typeof RegistrationOMITS2>
  >({
    bundle: 'Individu',
    jenjangKompetisi: 'SMA',
    nomorWali: '',
    region: undefined,
    kodePos: '',
    namaSekolah: '',
    alamatSekolah: '',
    detail: [
      {
        email: '',
        namaLengkap: '',
        nomorTelepon: '',
        nomorNISN: '',
        buktiNISN: '',
      },
    ],
  });
  const [payment, setPayment] = useState('');

  const save_data = () => {
    const om1 = localStorage.getItem('om_sd1');
    const om2 = localStorage.getItem('om_sd2');

    if (om1) {
      const data_om1 = JSON.parse(om1);
      setFormData((pre) => {
        return {
          ...pre,
          ...data_om1,
        };
      });
    }
    if (om2) {
      const data_om2 = JSON.parse(om2);
      setFormData((pre) => {
        return {
          ...pre,
          ...data_om2,
        };
      });
    }
  };

  const handleNextStep = () => {
    save_data();
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    save_data();
    setCurrentStep((prev) => prev - 1);
  };

  const stepIcons: { [key: string]: React.ReactNode } = {
    'Data Pendaftar': <IdCard size={24} />,
    'Data Peserta': <CreditCard size={24} />,
  };

  const { mutateAsync: MutateIndividu, isPending: PendingSingle } =
    useRegistration('single');
  const { mutateAsync: MutateBundle, isPending: PendingBundle } =
    useRegistration('bundle');
  const { mutateAsync: MutatePayment, isPending: PendingPayment } =
    usePayment();

  const finalSubmit = () => {
    const finalDataIndividu: RegistrationForm = {
      name: (formData.detail && formData.detail[0].namaLengkap) as string,
      user_id: null,
      email: (formData.detail && formData.detail[0].email) as string,
      postal: parseInt(formData.kodePos || '1') as number,
      phone: (formData.detail && formData.detail[0].nomorTelepon) as string,
      instance_name: formData.namaSekolah as string,
      instance_address: formData.alamatSekolah as string,
      participant_detail: {
        student_id: (formData.detail && formData.detail[0].nomorNISN) as string,
        student_id_url: (formData.detail &&
          formData.detail[0].buktiNISN) as string,
        status: 'PAYMENT',
        type: 'OMITS',
        sub_type: formData.jenjangKompetisi as string,
      },
    };

    const FinalDataPaymentTeam: PaymentRegistration = {
      payment_method: payment,
      competition_type: 'OMITS',
      competition_sub_type: formData.jenjangKompetisi,
      details: [],
    };

    const participantsTeam: RegistrationForm[] = [];
    formData.detail?.map((user) => {
      participantsTeam.push({
        name: user.namaLengkap as string,
        user_id: null,
        email: user.email as string,
        phone: user.nomorTelepon as string,
        participant_detail: {
          student_id: user.nomorNISN as string,
          student_id_url: user.buktiNISN,
        },
      });
    });

    if (formData.bundle === 'Individu') {
      MutateIndividu(finalDataIndividu)
        .then((res) => {
          const FinalDataPaymentIndividu: PaymentRegistration = {
            payment_method: payment,
            competition_type: 'OMITS',
            competition_sub_type: formData.jenjangKompetisi,
            details: [
              {
                participant_id: res.id,
                participant_name: (formData.detail &&
                  formData.detail[0].namaLengkap) as string,
                participant_student_id: (formData.detail &&
                  formData.detail[0].nomorNISN) as string,
              },
            ],
          };

          toast.success('Berhasil mendaftar OMITS.');

          MutatePayment(FinalDataPaymentIndividu).then(() => {
            setTimeout(() => {
              toast.success('Berhasil memuat link pembayaran.');

              localStorage.removeItem('om_sd1');
              localStorage.removeItem('om_sd2');
            }, 2000);
          });
        })
        .catch(() => {
          toast.error('Gagal mendaftar OMITS.');
        });
    } else {
      // Bundle
      const findalDataTeam = {
        type: 'OMITS',
        sub_type: formData.jenjangKompetisi as string,
        postal: parseInt(formData.kodePos || '1') as number,
        instance_name: formData.namaSekolah as string,
        instance_address: formData.alamatSekolah as string,
        status: 'PAYMENT',
        participants: participantsTeam,
      };

      MutateBundle(findalDataTeam).then((res) => {
        formData.detail?.map((user, i) => {
          FinalDataPaymentTeam.details.push({
            participant_id: res.created_participants[i].id,
            participant_name: user.namaLengkap as string,
            participant_student_id: user.buktiNISN,
          });
        });

        toast.success('Berhasil mendaftar OMITS.');

        MutatePayment(FinalDataPaymentTeam).then(() => {
          setTimeout(() => {
            toast.success('Berhasil memuat link pembayaran.');

            localStorage.removeItem('om_sd1');
            localStorage.removeItem('om_sd2');
          }, 2000);
        });
      });
    }
  };

  const renderCurrentStepForm = () => {
    switch (currentStep) {
      case 1:
        return <FormPage1 onNext={handleNextStep} setFormData={setFormData} />;
      case 2:
        if (formData.bundle === 'Individu') {
          return (
            <FormPage2Individu
              onBack={handlePrevStep}
              onNext={handleNextStep}
              setFormData={setFormData}
            />
          );
        } else if (formData.bundle === 'bundle') {
          return (
            <FormPage2Team
              onBack={handlePrevStep}
              onNext={handleNextStep}
              setFormData={setFormData}
            />
          );
        } else {
          return (
            <div>
              <p className="text-center text-red-500">
                Terjadi kesalahan. Silakan kembali ke langkah 1 dan pilih jenis
                bundle.
              </p>
              <Button onClick={handlePrevStep} className="mx-auto mt-4 block">
                Kembali ke Langkah 1
              </Button>
            </div>
          );
        }
      case 3:
        if (formData.bundle === 'Individu') {
          return (
            <FormPage3Individu
              formData={formData}
              onBack={handlePrevStep}
              onSubmit={finalSubmit}
              setPayment={setPayment}
              loadingPayment={PendingPayment || PendingSingle}
            />
          );
        } else if (formData.bundle === 'bundle') {
          return (
            <FormPage3Team
              formData={formData}
              onBack={handlePrevStep}
              onSubmit={finalSubmit}
              setPayment={setPayment}
              loadingPayment={PendingBundle || PendingSingle}
            />
          );
        } else {
          return (
            <div>
              <p className="text-center text-red-500">
                Terjadi kesalahan. Silakan kembali ke langkah 1 dan pilih jenis
                bundle.
              </p>
              <Button onClick={handlePrevStep} className="mx-auto mt-4 block">
                Kembali ke Langkah 1
              </Button>
            </div>
          );
        }
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-green-300 to-[#F2EAC5]">
      <BackgroundImage />
      <div className="pointer-events-none absolute inset-0 bg-[#000] opacity-40"></div>
      <div className="flex min-h-screen w-full items-center justify-center p-4">
        <div
          className={cn(
            'relative w-full',
            currentStep < 3
              ? 'max-w-4xl rounded-2xl bg-white p-6 shadow-2xl md:p-10'
              : 'max-w-6xl p-0',
          )}
        >
          <div className="flex flex-col items-center">
            {currentStep < 3 && (
              <Typography
                variant="h1"
                font="Cinzel"
                weight="black"
                className="mb-10 tracking-wider text-green-300 [text-shadow:_3px_3px_5px_rgba(0,0,0,0.2)] max-md:text-4xl"
              >
                OMITS
              </Typography>
            )}

            {currentStep < 3 && (
              <div className="flex w-full items-start justify-center">
                {steps.map((step, index) => {
                  const stepNumber = index + 1;
                  const isActive = stepNumber === currentStep;
                  const isCompleted = stepNumber < currentStep;
                  const activeColor = 'text-blue-400';
                  const activeBgBorderColor = 'bg-blue-400 border-blue-400';

                  return (
                    <React.Fragment key={step.name}>
                      <div className="flex flex-col items-center gap-2 text-center">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                            isActive || isCompleted
                              ? `${activeBgBorderColor} text-white`
                              : 'border-gray-300 bg-gray-100 text-gray-400'
                          }`}
                        >
                          {isCompleted ? (
                            <Check size={24} />
                          ) : (
                            stepIcons[step.name] || (
                              <span className="text-lg font-bold">
                                {stepNumber}
                              </span>
                            )
                          )}
                        </div>
                        <div className="flex flex-col">
                          <Typography
                            as="p"
                            variant="b"
                            weight="bold"
                            className="text-gray-900 max-md:text-sm"
                          >
                            {step.name}
                          </Typography>
                          <Typography
                            as="p"
                            variant="c"
                            className={` ${isActive || isCompleted ? activeColor : 'text-gray-400'} max-md:text-xs`}
                          >
                            {step.description}
                          </Typography>
                        </div>
                      </div>

                      {index < steps.length - 1 && (
                        <div className="w-24 px-4 pt-5">
                          <div
                            className={`h-1 w-full rounded-full transition-colors duration-300 ${isCompleted ? 'bg-blue-400' : 'bg-gray-300'}`}
                          ></div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            )}
            {currentStep < 3 && (
              <hr className="my-8 w-full border-t border-gray-200" />
            )}
            <div className="w-full">{renderCurrentStepForm()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
