import { z } from 'zod';

export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Password minimal 8 karakter')
      .max(100, 'Password terlalu panjang'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Konfirmasi password tidak cocok',
    path: ['confirmPassword'],
  });

export type ResetPasswordValues = z.infer<typeof ResetPasswordSchema>;
