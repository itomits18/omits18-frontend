import { z } from 'zod';

export const RegisterSchema = z
  .object({
    name: z.string().min(3, 'Nama lengkap wajib diisi'),
    email: z.string().email(),
    password: z.string().min(8, 'Password minimal 8 karakter'),
    konfirmasi: z.string(),
  })
  .refine((data) => data.password === data.konfirmasi, {
    message: 'Password dan konfirmasi password harus sama',
    path: ['konfirmasi'],
  });
