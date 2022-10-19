import { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f07331321fmshd5412fa13f915dap11e0aajsn701c098c1ef7",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

function useMainFetch(url) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [length, setLength] = useState(0);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setLength(parseInt(response.length));
        setData(response.slice(0, 12));
      })
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  }, [url]);

  const reFetch = (start, end) => {
    setData(null);
    setLoading(true);
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response.slice(start, end));
      })
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  };

  return { data, err, loading, length, reFetch };
}

export default useMainFetch;
