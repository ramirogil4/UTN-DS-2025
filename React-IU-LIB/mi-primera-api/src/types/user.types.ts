export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  genreId: number;
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
  user: User;
  message: string;
}

export interface UsersListResponse {
  users: User[];
  message: string;
}
