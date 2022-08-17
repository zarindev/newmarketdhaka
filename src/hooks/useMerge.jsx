import { useState, useEffect } from 'react';

export const useMerge = (items, type) => {
  const [allItems, setAllItems] = useState([]);

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
