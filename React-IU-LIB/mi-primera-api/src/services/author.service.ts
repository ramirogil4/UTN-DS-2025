import prisma from "../config/prisma";
import { Author } from '@prisma/client'; 

//Obtener todos los autores
export async function getAllAuthors(): Promise<Author[]> {
  const authors = await prisma.author.findMany({
    orderBy: { id: 'asc' },
  });
  return authors;
}

//Obtener un autor por ID
export async function getAuthorById(id: number): Promise<Author> {
  const author = await prisma.author.findUnique({
    where: { id }});
  if (!author) {
    const error = new Error('Author not found');
    (error as any).statusCode = 404;
    throw error;
  }
  return author;
}

//Crear un nuevo autor
export async function createAuthor(data: {name: string; surname: string; }): Promise<Author> {
  return prisma.author.create({ data });
}

//Actualizar un autor existente
export async function updateAuthor (id: number, data: Partial<Author>): 
Promise<Author> {
 try {
   return await prisma.author.update({ where: { id }, data });
 } catch (e: any) {
   if (e.code === 'P2025') {
     const error = new Error('Book not found') as any;
     error.statusCode  = 404;
     throw error;
   }
   throw e;
 }
}

//Eliminar un autor por ID
export async function deleteAuthor(id: number): Promise<void> {
  try {
    await prisma.author.delete({
      where: { id },
    });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Author not found');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}

