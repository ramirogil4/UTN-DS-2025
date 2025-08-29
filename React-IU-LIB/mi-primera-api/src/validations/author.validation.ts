import { z } from 'zod';

export const createAuthorSchema = z.object({
 name: z.string()
   .min(1, 'El nombre es obligatorio')
   .max(50, 'El nombre no puede exceder 50 caracteres')
   .trim(),
 surname: z.string()
   .min(1, 'El apellido es obligatorio')
   .max(50, 'El apellido no puede exceder 50 caracteres')
   .trim(),
});

export const updateAuthorSchema = createAuthorSchema.partial();