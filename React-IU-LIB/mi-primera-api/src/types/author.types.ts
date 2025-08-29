export interface Author {
  id: number;
  name: string;
  surname: string;
}

export interface CreateAuthorRequest {
  name: string;
  surname: string;
}

export interface UpdateAuthorRequest {
  name?: string;
  surname?: string;
}

export interface AuthorResponse {
  author: Author;
  message: string;
}

export interface AuthorsListResponse {
  authors: Author[];
  message: string;
}
