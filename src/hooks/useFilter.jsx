import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/AppProvider';
import { snakeCase } from '../functions/formatString';
import { useSerQuery } from './useSerQuery';

export const useFilter = (type, key) => {
  const [activeSer, setActiveSer] = useState([]);

  const { serGet } = useGlobalContext();
  const { serData, serError, serIsLoading, serRefetch } = useSerQuery(serGet);

  useEffect(() => {
    if (serData && type === 'serType') {
      const specificItems = serData.filter(
        (item) => snakeCase(item.serType) === snakeCase(key)
      );
      setActiveSer([...specificItems]);
    } else if (serData && type === 'companyInfoId') {
      const specificItems = serData.filter(
        (item) => item.companyInfoId === key
      );
      setActiveSer([...specificItems]);
    }
  }, [serData, type, key]);

  return {
    activeSer,
    serError,
    serIsLoading,
    serRefetch,
  };
};
