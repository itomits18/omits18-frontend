export type Pendaftar = {
  id?: string;
  no?: number;
  name: string;
  tanggal: string;
  sekolah: string;
  status_pendaftar: string;
  detail: string;
};

export const pendaftarData: Pendaftar[] = [
  {
    no: 1,
    name: 'Addien Zakia Hidayat',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 1 BATAM',
    status_pendaftar: 'PENDING',
    detail: 'Lihat Detail',
  },
  {
    no: 2,
    name: 'Addien Zakia Hidayat',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 1 BATAM',
    status_pendaftar: 'VERIFIED',
    detail: 'Lihat Detail',
  },
  {
    no: 3,
    name: 'Addien Zakia Hidayat',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 1 BATAM',
    status_pendaftar: 'REVISI',
    detail: 'Lihat Detail',
  },
  {
    no: 4,
    name: 'Addien Zakia Hidayat',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 1 BATAM',
    status_pendaftar: 'REJECT',
    detail: 'Lihat Detail',
  },
  {
    no: 5,
    name: 'Addien Zakia Hidayat',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 1 BATAM',
    status_pendaftar: 'PENDING',
    detail: 'Lihat Detail',
  },
];

export const DetailPendaftar = {
  jenjang: 'SMA',
  region: 'Offline 1 - Surabaya, Sidoarjo, dan Gresik',
  nama_sekolah: 'SMAN 1 Batam',
  alamat_sekolah:
    'Asrama Mahasiswa ITS, Jl. Teknik Elektro, Keputih, Sukolilo, Surabaya, East Java 60111',
  provinsi: 'Jawa Timur',
  kota: 'Kota Surabaya',
  peserta: {
    fullname: 'Addien Zakia Hidayat',
    identitas: '5002231063',
    phone_number: '0895331931186',
    wali_phone_number: '08123456789',
  },
};
