import { useState, useEffect } from 'react';
import { snakeCase } from '../functions/formatString';
import { useSerQuery } from './useSerQuery';

export const useFilter = (url, type, key) => {
  const [activeItems, setActiveItems] = useState([]);

  const serFetched = useSerQuery(url);
  const items = serFetched?.data;
  const itemsError = serFetched?.error;
  const itemsIsLoading = serFetched?.isLoading;

  useEffect(() => {
    if (items === undefined) {
      setActiveItems([]);
    } else if (type === 'serType') {
      const specificItems = items.filter(
        (item) => snakeCase(item.serType) === snakeCase(key)
      );
      setActiveItems([...specificItems]);
    } else if (type === 'companyInfoId') {
      const specificItems = items.filter((item) => item.companyInfoId === key);
      setActiveItems([...specificItems]);
    }
  }, [items, type, key]);

  return { activeItems, itemsError, itemsIsLoading };
};
