'use client';

import useParticipantStore from '@/app/store/useParticipantStore';
import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import {
  PaymentRegistration,
  RegistrationForm,
} from '@/types/registrationForm';
import {
  RegistrationMISSION1,
  RegistrationMISSION2,
} from '@/validation/RegistrationSchema';
import { Check, CreditCard, IdCard } from 'lucide-react';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';
import usePayment from '../../hooks/usePayment';
import useRegistration from '../../hooks/useRegistration';
import BackgroundImage from './container/BackgroundImage';
import FormPage1 from './container/FormPage1';
import FormPage2 from './container/FormPage2';
import FormPage3 from './container/FormPage3';

const steps = [
  { name: 'Data Kampus', description: 'Berhasil Mengisi Data Kampus' },
  { name: 'Data Peserta', description: 'Berhasil Mengisi Data Diri' },
];

export type missionFormDataType = z.infer<typeof RegistrationMISSION1> &
  z.infer<typeof RegistrationMISSION2>;

export default function MissionRegistrationPage() {
  const { participant } = useParticipantStore();

  const isRegistered = participant.length > 0;

  if (isRegistered) {
    return redirect('/dashboard/kompetisi');
  }

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<missionFormDataType>({
    namaKampus: '',
    alamatKampus: '',
    detail: [
      {
        email: '',
        namaLengkap: '',
        nomorTelepon: '',
        nomorIdentitas: '',
        kartuIdentitas: '',
      },
    ],
  });
  const [payment, setPayment] = useState('');

  const save_data = () => {
    const om1 = localStorage.getItem('ms_sd1');
    const om2 = localStorage.getItem('ms_sd2');

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
    'Data Kampus': <IdCard size={24} />,
    'Data Peserta': <CreditCard size={24} />,
  };

  const { mutateAsync, isPending: PendingBundle } = useRegistration('bundle');
  const { mutateAsync: MutatePayment, isPending: PendingPayment } =
    usePayment();

  const FinalSubmit = () => {
    const participantsTeam: RegistrationForm[] = [];
    formData.detail?.map((user) => {
      participantsTeam.push({
        name: user.namaLengkap as string,
        user_id: null,
        email: user.email as string,
        phone: (formData.detail && formData.detail[0].nomorTelepon) as string,
        participant_detail: {
          student_id: user.nomorIdentitas as string,
          student_id_url: user.kartuIdentitas,
        },
      });
    });

    const finalDataTeam = {
      type: 'MISSION',
      status: 'PAYMENT',
      postal: 60111,
      instance_name: formData.namaKampus as string,
      instance_address: formData.alamatKampus as string,
      sub_type: 'MISSION',
      participants: participantsTeam,
    };

    mutateAsync(finalDataTeam).then((res) => {
      const FinalDataPayment: PaymentRegistration = {
        payment_method: payment,
        competition_type: 'MISSION',
        competition_sub_type: 'MISSION',
        details: [
          {
            participant_id: res.created_participants[0].id,
            participant_name: (formData.detail &&
              formData.detail[0].namaLengkap) as string,
            participant_student_id: (formData.detail &&
              formData.detail[0].nomorIdentitas) as string,
          },
          {
            participant_id: res.created_participants[1].id,
            participant_name: (formData.detail &&
              formData.detail[1].namaLengkap) as string,
            participant_student_id: (formData.detail &&
              formData.detail[1].nomorIdentitas) as string,
          },
        ],
      };

      toast.success('Berhasil mendaftar MISSION.');

      MutatePayment(FinalDataPayment).then(() => {
        setTimeout(() => {
          toast.success('Berhasil memuat link pembayaran.');

          localStorage.removeItem('ms_sd1');
          localStorage.removeItem('ms_sd2');
        }, 2000);
      });
    });
  };

  const renderCurrentStepForm = () => {
    switch (currentStep) {
      case 1:
        return <FormPage1 onNext={handleNextStep} setFormData={setFormData} />;
      case 2:
        return (
          <FormPage2
            onBack={handlePrevStep}
            onNext={handleNextStep}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <FormPage3
            formData={formData}
            onBack={handlePrevStep}
            onSubmit={FinalSubmit}
            setPayment={setPayment}
            loadingPayment={PendingBundle || PendingPayment}
          />
        );
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-[#4374B1] to-[#F8ECB1]">
      <BackgroundImage />
      <div className="pointer-events-none absolute inset-0 bg-[#000] opacity-40"></div>
      <div className="flex min-h-screen w-full items-center justify-center p-4">
        <div
          className={cn(
            'relative w-full max-w-4xl',
            currentStep < 3
              ? 'rounded-2xl bg-white p-6 shadow-2xl md:p-10'
              : 'p-0 xl:max-w-5xl 2xl:max-w-6xl',
          )}
        >
          {currentStep < 3 && (
            <button
              className="absolute top-5 right-5 font-sans text-2xl text-gray-500 hover:text-gray-800"
              aria-label="Tutup"
            >
              &times;
            </button>
          )}
          <div className="flex flex-col items-center">
            {currentStep < 3 && (
              <Typography
                variant="h1"
                font="Cinzel"
                weight="black"
                className="mb-10 tracking-wider text-[#244D80] [text-shadow:_3px_3px_5px_rgba(0,0,0,0.2)] max-md:text-4xl"
              >
                MISSION
              </Typography>
            )}

            {currentStep < 3 && (
              <div className="flex w-full items-start justify-center">
                {steps.map((step, index) => {
                  const stepNumber = index + 1;
                  const isActive = stepNumber === currentStep;
                  const isCompleted = stepNumber < currentStep;
                  const activeColor = 'text-green-300';
                  const activeBgBorderColor = 'bg-green-300 border-green-300';

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
                            className={`h-1 w-full rounded-full transition-colors duration-300 ${isCompleted ? 'bg-green-300' : 'bg-gray-300'}`}
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
