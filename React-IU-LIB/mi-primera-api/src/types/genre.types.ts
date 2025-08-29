
export interface Genre {
  id: number;
  name: string;
}

export interface CreateGenreRequest {
  name: string;
}

export interface UpdateGenreRequest {
  name?: string;
}

export interface GenreResponse {
  genre: Genre;
  message: string;
}

export interface GenresResponse {
  genres: Genre[];
  message: string;
}
