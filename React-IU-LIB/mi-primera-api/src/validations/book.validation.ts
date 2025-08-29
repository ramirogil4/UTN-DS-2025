import { z } from 'zod';

export const createBookSchema = z.object({
 title: z.string()
   .min(1, 'El título es obligatorio')
   .max(50, 'El título no puede exceder 50 caracteres')
   .trim(),
 authorId: z.number()
   .int('ID de autor inválido')
   .positive('ID de autor debe ser positivo'),
 genreId: z.number()
   .int('ID de género inválido')
   .positive('ID de genero debe ser positivo'),
});
// Schema para actualizar (todos los campos opcionales)
export const updateBookSchema = createBookSchema.partial();
