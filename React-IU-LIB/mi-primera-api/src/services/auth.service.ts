// src/services/auth.service.ts
import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { LoginRequest, LoginResponse, UserData } from '../types/auth.types';

export async function login(data: LoginRequest): Promise<LoginResponse['data']> {
  // 1. Buscar usuario
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user) {
    const error = new Error('Credenciales inválidas') as any;
    error.statusCode = 401;
    throw error;
  }

  // 2. Verificar password
  const validPassword = await bcrypt.compare(data.password, user.password);
  if (!validPassword) {
    const error = new Error('Credenciales inválidas') as any;
    error.statusCode = 401;
    throw error;
  }

  // 3. Configurar JWT
  const secret: Secret = process.env.JWT_SECRET || 'default_secret_for_dev';
  const expiresIn = Number(process.env.JWT_EXPIRES_IN) || 7200;

  const options: SignOptions = { expiresIn };

  // 4. Generar JWT
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    secret,
    options
  );

  // 5. Retornar usuario sin password
  const { password: _, ...userWithoutPassword } = user;

  return {
    user: userWithoutPassword as UserData,
    token,
  };
}
