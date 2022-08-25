import { useQuery } from '@tanstack/react-query';

export const useComQuery = (url) => {
  const fetchCom = async () => {
    const res = await fetch(url);
    return res.json();
  };

  const {
    isLoading: comIsLoading,
    error: comError,
    data: comData,
  } = useQuery(['companies'], fetchCom);

  return { comIsLoading, comError, comData };
};
