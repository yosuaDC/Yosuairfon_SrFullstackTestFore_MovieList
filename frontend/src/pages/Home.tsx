import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";
import { Movie } from "../types/movie";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchMovies = async (q = "") => {
    setLoading(true);
    const url = q ? `/movies/search?q=${q}` : "/movies";
    const res = await api.get(url);
    setMovies(res.data.data);
    setLoading(false);
  };


  useEffect(() => {
    const t = setTimeout(() => {
      fetchMovies(query);
    }, 500);
    return () => clearTimeout(t);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        List Movie 
      </h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="w-full max-w-md mx-auto block mb-8 p-3 rounded border"
      />

      {loading && (
        <p className="text-center text-gray-500">Loading movies...</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className="bg-white rounded shadow hover:scale-105 transition"
          >
            {movie.poster ? (
              <img
                src={movie.poster}
                alt={movie.title}
                className="rounded-t aspect-[2/3] object-cover"
              />
            ) : (
              <div className="aspect-[2/3] bg-gray-300 flex items-center justify-center">
                No Image
              </div>
            )}

            <div className="p-2 text-sm font-medium text-center">
              {movie.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
