import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(endpoint) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      //axios
      try {
        const { data } = await axios.get(endpoint);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { isLoading, error, data };
}
