import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string()
    .min(1, { message: 'El nombre es obligatorio' })
    .max(50, { message: 'El nombre no puede exceder 50 caracteres' })
    .trim(),

  surname: z.string()
    .min(1, { message: 'El apellido es obligatorio' })
    .max(50, { message: 'El apellido no puede exceder 50 caracteres' })
    .trim(),

  email: z.string()
    .min(1, { message: 'El correo electrónico es obligatorio' })
    .max(50, { message: 'El correo electrónico no puede exceder 50 caracteres' })
    .email({ message: 'Correo electrónico inválido' })
    .trim(),

  password: z.string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    .max(50, { message: 'La contraseña no puede exceder 50 caracteres' })
    .trim(),

  dateOfBirth: z.string().datetime("Fecha inválida"),

  genreId: z.number()
    .int({ message: 'El ID de género debe ser un número entero' })
    .positive({ message: 'El ID de género debe ser positivo' }),
});

export const updateUserSchema = createUserSchema.partial();
