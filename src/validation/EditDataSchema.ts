import { z } from 'zod';

export const EditDataSchema = z.object({
  jenjang: z.string().min(1, 'Jenjang wajib diisi'),
  region: z.string().min(1, 'Region wajib diisi'),
  nama_sekolah: z.string().min(1, 'Nama Sekolah wajib diisi'),
  alamat_sekolah: z.string().min(1, 'Alamat Sekolah wajib diisi'),
  provinsi: z.string().min(1, 'Provinsi wajib diisi'),
  kota: z.string().min(1, 'Kota/Kabupaten wajib diisi'),
  fullname: z.string().min(1, 'Nama Lengkap wajib diisi'),
  identitas: z.string().min(1, 'Nomor Identitas wajib diisi'),
  wali_phone_number: z.string().min(1, 'Nomor Wali wajib diisi'),
  proof_identitas: z.string().min(1, 'Bukti kartu identitas wajib diisi'),
  phone_number: z
    .string()
    .min(1, 'Nomor Telpon wajib diisi')
    .regex(/^08[0-9]{8,11}$/, 'Nomor Telpon tidak valid'), // contoh validasi no HP Indonesia
});
