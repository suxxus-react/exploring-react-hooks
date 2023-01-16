import "./App.css";
// import { FetchArticlesFromHN } from "./data-fetching-with-react-hooks";
// import { FormWithFetchData } from "./fetching-data-with-forms-and-react";
// import { UserHackerNewsApi } from "./custom-hooks";
import { useHackerNewsApi } from "./custom-hooks";
import { HitsList } from "./use-custom-hook-to-fetch-data";

const HITS_URL = "https://hn.algolia.com/api/v1/search?query=";

function App() {
  const [{ data, isLoading, error }, doFetch] = useHackerNewsApi(
    `${HITS_URL}redux`,
    {
      hits: [],
    }
  );

  return (
    <div className="App">
      <HitsList {...{ data, isLoading, error, doFetch, hitsUrl: HITS_URL }} />
    </div>
  );
}

export default App;
