import { useQuery } from '@tanstack/react-query';

export const useComQuery = (url) => {
  const fetchCom = async () => {
    const res = await fetch(url);
    return res.json();
  };

  const { isLoading, error, data } = useQuery('companies', fetchCom);

  return { isLoading, error, data };
};
