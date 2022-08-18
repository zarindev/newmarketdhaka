import { useQuery } from '@tanstack/react-query';

export const useSerQuery = (url) => {
  const fetchSer = async () => {
    const res = await fetch(url);
    return res.json();
  };

  const { isLoading, error, data } = useQuery('services', fetchSer);

  return { isLoading, error, data };
};
