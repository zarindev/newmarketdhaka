import { useState, useEffect } from 'react';
import { useSerQuery } from './useSerQuery';

export const useMerge = (url) => {
  const [allItems, setAllItems] = useState([]);

  const serFetched = useSerQuery(url);
  const items = serFetched?.data;

  useEffect(() => {
    if (items === undefined) {
      setAllItems([]);
    } else {
      setAllItems(items?.map((item) => item.serType));
    }
  }, [items]);

  const mergedItems = [...new Set([...allItems])];
  const mergedItemsAll = ['all', ...new Set([...allItems])];
  return { mergedItems, mergedItemsAll };
};
