export interface Movie {
  id: number;
  title: string;
  poster: string | null;
  rating: number;
  releaseDate: string;
}

export interface MovieDetail extends Movie {
  overview: string;
}


export interface PaginatedResponse<T> {
  page: number;
  totalPages: number;
  data: T[];
}
