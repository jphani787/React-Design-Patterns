import React from "react";
import useFetch from "../hooks/useFetch";

export default function MovieList() {
  const { data, error, loading } = useFetch(
    "https://json-faker.onrender.com/movies",
  );
  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>Loading movies...</p>;
  return (
    <div className="m-2 p-1 bg-slate-900 rounded">
      <h2 className="text-3xl mb-2">🎬 Movies</h2>
      <ul>
        {data?.movies &&
          data?.movies?.map((movie) => (
            <li className="my-2" key={movie.id}>
              {movie.title} - {movie.director}
            </li>
          ))}
      </ul>
    </div>
  );
}
