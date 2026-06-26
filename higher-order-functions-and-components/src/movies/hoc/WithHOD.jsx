import React from "react";
import WithDataFeching from "./WithDataFeching";
import MovieAnalytics from "../MovieAnalytics";
import MovieList from "../MovieList";

const MovieAnalyticsData = WithDataFeching(MovieAnalytics);
const MovieListData = WithDataFeching(MovieList);
export default function WithHOD() {
  return (
    <div className="max-w-lg mx-auto mt-10 space-y-6">
      <MovieAnalyticsData />
      <MovieListData />
    </div>
  );
}
