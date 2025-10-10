import prisma from "../config/prisma";
import { Book } from '@prisma/client';

// Obtener todos los libros
export async function getAllBooks(): Promise<Book[]> {
  const books = await prisma.book.findMany({
    orderBy: { id: 'asc' },
    include: { author: true, genre: true }, 
  });
  return books;
}

// Obtener un libro por ID
export async function getBookById(id: number): Promise<Book> {
  const book = await prisma.book.findUnique({
    where: { id },
    include: { author: true, genre: true },
  });

  if (!book) {
    const error = new Error('Book not found');
    (error as any).statusCode = 404;
    throw error;
  }
  return book;
}

// Obtener libros por género
export async function getBookByGenreId(genreId: number): Promise<Book[]> {
  const filteredBooks = await prisma.book.findMany({
    where: { genreId },
    include: { author: true, genre: true },
  });

  if (filteredBooks.length === 0) {
    const error = new Error(`No books found with genreId: ${genreId}`);
    (error as any).statusCode = 404;
    throw error;
  }

  return filteredBooks;
}

// Crear un nuevo libro
export async function createBook(data: { title: string; authorId: number; genreId: number; }): Promise<Book> {

  //Verificar que el autor existe:
  const authorExists  = await prisma.author.findUnique ({ where: { id: 
data.authorId } });
  if (!authorExists ) {
    const error = new Error('Author not found' ) as any;
    error.statusCode  = 404;
    throw error;
  }
  // Crear el libro
  return prisma.book.create({ data, include: { author: true } });
}


// Actualizar un libro existente
export async function updateBook (id: number, data: Partial<Book>): 
Promise<Book> {
 if (data.authorId) {
   const authorExists  = await prisma.author.findUnique ({ where: { 
id: data.authorId } });
   if (!authorExists ) {
     const error = new Error('Author not found' ) as any;
     error.statusCode  = 404;
     throw error;
   }
 }
 try {
   return await prisma.book.update({ where: { id }, data, include: { 
author: true } });
 } catch (e: any) {
   if (e.code === 'P2025') {
     const error = new Error('Book not found') as any;
     error.statusCode  = 404;
     throw error;
   }
   throw e;
 }
}

// Eliminar un libro por ID
export async function deleteBook(id: number): Promise<void> {
  try {
    await prisma.book.delete({
      where: { id },
    });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Book not found');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}
