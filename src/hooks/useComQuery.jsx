import { useQuery } from '@tanstack/react-query';

export const useComQuery = () => {
  const comGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceCompList`;
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
