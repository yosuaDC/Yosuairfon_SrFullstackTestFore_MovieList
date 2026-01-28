import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import { MovieDetail } from "../types/movie";

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    api.get(`/movies/${id}`)
      .then((res) => setMovie(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!movie) {
    return <p className="text-center mt-10">Movie not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
  

      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 mb-6 
                   rounded-lg bg-white px-4 py-2 text-sm font-medium 
                   text-gray-700 shadow 
                   hover:bg-gray-100 hover:shadow-md
                   active:scale-95 transition"
      >
        Back
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6 mt-6 grid md:grid-cols-3 gap-6">
        {movie.poster && (
          <img
            src={movie.poster}
            alt={movie.title}
            className="rounded w-full object-cover"
          />
        )}

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-500 mb-4">
            ⭐ {movie.rating} • {movie.releaseDate}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
