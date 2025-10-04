import { z } from 'zod';

// Schema untuk ResSoal
export const ResSoalSchema = z.object({
  correct_answer: z.boolean().nullable(),
  id: z.number(),
  user_answer: z.number().nullable(),
});

// Schema untuk PesertaSchema
export const PesertaSchema = z.object({
  category: z.number(),
  estimated_score: z.number().nullable(),
  nomor_peserta: z.string(),
  participant_name: z.string(),
  res_soal: z.array(ResSoalSchema),
  sisa_waktu: z.number(),
});

// Infer TypeScript types dari schema
export type ResSoal = z.infer<typeof ResSoalSchema>;
export type PesertaSchema = z.infer<typeof PesertaSchema>;
