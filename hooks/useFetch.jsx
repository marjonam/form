import { useEffect, useState } from "react";

export function useFetch(url, method = "GET", post = null) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [fetchHeaders, setFetchHeaders] = useState(null);

  useEffect(() => {
    if (method != "GET") {
      setFetchHeaders({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: post ? JSON.stringify(post) : null,
      });
    }
  }, [method, post]);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url, method === "GET" ? {} : fetchHeaders);
        if (!req.ok) {
          throw new Error("Something went wrong! " + req.statusText);
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

    if (method === "GET" || (method !== "GET" && fetchHeaders)) {
      fetchData();
    }
  }, [url, method, fetchHeaders]);

  return { data, error, isPending };
}
