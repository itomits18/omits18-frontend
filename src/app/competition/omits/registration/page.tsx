'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, CreditCard, IdCard } from 'lucide-react';
import React, { useState } from 'react';
import BackgroundImage from './container/BackgroundImageOmits';
import FormPage1 from './container/FormPage1';
import type { FormValues } from './container/FormPage1';
import FormPage2Individu from './container/FormPage2Individu';
import FormPage2Team from './container/FormPage2Team';
import FormPage3Individu from './container/FormPage3Individu';
import FormPage3Team from './container/FormPage3Team';

const steps = [
  { name: 'Data Pendaftar', description: 'Berhasil Mengisi Data Pendaftar' },
  { name: 'Data Peserta', description: 'Berhasil Mengisi Data Diri' },
];

export default function OmitsRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormValues>({});

  const handleNextStep = (dataFromStep: any) => {
    setFormData((prev) => ({ ...prev, ...dataFromStep }));
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const stepIcons: { [key: string]: React.ReactNode } = {
    'Data Pendaftar': <IdCard size={24} />,
    'Data Peserta': <CreditCard size={24} />,
  };

  const renderCurrentStepForm = () => {
    switch (currentStep) {
      case 1:
        return <FormPage1 onSubmit={handleNextStep} />;
      case 2:
        if (formData.bundle === 'Individu') {
          return (
            <FormPage2Individu
              onBack={handlePrevStep}
              onSubmit={handleNextStep}
            />
          );
        } else if (formData.bundle === 'bundle') {
          return (
            <FormPage2Team onBack={handlePrevStep} onSubmit={handleNextStep} />
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
              onSubmit={() => setCurrentStep(4)}
            />
          );
        } else if (formData.bundle === 'bundle') {
          return (
            <FormPage3Team
              formData={formData}
              onBack={handlePrevStep}
              onSubmit={() => setCurrentStep(4)}
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
          {currentStep < 3 && (
            <button
              className="absolute right-5 top-5 font-sans text-2xl text-gray-500 hover:text-gray-800"
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
