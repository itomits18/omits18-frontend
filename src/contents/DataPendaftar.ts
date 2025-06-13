export type Pendaftar = {
  id?: string;
  no?: number;
  name: string;
  tanggal: string;
  sekolah: string;
  status_pendaftar: string;
  detail: string;
};

export type Peserta = {
  fullname: string;
  identitas: string;
  phone_number: string;
  wali_phone_number: string;
};

export type PendaftarDetail = {
  id: string;
  no: number;
  name: string;
  tanggal: string;
  sekolah: string;
  status_pendaftar: 'PENDING' | 'VERIFIED' | 'REVISI' | 'REJECT';
  detail: string;
  jenjang: string;
  region: string;
  nama_sekolah: string;
  alamat_sekolah: string;
  provinsi: string;
  kota: string;
  peserta: Peserta;
};

export const pendaftarData: Pendaftar[] = [
  {
    id: '9daed83d-aace-497d-8632-9d25a2ad305d',
    no: 1,
    name: 'Ethan Carter',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 1 Jakarta',
    status_pendaftar: 'PENDING',
    detail: 'Lihat Detail',
  },
  {
    id: '48e420e5-a62d-4a80-b470-0ab58e33d975',
    no: 2,
    name: 'Ava Thompson',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 5 Surabaya',
    status_pendaftar: 'VERIFIED',
    detail: 'Lihat Detail',
  },
  {
    id: '4bd0a1c6-9d54-4cc0-9299-ee76e62f93f2',
    no: 3,
    name: 'Liam Anderson',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 3 Bandung',
    status_pendaftar: 'REVISI',
    detail: 'Lihat Detail',
  },
  {
    id: 'd312c847-4156-45db-9a2a-cb6ace8d76d3',
    no: 4,
    name: 'Isabella Moore',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 8 Yogyakarta',
    status_pendaftar: 'REJECT',
    detail: 'Lihat Detail',
  },
  {
    id: '266e3bde-8b45-42c5-95b6-015d3dd2b62a',
    no: 5,
    name: 'Noah Martinez',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 2 Malang',
    status_pendaftar: 'PENDING',
    detail: 'Lihat Detail',
  },
];

export const detailPendaftar: PendaftarDetail[] = [
  {
    id: '9daed83d-aace-497d-8632-9d25a2ad305d',
    no: 1,
    name: 'Ethan Carter',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 1 Jakarta',
    status_pendaftar: 'PENDING',
    detail: 'Lihat Detail',
    jenjang: 'SMA',
    region: 'Offline 2 - Jakarta dan sekitarnya',
    nama_sekolah: 'SMAN 1 Jakarta',
    alamat_sekolah: 'Jl. Merdeka No.1, Jakarta Pusat, DKI Jakarta 10110',
    provinsi: 'DKI Jakarta',
    kota: 'Jakarta Pusat',
    peserta: {
      fullname: 'Ethan Carter',
      identitas: '5012231001',
      phone_number: '081234567890',
      wali_phone_number: '082233445566',
    },
  },
  {
    id: '48e420e5-a62d-4a80-b470-0ab58e33d975',
    no: 2,
    name: 'Ava Thompson',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 5 Surabaya',
    status_pendaftar: 'VERIFIED',
    detail: 'Lihat Detail',
    jenjang: 'SMA',
    region: 'Offline 1 - Surabaya, Sidoarjo, dan Gresik',
    nama_sekolah: 'SMAN 5 Surabaya',
    alamat_sekolah: 'Jl. Kusuma Bangsa No.7, Surabaya, Jawa Timur 60136',
    provinsi: 'Jawa Timur',
    kota: 'Kota Surabaya',
    peserta: {
      fullname: 'Ava Thompson',
      identitas: '5012231002',
      phone_number: '082112223344',
      wali_phone_number: '083344556677',
    },
  },
  {
    id: '4bd0a1c6-9d54-4cc0-9299-ee76e62f93f2',
    no: 3,
    name: 'Liam Anderson',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 3 Bandung',
    status_pendaftar: 'REVISI',
    detail: 'Lihat Detail',
    jenjang: 'SMA',
    region: 'Offline 3 - Bandung Raya',
    nama_sekolah: 'SMAN 3 Bandung',
    alamat_sekolah: 'Jl. Belitung No.8, Bandung, Jawa Barat 40113',
    provinsi: 'Jawa Barat',
    kota: 'Kota Bandung',
    peserta: {
      fullname: 'Liam Anderson',
      identitas: '5012231003',
      phone_number: '085677889900',
      wali_phone_number: '087788990011',
    },
  },
  {
    id: 'd312c847-4156-45db-9a2a-cb6ace8d76d3',
    no: 4,
    name: 'Isabella Moore',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 8 Yogyakarta',
    status_pendaftar: 'REJECT',
    detail: 'Lihat Detail',
    jenjang: 'SMA',
    region: 'Offline 4 - DIY dan Jawa Tengah',
    nama_sekolah: 'SMAN 8 Yogyakarta',
    alamat_sekolah: 'Jl. Sidikan No.60, Umbulharjo, Yogyakarta 55161',
    provinsi: 'DI Yogyakarta',
    kota: 'Kota Yogyakarta',
    peserta: {
      fullname: 'Isabella Moore',
      identitas: '5012231004',
      phone_number: '081355779922',
      wali_phone_number: '082299887766',
    },
  },
  {
    id: '266e3bde-8b45-42c5-95b6-015d3dd2b62a',
    no: 5,
    name: 'Noah Martinez',
    tanggal: '2025-05-23',
    sekolah: 'SMAN 2 Malang',
    status_pendaftar: 'PENDING',
    detail: 'Lihat Detail',
    jenjang: 'SMA',
    region: 'Offline 1 - Surabaya, Sidoarjo, dan Gresik',
    nama_sekolah: 'SMAN 2 Malang',
    alamat_sekolah:
      'Jl. Laksamana Martadinata No.100, Malang, Jawa Timur 65111',
    provinsi: 'Jawa Timur',
    kota: 'Kota Malang',
    peserta: {
      fullname: 'Noah Martinez',
      identitas: '5012231005',
      phone_number: '082122334455',
      wali_phone_number: '083355667788',
    },
  },
];
