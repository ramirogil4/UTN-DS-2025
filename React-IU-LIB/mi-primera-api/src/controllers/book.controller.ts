import { Request, Response, NextFunction } from 'express';
import * as bookService from '../services/book.service';

// Obtener todos los libros
export async function getAllBooks(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const books = await bookService.getAllBooks();
    res.json({ success: true, data: books });
  } catch (error) { next(error); }
}

// Obtener un libro por ID
export async function getBookById(req: Request, res: 
Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id);
    const book = await bookService.getBookById(id);
    res.json({ success: true, data: book });
  } catch (error) { next(error); }
}

// Obtener libros por género
export async function getBookByGenreId(req: Request, res: 
Response, next: NextFunction) {
  try {
    const genre = parseInt(req.params.id);
    const book = await bookService.getBookByGenreId(genre);
    res.json({ success: true, data: book });
  } catch (error) { next(error); }
}

// Crear un nuevo libro
export async function createBook(req: Request, res: 
Response, next: NextFunction) {
  try {
    const book = await bookService.createBook(req.body);
    res.status(201).json({ success: true, message: 'Book created successfully', data: book });
  } catch (error) { next(error); }
}

// Actualizar un libro existente
export async function updateBook(req: Request, res: 
Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id);
    const book = await bookService.updateBook(id, 
req.body);
    res.json({ success: true, message: 'Book updated successfully', data: book });
  } catch (error) { next(error); }
}

// Eliminar un libro por ID
export async function deleteBook(req: Request, res: 
Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id);
    await bookService.deleteBook(id);
    res.json({ success: true, message: 'Book deleted successfully' });
  } catch (error) { next(error); }
}
