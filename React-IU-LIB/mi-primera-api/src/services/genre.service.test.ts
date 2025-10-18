import { createGenre } from './genre.service';
import prisma from '../config/prisma';

jest.mock('../config/prisma', () => ({
  genre: {
    create: jest.fn(),
  },
}));

describe('GenreService - createGenre', () => {
  test('debe crear un genero', async () => {
    // ARRANGE: Datos de prueba
    const mockGenreData = { name: 'Ciencia Ficción' };
    const mockCreatedGenre = { id: 1, ...mockGenreData }; 
    (prisma.genre.create as jest.Mock).mockResolvedValue(mockCreatedGenre);
    
    // ACT: Ejecutar función
    const result = await createGenre(mockGenreData);
    
    // ASSERT: Verificar resultado
    expect(result).toEqual(mockCreatedGenre); 

    expect(prisma.genre.create).toHaveBeenCalledWith({
      data: mockGenreData, 
    });
  });

  test('debe lanzar un error si prisma.genre.create falla', async () => {  
    const mockError = new Error('Database error during creation');
    (prisma.genre.create as jest.Mock).mockRejectedValue(mockError);
    await expect(createGenre({ name: 'Ciencia Ficción' })).rejects.toThrow(mockError);

  });
});