export interface Book {
  id: number;
  title: string;
  author: string;
  section: string;
}
export interface CreateBookRequest {
  title: string;
  author: string;
  section: string;
}
export interface UpdateBookRequest {
  title?: string;
  author?: string;
  section?: string;
}
export interface BookResponse {
  book: Book;
  message: string
}
export interface BooksListResponse {
  books: Book[];
  message: string;
}
