import prisma from "../config/prisma";
import { User } from "../generated/prisma"; 

//Obtener todos los usuarios
export async function getAllUsers(): Promise<User[]> {
  const users = await prisma.user.findMany({
    orderBy: { id: 'asc' },
    include: { genre: true }, 
  });
  return users;
}

//Obtener un usuario por ID
export async function getUserById(id: number): Promise<User> {
  const user = await prisma.user.findUnique({
    where: { id },
    include: { genre: true },
    }) 
  if (!user) {
    const error = new Error('User not found');
    (error as any).statusCode = 404;
    throw error;
  }
  return user;
}

//Crear un nuevo usuario
export async function createUser(data: { name: string, surname: string, email: string, password: string, dateOfBirth: Date, genreId: number}): Promise<User> {
  //Verificar que el autor existe:
  const genreExists  = await prisma.genre.findUnique ({ where: { id: 
data.genreId } });
  if (!genreExists ) {
    const error = new Error('Genre not found' ) as any;
    error.statusCode  = 404;
    throw error;
  }
  // Crear el libro
  return prisma.user.create({ data, include: { genre: true } });
}

//Actualizar un usuario existente
export async function updateUser(id: number, data: Partial<User>): Promise<User>{
 try {
   return await prisma.user.update({ where: { id }, data, include: { genre: true } });
 } catch (e: any) {
   if (e.code === 'P2025') {
     const error = new Error('User not found') as any;
     error.statusCode  = 404;
     throw error;
   }
   throw e;
 }
}

//Eliminar un usuario por ID
export async function deleteUser(id: number): Promise<void> {
  try {
    await prisma.user.delete({
      where: { id },
    });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('User not found');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}

