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
