import { Request, Response, NextFunction } from 'express';
import { Book, CreateBookRequest, UpdateBookRequest,
BookResponse, BooksListResponse } from '../types/book.types';
import * as bookService from '../services/book.service';
export async function getAllBooks(req: Request, res: 
Response<BooksListResponse>, next: NextFunction) {
  try {
    const books = await bookService.getAllBooks();
    res.json({
      books,
      message: 'Books retrieved successfully',
    });
  } catch (error) {
    next(error);
  }
}
export async function getBookById(req: Request, res: 
Response<BookResponse>, next: NextFunction) {
  try {
    const { id } = req.params;
    const book = await bookService.getBookById(parseInt(id));
    res.json({
      book,
      message: 'Book retrieved successfully'
    });
  } catch (error) {
    next(error);
  }
}

export async function getBookBySection(req: Request, res: 
Response<BooksListResponse>, next: NextFunction) {
  try {
    const { section } = req.params;
    const book = await bookService.getBookBySection(section);
    res.json({
      books: book,
      message: 'Book retrieved successfully'
    });
  } catch (error) {
    next(error);
  }
}


export async function createBook(
   req: Request<{}, BookResponse, CreateBookRequest>,
   res: Response<BookResponse>,
   next: NextFunction
) {
  try {
    const newBook = await bookService.createBook(req.body);
    res.status(201).json({
      book: newBook,
      message: 'Book created successfully'
    });
  } catch (error) {
    next(error);
  }
}
export async function updateBook(
  req: Request<{ id: string }, BookResponse , UpdateBookRequest >,
  res: Response<BookResponse>,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const updatedBook = await 
bookService.updateBook(parseInt(id), req.body);
    res.json({
      book: updatedBook,
      message: 'Book updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteBook(
  req: Request<{ id: string }>,
  res: Response<{ message: string }>,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    await bookService.deleteBook(parseInt(id));

    res.json({
      message: 'Book deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}


 