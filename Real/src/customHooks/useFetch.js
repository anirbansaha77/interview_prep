import { useEffect, useState } from 'react';


const useFetch = (url) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        setData(await response.json());
        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        console.error(`Error fetching GitHub followers for user ${url}:`, error);
        setError(true);
      }
    };

    fetchData();
  }, [url])
  return { data, loading, error };
};

export default useFetch;