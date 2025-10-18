import { updateAuthor } from './author.service';
import prisma from '../config/prisma';

jest.mock('../config/prisma', () => ({
  author: {
    update: jest.fn(),
  },
}));

describe('AuthorService - updateAuthor', () => {

  test('debe actualizar el autor y retornar el objeto actualizado', async () => {
    // ARRANGE
    const authorId = 1;
    const updateData = { name: 'Gabriel' };
    const mockUpdatedAuthor = { 
      id: authorId, 
      name: 'Gabriel', 
      surname: 'García Márquez', 
      books: [] 
    };

    (prisma.author.update as jest.Mock).mockResolvedValue(mockUpdatedAuthor);

    // ACT
    const result = await updateAuthor(authorId, updateData);

    // ASSERT
    expect(result).toEqual(mockUpdatedAuthor);
    expect(prisma.author.update).toHaveBeenCalledWith({
      where: { id: authorId },
      data: updateData,
    });
    expect(prisma.author.update).toHaveBeenCalledTimes(1);
  });

  test('debe lanzar un error 404 (Book not found) si el autor no existe', async () => {
    // ARRANGE
    const authorId = 99;
    const updateData = { name: 'Inexistente' };
    const prismaError = { code: 'P2025' };
    
    (prisma.author.update as jest.Mock).mockRejectedValue(prismaError);

    // ACT & ASSERT
    await expect(updateAuthor(authorId, updateData)).rejects.toThrow('Book not found');
    await expect(updateAuthor(authorId, updateData)).rejects.toHaveProperty('statusCode', 404);
  });

  test('debe lanzar el error original si no es P2025', async () => {
    // ARRANGE
    const authorId = 1;
    const updateData = { name: 'Error' };
    const genericError = new Error('Database connection failed') as any;
    genericError.code = 'P1000';

    (prisma.author.update as jest.Mock).mockRejectedValue(genericError);

    // ACT & ASSERT
    await expect(updateAuthor(authorId, updateData)).rejects.toThrow('Database connection failed');
    await expect(updateAuthor(authorId, updateData)).rejects.not.toHaveProperty('statusCode');
  });
});