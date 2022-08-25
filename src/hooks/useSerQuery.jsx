import { useQuery } from '@tanstack/react-query';

export const useSerQuery = () => {
  const serGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceList`;
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
