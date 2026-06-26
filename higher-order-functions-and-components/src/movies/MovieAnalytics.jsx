import React from "react";

export default function MovieAnalytics({ data }) {
  const totalMovies = data.length;
  const avarageRating =
    data.reduce((acc, curr) => acc + curr.rating, 0) / totalMovies;
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Move Analytics</h2>
      <p>Total Movies: {totalMovies}</p>
      <p>Average Rating: {avarageRating.toFixed(1)}</p>
    </div>
  );
}
