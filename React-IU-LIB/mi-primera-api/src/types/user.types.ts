export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  role : 'ADMIN' | 'USER';
  password: string;
  dateOfBirth: Date;
  genreId: number;
}

export interface UserData {
  id: number;
  name: string;
  surname: string;
  email: string;
  role: 'USER' | 'ADMIN';
  createdAt: Date;
  updatedAt?: Date;
}

export interface CreateUserRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  dateOfBirth: Date;
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
