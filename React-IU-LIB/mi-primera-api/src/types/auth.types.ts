export interface LoginRequest {
  email: string;
  password: string;
}

//Usuario sin contraseña
export interface UserData {
  id: number;
  name: string;
  surname: string;
  email: string;
  role: 'USER' | 'ADMIN';
  createdAt: Date;
  updatedAt?: Date;
}

export interface LoginResponse {
  data: {
    user: UserData;
    token: string;
  }, 
  success: boolean;
}
