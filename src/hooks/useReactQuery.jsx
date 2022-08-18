import { useQuery } from '@tanstack/react-query';

const useReactQuery = (url) => {
  const { isLoading, error, data } = useQuery(() =>
    fetch(url).then((res) => res.json())
  );

  return { isLoading, error, data };
};

export default useReactQuery;
