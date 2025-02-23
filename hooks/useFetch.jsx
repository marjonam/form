import { useEffect, useState } from "react";

export function useFetch(url, method = "GET", post = null) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [fetchHeaders, setFetchHeaders] = useState(null);

  useEffect(() => {
    if (method != "GET") {
      setFetchHeaders({
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: post ? JSON.stringify(post) : null,
      });
    }
  }, []);

  useEffect(() => {
    const fetchData = async (headers) => {
      setIsPending(true);
      try {
        const req = await fetch(url, { ...headers });
        if (!req.ok) {
          throw new Error("something went wrong!!!!! " + req.statusText);
        }
        const data = await req.json();
        setData(data);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setIsPending(false);
      }
    };

    if (method && post) {
      fetchData(fetchHeaders);
    }
    if (method == "GET") {
      fetchData();
    }
  }, [url, method, fetchHeaders]);

  return { data, isPending, error };
}
