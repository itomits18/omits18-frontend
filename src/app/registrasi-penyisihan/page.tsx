'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { CheckCircle, Search } from 'lucide-react';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

type ParticipantData = {
  id: string;
  nama: string;
  jenjang: string;
  nomorPeserta: string;
  region: string;
  namaSekolah: string;
  sudahRegistrasi: boolean;
};

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

export default function page() {
  const [participantsDB, setParticipantsDB] = useState<ParticipantData[]>([
    {
      id: '12345',
      nama: 'Cristiano Ronaldo',
      jenjang: 'SMA',
      nomorPeserta: '170502002',
      region: 'Offline 1 - Surabaya',
      namaSekolah: 'SMA Negeri Surabaya',
      sudahRegistrasi: false,
    },
    {
      id: '67890',
      nama: 'Lamine Yamal',
      jenjang: 'SMP',
      nomorPeserta: '210304005',
      region: 'Offline 2 - Sidoarjo dan Pasuruan',
      namaSekolah: 'SMP Negeri 1 Sidoarjo',
      sudahRegistrasi: false,
    },
    {
      id: '11223',
      nama: 'Lionel Messi',
      jenjang: 'SD',
      nomorPeserta: '190807011',
      region: 'Online 2 - DI Yogyakarta dan Jawa Tengah',
      namaSekolah: 'SD Negeri 1 Yogyakarta',
      sudahRegistrasi: true,
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [foundParticipant, setFoundParticipant] =
    useState<ParticipantData | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;

    setIsLoading(true);
    setFoundParticipant(null);
    setSearchError(null);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const query = searchQuery.trim();
    const result = participantsDB.find(
      (participant) =>
        participant.nama.toLowerCase() === query.toLowerCase() ||
        participant.nomorPeserta === query,
    );

    if (result) {
      setFoundParticipant(result);
    } else {
      setSearchError(
        'Peserta tidak ditemukan, Periksa kembali nama atau nomor peserta.',
      );
    }
    setIsLoading(false);
  };

  const handleMarkAsRegistered = async () => {
    if (!foundParticipant) return;
    setParticipantsDB((currentDB) =>
      currentDB.map((p) =>
        p.id === foundParticipant.id ? { ...p, sudahRegistrasi: true } : p,
      ),
    );
    setFoundParticipant((prev) =>
      prev ? { ...prev, sudahRegistrasi: true } : null,
    );
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
        className="absolute bottom-4 right-0 w-full md:hidden"
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
        className="absolute bottom-[10%] right-0 hidden md:block xl:bottom-[18%] 2xl:bottom-[25%]"
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
          className="mb-8 text-center text-additions-brown-200"
        >
          PARTICIPANT REGISTRATION
        </Typography>

        <form
          onSubmit={handleSearch}
          className="relative mx-auto mb-4 max-w-lg"
        >
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nomor peserta atau nama..."
            className="h-12 w-full rounded-md border border-gray-300 bg-white px-4 pr-14 text-base shadow-sm focus:border-green-500 focus:ring-green-500"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="sm"
            className="absolute right-1 top-1/2 h-10 w-10 -translate-y-1/2 bg-green-300 hover:bg-green-400"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <Search size={20} />
            )}
          </Button>
        </form>

        {isLoading && (
          <div className="animate-pulse py-8 text-center text-gray-500">
            Mencari data peserta...
          </div>
        )}

        {searchError && !isLoading && (
          <div className="py-8 text-center font-semibold text-red-600">
            {searchError}
          </div>
        )}

        {foundParticipant && !isLoading && (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <DisplayField label="Nama" value={foundParticipant.nama} />
              </div>
              <DisplayField
                label="Jenjang Kompetisi"
                value={foundParticipant.jenjang}
              />
              <DisplayField
                label="Nomor Peserta"
                value={foundParticipant.nomorPeserta}
              />
              <DisplayField label="Region" value={foundParticipant.region} />
              <DisplayField
                label="Nama Sekolah"
                value={foundParticipant.namaSekolah}
              />
            </div>

            <div className="mt-8 text-center">
              {!foundParticipant.sudahRegistrasi ? (
                <Button
                  onClick={handleMarkAsRegistered}
                  className="font-regular w-full bg-[#9A3B3B] py-2 font-Lora text-white hover:bg-[#802a2a] md:text-lg"
                >
                  Tandai Telah Registrasi
                </Button>
              ) : (
                <div className="animate-in fade-in zoom-in-95 inline-flex items-center gap-2 text-lg font-semibold text-green-600">
                  <CheckCircle size={24} />
                  Registrasi berhasil
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
