import { useEffect, useState } from "react";
import { baseURL } from "../constants/constants";

function useFetch(path) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = () => {
    setIsLoading(true);
    fetch(baseURL + path)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  const refetch = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading, error, refetch };
}

export default useFetch;
