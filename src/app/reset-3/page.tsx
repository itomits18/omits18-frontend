import Image from 'next/image';

export default function ResetPassword() {
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
            bg-[#577866] text-[#FFFFFF] px-8 py-6 rounded-lg shadow-md w-80 md:w-[450px] md:h-[400px] font-Lora z-30 opacity-90"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 mt-3 [text-shadow:_0_2px_4px_rgba(0,0,0,1)]">
          Check Your Email!
        </h2>
        <h5 className="text-sm md:text-lg sm:text-center mb-2">
          Kami telah mengirimkan tautan untuk mengatur ulang password ke email
          yang Anda berikan
        </h5>

        <h3 className="text-xs md:text-xl mt-4 mb-5">email@gmail.com</h3>

        <h5 className="text-sm md:text-lg mb-2">
          Jika tidak ada email masuk, coba periksa folder sampah, spam, sosial,
          atau folder lainnya yang mungkin ada
        </h5>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6">
          <button
            type="button"
            className="px-3 py-2 border border-white rounded-lg text-white bg-transparent
               hover:bg-white/10 transition-colors text-xs md:text-base"
          >
            Ganti Alamat Email
          </button>

          <button
            type="submit"
            className="px-14 py-2 bg-[#E5B853] text-white rounded-lg
               hover:bg-[#F6D588] transition-colors text-xs md:text-base"
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
}
