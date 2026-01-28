import axios from "axios";

const http = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8"
  }
});

console.log("TMDB_BASE_URL =", process.env.TMDB_BASE_URL);

const normalize = (m: any) => ({
  id: m.id,
  title: m.title,
  poster: m.poster_path
    ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
    : null,
  rating: m.vote_average,
  releaseDate: m.release_date
});

export const fetchPopular = async (page = 1) => {
  const r = await http.get("/movie/popular", { params: { page } });
  return { data: r.data.results.map(normalize), page: r.data.page };
};

export const fetchSearch = async (q: string, page = 1) => {
  const r = await http.get("/search/movie", { params: { query: q, page } });
  return { data: r.data.results.map(normalize), page: r.data.page };
};

export const fetchDetail = async (id: string) => {
  const r = await http.get(`/movie/${id}`);
  return { ...normalize(r.data), overview: r.data.overview };
};
