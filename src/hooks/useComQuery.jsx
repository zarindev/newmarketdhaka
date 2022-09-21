import { useQuery } from '@tanstack/react-query';

export const useComQuery = () => {
  const comGet = process.env.REACT_APP_COM_GET_API_KEY;
  const fetchCom = async () => {
    const res = await fetch(comGet);
    return res.json();
  };

  const {
    isLoading: comIsLoading,
    error: comError,
    data: comData,
  } = useQuery(['companies'], fetchCom);

  return { comIsLoading, comError, comData };
};
