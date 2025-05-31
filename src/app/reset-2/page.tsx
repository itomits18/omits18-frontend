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

      {/*Frame*/}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-[#577866] text-[#FFFFFF] px-8 py-6 rounded-lg shadow-md w-80 md:w-[450px] md:h-[500px] font-Lora z-30 opacity-90"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 mt-3 [text-shadow:_0_2px_4px_rgba(0,0,0,1)]">
          Reset Password
        </h2>
        <h5 className="text-sm md:text-lg text-center mb-2">
          Silahkan masukkan password baru
        </h5>

        <h3 className="text-xl md:text-2xl">Password *</h3>

        <FormProvider {...methods}>
          <form
            className="mt-2 w-full space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="password"
              placeholder="Masukkan Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none 
              focus:ring-2 focus:ring-[#37493E]"
              required
            />

            <h5 className="text-sm md:text-lg mb-3">
              *Password harus lebih dari 8 karakter berisi huruf besar, kecil,
              dan angka
            </h5>
            <h3 className="text-xl md:text-2xl md:mt-5">Konfirmasi Password</h3>

            <input
              type="password"
              placeholder="Masukkan kembali password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none 
              focus:ring-2 focus:ring-[#37493E] mb-3"
              required
            />

            <div className="flex flex-col space-y-3">
              <button
                type="submit"
                className="bg-[#E5B853] text-white py-2 rounded-md hover:bg-[#F6D588] 
                transition-colors md:mt-3"
              >
                Reset Password
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 mt-3 md:mt-7">
              <a href="/signin" className="text-sm md:text-xl text-[#FFFFFF]">
                Kembali ke halaman
              </a>

              <button className="text-sm md:text-xl text-[#E5B853] hover:underline">
                Sign in
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
