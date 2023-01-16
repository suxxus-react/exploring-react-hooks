// In order to extract a custom hook for data fetching,
// move everything that belongs to the data fetching,
// except for the query state that belongs to the input field,
// but including the loading indicator and error handling,
// to its own function. Also make sure you return
// all the necessary variables from the function that are
// used in the App component.

import { useState, useEffect } from "react";
export function useHackerNewsApi(initialUrl = "", initialData = {}) {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    //
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const d = await response.json();
        setIsLoading(false);
        setData(d);
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "");
        console.log(err);
      }
    };

    if (url) {
      setIsLoading(true);
      fetchData();
    }
  }, [url]);
  //
  return [{ data, isLoading, error }, setUrl];
}
