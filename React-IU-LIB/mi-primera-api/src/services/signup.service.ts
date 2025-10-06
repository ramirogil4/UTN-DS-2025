import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SignupRequest, SignupResponse, UserData } from '../types/signup.types';
import { Gender } from '../generated/prisma';

export async function signup(data: SignupRequest): Promise<SignupResponse['data']> {
  //Verifico el tipo de género para evitar errores de asignación
  const prismaGender =
  data.gender === 'MASCULINO' ? Gender.MASCULINO :
  data.gender === 'FEMENINO' ? Gender.FEMENINO :
  Gender.OTRO;

  const existingUser = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (existingUser) {
    const error = new Error('El email ya está registrado') as any;
    error.statusCode = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: hashedPassword,
      genreId: data.genreId,
      dateOfBirth: data.dateOfBirth,
      gender: prismaGender,
    },
  });

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error('JWT_SECRET no está configurado en las variables de entorno');
  }

  const tokenPayload = {
    id: user.id,
    email: user.email,
  };

  const signOptions: jwt.SignOptions = {
    expiresIn: Number(process.env.JWT_EXPIRES_IN) || 7200, // 2 horas en segundos
  };

  const token = jwt.sign(tokenPayload, jwtSecret, signOptions);

  const { password: _, ...restUser } = user;
  const UserData = restUser as unknown as UserData;

  return {
    user: UserData,
    token
  };
}