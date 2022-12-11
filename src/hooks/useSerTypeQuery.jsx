import { useQuery } from "@tanstack/react-query";

export const useSerTypeQuery = () => {
  const serTypeGet = process.env.REACT_APP_SER_TYPE_GET_API_KEY;
  const fetchSerType = async () => {
    const res = await fetch(serTypeGet);
    return res.json();
  };

  const {
    isLoading: serTypeIsLoading,
    error: serTypeError,
    data: serTypeData,
    refetch: serTypeRefetch,
  } = useQuery(["serType"], fetchSerType);

  return { serTypeIsLoading, serTypeError, serTypeData, serTypeRefetch };
};
