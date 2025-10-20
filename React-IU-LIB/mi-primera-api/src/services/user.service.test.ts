import { getUserById } from './user.service';
import prisma from '../config/prisma';

jest.mock('../config/prisma', () => ({
 user: {
   findUnique: jest.fn()
 }
}));
describe('UserService - getUserById', () => {
  test('debe retornar un usuario cuando existe', async () => {
   // ARRANGE
   const mockUser = { id: 1, name: 'Fernando', surname: 'Alonso', 
    email: 'fernandoalonso@gmail.com', role: 'USER', password: 'Contraseña123',
    dateOfBirth: new Date('1981-07-29'), createdAt: new Date('17-10-2025'),
    gender: 'MASCULINO', genreId: 2 };
   (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
   // ACT: Ejecutar función
   const result = await getUserById(1);
   // ASSERT: Verificar resultado
   expect(result).toEqual(mockUser);
   expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 }, omit: { password: true }, });
 });
  test('debe lanzar error 404 cuando no existe', async () => {
   // ARRANGE
   (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);
  
   // ACT & ASSERT
   await expect(getUserById(999)).rejects.toThrow('Usuario no encontrado');
 });
});