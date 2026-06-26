import React from "react";

export default function MovieList({ data }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Movie List</h2>
      <ul className="space-y-1">
        {data.map((movie) => (
          <li key={movie.id} className="border-b pb-1">
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
}
