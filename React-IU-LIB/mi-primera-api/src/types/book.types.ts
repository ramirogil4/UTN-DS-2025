export interface Book {
  id: number;
  title: string;
  authorId: number;
  genreId: number; 
}

export interface CreateBookRequest {
  title: string;
  authorId: number;
  genreId: number;
}

export interface UpdateBookRequest {
  title?: string;
  authorId?: number;
  genreId?: number;
}

export interface BookResponse {
  book: Book;
  message: string;
}

export interface BooksListResponse {
  books: Book[];
  message: string;
}
