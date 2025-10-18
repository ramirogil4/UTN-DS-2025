import { getAllBooks } from './book.service';
import prisma from '../config/prisma';

jest.mock('../config/prisma', () => ({
  book: {
    findMany: jest.fn(),
  },
}));

describe('BookService - getAllBooks', () => {
  test('debe retornar todos los libros, incluyendo los objetos Author y Genre', async () => {
    // ARRANGE
    const mockBooks = [
      { 
        id: 1, 
        title: 'Cien años de soledad',
        genreId: 10,
        authorId: 1,
        author: { id: 1, name: 'Gabriel García Márquez' },
        genre: { id: 10, name: 'Realismo Mágico' }
      },
      { 
        id: 2, 
        title: '1984',
        genreId: 20,
        authorId: 2,
        author: { id: 2, name: 'George Orwell' },
        genre: { id: 20, name: 'Distopía' }
      },
    ];

    (prisma.book.findMany as jest.Mock).mockResolvedValue(mockBooks);

    // ACT
    const result = await getAllBooks();

    // ASSERT
    expect(result).toEqual(mockBooks);
    expect(prisma.book.findMany).toHaveBeenCalledWith({
      orderBy: { id: 'asc' },
      include: { author: true, genre: true },
    });
    expect(prisma.book.findMany).toHaveBeenCalledTimes(1);
  });
});