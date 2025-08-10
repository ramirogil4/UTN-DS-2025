import { Book, CreateBookRequest, UpdateBookRequest } from '../types/book.types';
//Lista de libros
let books: Book[] = [
  { id: 1, title: '1984', author: 'George Orwell', section: 'Ciencia Ficción' },
  { id: 2, title: 'Dune', author: 'Frank Herbert', section: 'Ciencia Ficción' },
  { id: 3, title: 'La guerra de los mundos', author: 'H.G. Wells', section: 'Ciencia Ficción' },
  { id: 4, title: 'Fahrenheit 451', author: 'Ray Bradbury', section: 'Ciencia Ficción' },
  { id: 5, title: 'Yo, robot', author: 'Isaac Asimov', section: 'Ciencia Ficción' },
  { id: 6, title: 'La máquina del tiempo', author: 'H.G. Wells', section: 'Ciencia Ficción' },
  { id: 7, title: 'Asesinato en el Expreso Oriente', author: 'Agatha Christie', section: 'Crimen' },
  { id: 8, title: 'Muerte en el Nilo', author: 'Agatha Christie', section: 'Crimen' },
  { id: 9, title: 'Perdida', author: 'Gillian Flynn', section: 'Crimen' },
  { id: 10, title: 'La chica del tren', author: 'Paula Hawkings', section: 'Crimen' },
  { id: 11, title: 'El asesinato de Roger Ackroyd', author: 'Agatha Christie', section: 'Crimen' },
  { id: 12, title: 'El código Da Vinci', author: 'Dan Brown', section: 'Crimen' },
  { id: 13, title: 'El Principito', author: 'Antoine de Saint-Exupéry', section: 'Infantil' },
  { id: 14, title: 'Pinocho', author: 'Carlo Collodi', section: 'Infantil' },
  { id: 15, title: 'Caperucita Roja', author: 'Charles Perrault', section: 'Infantil' },
  { id: 16, title: 'Cenicienta', author: 'Charles Perrault', section: 'Infantil' },
  { id: 17, title: 'Jack y las habichuelas mágicas', author: 'Joseph Jacobs', section: 'Infantil' },
  { id: 18, title: 'El libro de la selva', author: 'Rudyard Kipling', section: 'Infantil' },
  { id: 19, title: 'El Aleph', author: 'Jorge Luis Borges', section: 'Clásicos Nacionales' },
  { id: 20, title: 'Martin Fierro', author: 'José Hernández', section: 'Clásicos Nacionales' },
  { id: 21, title: 'Facundo', author: 'Domingo Faustino Sarmiento', section: 'Clásicos Nacionales' },
  { id: 22, title: 'El túnel', author: 'Ernesto Sabato', section: 'Clásicos Nacionales' },
  { id: 23, title: 'Rayuela', author: 'Julio Cortázar', section: 'Clásicos Nacionales' },
  { id: 24, title: 'Ficciones', author: 'Jorge Luis Borges', section: 'Clásicos Nacionales' }
];
//Obtener todos los libros
export async function getAllBooks(): Promise<Book[]> {
  return books;
}

//Obtener un libro por ID
export async function getBookById(id: number): Promise<Book> {
  const book = books.find(b => b.id === id);
  if (!book) {
    const error = new Error('Book not found');
    (error as any).statusCode = 404;
    throw error;
  }
  return book;
}


//Obtener libros por sección
export async function getBookBySection(section: string): Promise<Book[]> {
  const filteredBooks = books.filter(
    b => b.section.toLowerCase() === section.toLowerCase()
  );

  if (filteredBooks.length === 0) {
    const error = new Error(`No books found in section: ${section}`);
    (error as any).statusCode = 404;
    throw error;
  }

  return filteredBooks;
}


//Crear un nuevo libro
export async function createBook(bookData: CreateBookRequest): 
Promise<Book> {
 const newBook: Book = {
   id: Math.max(...books.map(b => b.id)) + 1,
   ...bookData,
 };
 books.push(newBook);
 return newBook;
}

//Actualizar un libro existente
export async function updateBook(id: number, updateData: 
UpdateBookRequest): Promise<Book> {
 const bookIndex = books.findIndex(b => b.id === id);
 if (bookIndex === -1) {
   const error = new Error('Book not found');
   (error as any).statusCode = 404;
   throw error;
 }
 books[bookIndex] = { ...books[bookIndex], ...updateData };
 return books[bookIndex];
}

//Eliminar un libro por ID
export async function deleteBook(id: number): Promise<void> {
  const bookIndex = books.findIndex(b => b.id === id);
  if (bookIndex === -1) {
    const error = new Error('Book not found');
    (error as any).statusCode = 404;
    throw error;
  }
  books.splice(bookIndex, 1); 
}

