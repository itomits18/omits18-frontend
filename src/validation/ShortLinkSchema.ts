import { z } from 'zod';

export const ShortLinkSchema = z.object({
  name: z.string().min(3, 'Minimal 3 karakter').max(30, 'Maksimal 30 karakter'),
  shorten_link: z.string(),
  original_link: z.string(),
});
