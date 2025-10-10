import prisma from "../config/prisma";
import { Genre } from '@prisma/client'; 

//Obtener todos los generos
export async function getAllGenres(): Promise<Genre[]> {
  const genres = await prisma.genre.findMany({
    orderBy: { id: 'asc' },
  });
  return genres;
}

//Obtener un genero por ID
export async function getGenreById(id: number): Promise<Genre> {
  const genre = await prisma.genre.findUnique({
    where: { id }});
  if (!genre) {
    const error = new Error('Genre not found');
    (error as any).statusCode = 404;
    throw error;
  }
  return genre; 
}

//Crear un nuevo genero
export async function createGenre(data: { name: string;}): Promise<Genre> {
  // Crear el genero
  return prisma.genre.create({ data });
}
  
//Actualizar un genero existente
export async function updateGenre (id: number, data: Partial<Genre>): 
Promise<Genre> {
 try {
   return await prisma.genre.update({ where: { id }, data });
 } catch (e: any) {
   if (e.code === 'P2025') {
     const error = new Error('Genre not found') as any;
     error.statusCode  = 404;
     throw error;
   }
   throw e;
 }
}

//Eliminar un genero por ID
export async function deleteGenre(id: number): Promise<void> {
  try {
    await prisma.genre.delete({
      where: { id },
    });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Genre not found');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}

