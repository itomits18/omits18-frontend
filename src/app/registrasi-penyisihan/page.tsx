'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { CheckCircle, Search, XCircle } from 'lucide-react';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { useParticipantRegistration } from './hooks/useChangeRegistered';

const DisplayField = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <Typography
      variant="p"
      font="Lora"
      weight="semibold"
      className="text-additions-brown-200"
    >
      {label}
    </Typography>
    <div className="w-full rounded-md border bg-gray-100 px-3 py-2 text-gray-900 shadow-inner">
      {value || '-'}
    </div>
  </div>
);

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    isSearching,
    isUpdating,
    foundParticipant,
    searchError,
    searchParticipant,
    markAsRegistered,
  } = useParticipantRegistration();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    searchParticipant(searchQuery);
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#EEE2DF] via-[#CFEBD1] to-green-100 p-4">
      <Image
        src="/images/registrasi-penyisihan/grass-mobile.png"
        width={390}
        height={219}
        alt="grass"
        className="absolute bottom-0 w-full md:hidden"
      />
      <Image
        src="/images/registrasi-penyisihan/cloud-mobile.png"
        width={390}
        height={369}
        alt="cloud"
        className="absolute top-0 md:hidden"
      />
      <Image
        src="/images/registrasi-penyisihan/stone-mobile.png"
        width={218}
        height={270}
        alt="stone"
        className="absolute bottom-[25%] left-0 md:hidden"
      />
      <Image
        src="/images/registrasi-penyisihan/rock-mobile.png"
        width={390}
        height={219}
        alt="rock"
        className="absolute right-0 bottom-4 w-full md:hidden"
      />
      <Image
        src="/images/registrasi-penyisihan/cloud-desktop.png"
        width={1440}
        height={561}
        alt="cloud"
        className="absolute top-0 hidden w-full md:block"
      />
      <Image
        src="/images/registrasi-penyisihan/grass-desktop.png"
        width={1440}
        height={324}
        alt="grass"
        className="absolute bottom-0 hidden w-full md:block xl:-bottom-8 2xl:-bottom-[5%]"
      />
      <Image
        src="/images/registrasi-penyisihan/rock-desktop.png"
        width={1060}
        height={246}
        alt="rock"
        className="absolute -bottom-[7%] hidden md:block xl:-bottom-[10%] 2xl:bottom-0 2xl:left-1/4"
      />
      <Image
        src="/images/registrasi-penyisihan/stone-desktop.png"
        width={431}
        height={435}
        alt="stone"
        className="absolute bottom-[13%] left-0 hidden md:block md:w-[331px] xl:bottom-[25%] xl:w-[380px] 2xl:w-[431px]"
      />
      <Image
        src="/images/registrasi-penyisihan/tree-desktop.png"
        width={386}
        height={441}
        alt="tree"
        className="absolute right-0 bottom-[10%] hidden md:block xl:bottom-[18%] 2xl:bottom-[25%]"
      />

      <div className="relative w-full max-w-4xl rounded-2xl bg-[#FFFDF0] p-6 shadow-2xl md:p-10">
        <Typography
          variant="h1"
          font="Cinzel"
          weight="black"
          className="bg-gradient-to-b from-green-300 via-[#6BA061] to-yellow-200 bg-clip-text text-center text-transparent max-md:text-4xl"
        >
          OMITS 18TH
        </Typography>
        <Typography
          variant="h5"
          font="Cinzel"
          weight="bold"
          className="text-additions-brown-200 mb-8 text-center"
        >
          REGISTRASI PESERTA
        </Typography>

        <form
          onSubmit={handleSearch}
          className="relative mx-auto mb-4 max-w-lg"
        >
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Masukkan Nomor Peserta (ex: 180101001)"
            className="h-12 w-full rounded-md border border-gray-300 bg-white px-4 pr-14 text-base shadow-sm focus:border-green-500 focus:ring-green-500"
            disabled={isSearching}
          />
          <Button
            type="submit"
            size="sm"
            className="absolute top-1/2 right-1 h-10 w-10 -translate-y-1/2 bg-green-300 hover:bg-green-400"
            disabled={isSearching}
          >
            {isSearching ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <Search size={20} />
            )}
          </Button>
        </form>

        {isSearching && (
          <div className="animate-pulse py-8 text-center text-gray-500">
            Mencari data peserta...
          </div>
        )}

        {searchError && !isSearching && (
          <div className="py-8 text-center font-semibold text-red-600">
            {searchError.message || 'Terjadi kesalahan saat mencari peserta.'}
          </div>
        )}

        {foundParticipant && !isSearching && (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
              <DisplayField label="Nama" value={foundParticipant.name} />
              <DisplayField
                label="Jenjang Kompetisi"
                value={foundParticipant.participant_detail.sub_type}
              />
              <DisplayField
                label="Nomor Peserta"
                value={foundParticipant.participant_number}
              />
              <DisplayField
                label="Region"
                value={foundParticipant.postal_detail.region}
              />
              <DisplayField
                label="Nama Sekolah"
                value={foundParticipant.instance_name.split('|')[0]}
              />
              <DisplayField
                label="Ruang Ujian"
                value={foundParticipant.instance_name.split('|')[1]}
              />
            </div>

            <div className="mt-8 text-center">
              {foundParticipant.participant_detail.status === 'SEMI_FINAL' ? (
                <Button
                  onClick={markAsRegistered}
                  disabled={isUpdating}
                  className="font-regular font-Lora w-full bg-[#9A3B3B] py-2 text-white hover:bg-[#802a2a] md:text-lg"
                >
                  {isUpdating ? 'Menyimpan...' : 'Tandai Telah Registrasi'}
                </Button>
              ) : foundParticipant.participant_detail.status ===
                'REGISTERED' ? (
                <div className="animate-in fade-in zoom-in-95 inline-flex items-center gap-2 text-lg font-semibold text-green-600">
                  <CheckCircle size={24} />
                  Peserta Telah Teregistrasi
                </div>
              ) : (
                <div className="animate-in fade-in zoom-in-95 text-additions-brown-200 inline-flex items-center gap-2 text-lg font-semibold">
                  <XCircle size={24} />
                  Peserta Tidak Terdaftar Final
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
