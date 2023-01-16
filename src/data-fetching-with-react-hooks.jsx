import { useState, useEffect } from "react";

export function FetchArticlesFromHN() {
  //
  const HITS_URL = "https://hn.algolia.com/api/v1/search?query=";

  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("redux");
  const [url, setUrl] = useState(`${HITS_URL}redux`);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();

        setData(data);
        setError("");
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
        setError(err.message || "");
      }
    };

    setError("");
    setIsLoading(true);
    fetchData();
    //
  }, [url]);

  return (
    <>
      <p>Hello Hooks</p>
      {isLoading && <p> is loading ...</p>}
      {!isLoading && error.length === 0 && (
        <>
          <ul>
            {data.hits.map((item) => (
              <li key={item.objectID}>{item.title}</li>
            ))}
          </ul>
          <input
            type="text"
            value={query}
            onChange={(evt) => {
              evt.preventDefault();
              setQuery(evt.target?.value || "");
            }}
          />

          <button
            onClick={() => {
              setUrl(`${HITS_URL}${query}`);
            }}
          >
            search
          </button>
        </>
      )}
      {error.length >= 1 && <p>{error}</p>}
    </>
  );
}
