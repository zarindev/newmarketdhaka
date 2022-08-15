import { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

export const useMerge = (url, type) => {
  const [allItems, setAllItems] = useState([]);
  const items = useFetch(url)?.items;

  useEffect(() => {
    if (type === 'serType') {
      setAllItems(items.map((item) => item.serType));
    } else if (type === 'id') {
      setAllItems(items.map((item) => item.id));
    }
  }, [items, type]);

  const mergedItems = [...new Set([...allItems])];
  const mergedItemsAll = ['all', ...new Set([...allItems])];
  return { mergedItems, mergedItemsAll };
};
