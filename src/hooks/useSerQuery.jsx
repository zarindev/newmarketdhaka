import { useQuery } from '@tanstack/react-query';

export const useSerQuery = () => {
  const serGet = process.env.REACT_APP_SER_GET_API_KEY;
  const fetchSer = async () => {
    const res = await fetch(serGet);
    return res.json();
  };

  const {
    isLoading: serIsLoading,
    error: serError,
    data: serData,
    refetch: serRefetch,
  } = useQuery(['services'], fetchSer);

  return { serIsLoading, serError, serData, serRefetch };
};
