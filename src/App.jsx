import "./App.css";

import MatchCard from "./components/MatchCard/MatchCard";
import useFetch from "./hooks/useFetch";

import Head from "./components/Head/Head";

import { path } from "./constants/constants";

const App = () => {
  const { data, isLoading, error, refetch } = useFetch(path);

  return (
    <div className="App">
      <div className="Main">
        <Head isLoading={isLoading} error={error} refetch={refetch} />
        <div className="MatchCards">
          {data &&
            data.matches.map((match) => (
              <MatchCard match={match} key={match.title + match.time} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
