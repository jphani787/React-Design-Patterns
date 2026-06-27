import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    const featchData = async () => {
      setLoading(true);
      try {
        const responce = await fetch(url);
        if (!responce.ok) throw new Error("Network response was not ok");
        const result = await responce.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    featchData();
  }, [url]);
  return { data, error, loading };
}
