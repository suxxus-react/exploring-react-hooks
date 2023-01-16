import { useState } from "react";
export function HitsList({ hitsUrl, data, isLoading, error, doFetch }) {
  const [query, setQuery] = useState("");
  //
  return (
    <>
      <p>Hello Hooks</p>
      {isLoading && <p> is loading ...</p>}
      {!isLoading && error.length === 0 && (
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            doFetch(`${hitsUrl}${query}`);
          }}
        >
          <ul>
            {data.hits.map((item) => (
              <li key={item.objectID}>{item.title}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="topic"
            value={query}
            onChange={(evt) => {
              evt.preventDefault();
              setQuery(evt.target?.value || "");
            }}
          />

          <button type="submit">search</button>
        </form>
      )}
      {error.length >= 1 && <p>{error}</p>}
    </>
  );
}
