import { z } from 'zod';

export const RegistrationOMITS1 = z.object({
  bundle: z
    .string({
      required_error: 'Bundle wajib diisi',
      invalid_type_error: 'Bundle harus berupa string',
    })
    .refine((val) => ['Individu', 'bundle'].includes(val), {
      message: 'Pilih bundle yang valid',
    }),
  jenjangKompetisi: z
    .string({
      required_error: 'Jenjang kompetisi wajib diisi',
      invalid_type_error: 'Jenjang kompetisi harus berupa string',
    })
    .refine((val) => ['SD', 'SMP', 'SMA'].includes(val), {
      message: 'Pilih jenjang yang valid',
    }),
  nomorWali: z
    .string({
      required_error: 'Nomor wali wajib diisi',
      invalid_type_error: 'Nomor wali harus berupa string',
    })
    .min(9, 'Nomor wali minmal 9 angka')
    .max(20, 'Nomor wali maksimal 20 angka'),
  region: z.string().max(100, 'Region maksimal 100 karakter').optional(),
  kodePos: z
    .string({
      required_error: 'Kode pos wajib diisi',
      invalid_type_error: 'Kode pos harus berupa string',
    })
    .min(5, 'Kode pos minimal 5 karakter')
    .max(10, 'Kode pos maksimal 10 karakter')
    .regex(/^\d+$/, 'Kode pos harus berupa angka'),
  namaSekolah: z
    .string({
      required_error: 'Nama sekolah wajib diisi',
      invalid_type_error: 'Nama sekolah harus berupa string',
    })
    .min(1, 'Nama sekolah wajib diisi')
    .max(100, 'Nama sekolah maksimal 100 karakter'),
  alamatSekolah: z
    .string({
      required_error: 'Alamat sekolah wajib diisi',
      invalid_type_error: 'Alamat sekolah harus berupa string',
    })
    .min(1, 'Alamat sekolah wajib diisi')
    .max(200, 'Alamat sekolah maksimal 200 karakter'),
});

export const RegistrationOMITS2 = z.object({
  detail: z.array(
    z.object({
      email: z.string().email('Email tidak valid').optional(),
      namaLengkap: z
        .string()
        .min(3, 'Nama lengkap wajib diisi')
        .max(100, 'Nama lengkap maksimal 100 karakter'),
      nomorTelepon: z
        .string()
        .min(9, 'Nomor telepon minimal 9 angka')
        .max(20, 'Nomor telepon maksimal 20 angka'),
      nomorNISN: z
        .string()
        .min(3, 'Nomor NISN wajib diisi')
        .max(50, 'Nomor NISN maksimal 50 karakter'),
      buktiNISN: z.string(),
      // buktiNISN: z
      //   .union([z.string(), z.instanceof(File)])
      //   .transform((val) => (typeof val === 'string' ? val : '')),
    }),
  ),
});

export const RegistrationMISSION1 = z.object({
  namaKampus: z
    .string()
    .min(1, 'Nama kampus wajib diisi')
    .max(100, 'Nama kampus maksimal 100 karakter'),
  alamatKampus: z
    .string()
    .min(1, 'Alamat kampus wajib diisi')
    .max(200, 'Alamat kampus maksimal 200 karakter'),
});

export const RegistrationMISSION2 = z.object({
  detail: z.array(
    z.object({
      email: z.string().email('Email tidak valid'),
      namaLengkap: z
        .string()
        .min(3, 'Nama lengkap wajib diisi')
        .max(100, 'Nama lengkap maksimal 100 karakter'),
      nomorTelepon: z
        .string()
        .min(10, 'Nomor telepon minimal 10 angka')
        .max(20, 'Nomor telepon maksimal 20 angka'),
      nomorIdentitas: z
        .string()
        .min(3, 'Nomor identitas wajib diisi')
        .max(50, 'Nomor identitas maksimal 50 karakter'),
      kartuIdentitas: z.string(),
    }),
  ),
});
