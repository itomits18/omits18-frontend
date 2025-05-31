'use client';
import Image from 'next/image';
import { FormProvider, useForm } from 'react-hook-form';

export default function ResetPassword() {
  const methods = useForm({
    mode: 'onBlur',
    // resolver: zodResolver(LoginSchema),
  });

  const { handleSubmit } = methods;

  // const { mutate, isPending } = useLoginMutation();

  const onSubmit = () => {
    // mutate(data);
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/*Mobile*/}
      <Image
        src="/images/password/iphone.png"
        fill
        alt="background-1"
        className="absolute object-cover md:hidden"
      />

      {/*Desktop*/}
      <Image
        src="/images/password/Rectangle 2.png"
        fill
        alt="background-1"
        className="absolute object-cover hidden md:block"
      />

      <Image
        src="/images/password/Asset 89 1.png"
        width={1325}
        height={401}
        alt="tanah"
        className="absolute bottom-0 z-10 hidden md:block"
      />

      <Image
        src="/images/password/Group 1.png"
        width={1440}
        height={378}
        alt="awan"
        className="absolute hidden md:block"
      />

      <Image
        src="/images/password/Group 3.png"
        width={600}
        height={838}
        alt="bottom-1"
        className="absolute bottom-0 hidden z-20 md:block"
      />

      <Image
        src="/images/password/Group 4.png"
        width={729}
        height={601}
        alt="bottom-2"
        className="absolute bottom-0 right-0 z-20 hidden md:block"
      />

      <Image
        src="/images/password/Group 5.png"
        width={1440}
        height={691}
        alt="bush"
        className="absolute bottom-[10%] z-0 hidden md:block"
      />

      <Image
        src="/images/password/Group 6.png"
        width={745}
        height={494}
        alt="castle-1"
        className="absolute bottom-[30%] z-10 right-[40%] hidden md:block"
      />

      <Image
        src="/images/password/Group 7.png"
        width={500}
        height={441}
        alt="castle-2"
        className="absolute bottom-[25%] z-10 left-[50%] hidden md:block"
      />

      <FormProvider {...methods}>
        <form
          className="mt-2 w-full space-y-4 md:space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/*Frame*/}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            bg-[#577866] text-[#FFFFFF] px-8 py-6 rounded-lg shadow-md w-80 h-[250px] md:w-[450px] md:h-[400px] font-Lora z-30 opacity-90"
          >
            <h2 className="text-2xl md:text-4xl md:mb-10 font-bold text-center mb-2 mt-10 [text-shadow:_0_2px_4px_rgba(0,0,0,1)]">
              Password Reset Successful
            </h2>

            <h5 className="text-sm md:text-lg text-center md:mb-10 mb-2">
              Sekarang kamu bisa masuk dengan kata sandi yang baru
            </h5>

            <button
              type="submit"
              className="w-full py-2 bg-[#E5B853] text-white rounded-lg
               hover:bg-[#F6D588] transition-colors text-xs md:text-base"
            >
              Go to Login
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
