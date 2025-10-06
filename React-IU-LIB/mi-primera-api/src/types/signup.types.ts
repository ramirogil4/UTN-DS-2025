
export interface SignupRequest {
    name: string;
    surname: string;
    email: string;
    password: string;
    dateOfBirth: Date;
    gender: 'MASCULINO' | 'FEMENINO' | 'OTRO';
    genreId: number;
}

//Usuario sin contraseña
export interface UserData {
    id: number;
    name: string;
    surname: string;
    email: string;
    role: 'USER' | 'ADMIN';
    genreId: number;
    gender: 'MASCULINO' | 'FEMENINO' | 'OTRO';
    dateOfBirth: Date;
    createdAt: Date;
    updatedAt?: Date;
}

export interface SignupResponse {
  data: {
    user: UserData;
    token: string;
  }, 
  success: boolean;
}
