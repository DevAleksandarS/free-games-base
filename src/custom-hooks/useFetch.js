import { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f07331321fmshd5412fa13f915dap11e0aajsn701c098c1ef7",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

function useFetch(url) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, err, loading };
}

export default useFetch;
