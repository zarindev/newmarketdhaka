import { useQuery } from '@tanstack/react-query';

export const useSerQuery = (url) => {
  const fetchSer = async () => {
    const res = await fetch(url);
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
