import { useState, useEffect, useCallback } from "react";

export default function WithDataFeching(WrappedComponent) {
  return function WithDataFechingComponent(props) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const feachMoviesData = useCallback(async function feachData() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/movies`,
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }, []);
    useEffect(() => {
      feachMoviesData();
    }, [feachMoviesData]);

    if (loading) return <p className="text-gray-500">Loading Data...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return <WrappedComponent data={data} {...props} />;
  };
}
