import { z } from 'zod';

export const createGenreSchema = z.object({
 name: z.string()
   .min(1, 'El nombre es obligatorio')
   .max(50, 'El nombre no puede exceder 50 caracteres')
   .trim(),
});

export const updateGenreSchema = createGenreSchema.partial();