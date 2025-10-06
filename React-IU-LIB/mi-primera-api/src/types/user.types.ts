export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  role : 'ADMIN' | 'USER';
  password: string;
  gender: 'MASCULINO' | 'FEMENINO' | 'OTRO';
  dateOfBirth: Date;
  genreId: number;
}

export interface UserData {
  id: number;
  name: string;
  surname: string;
  email: string;
  role: 'USER' | 'ADMIN';
  gender: 'MASCULINO' | 'FEMENINO' | 'OTRO';
  createdAt: Date;
  updatedAt?: Date;
  genreId: number;
  dateOfBirth: Date;
}

export interface CreateUserRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  gender: 'MASCULINO' | 'FEMENINO' | 'OTRO';
  genreId: number;
}

export interface UpdateUserRequest {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  dateOfBirth?: Date;
  genreId?: number;
}

export interface UserResponse {
  user: UserData;
  message: string;
}

export interface UsersListResponse {
  users: UserData[];
  total: number;
  message: string;
}
