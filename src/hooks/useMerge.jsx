import { useState, useEffect } from 'react';

export const useMerge = (items) => {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    setAllItems(items?.map((item) => item.serType));
  }, [items]);

  const mergedItems = [...new Set([...allItems])];
  const mergedItemsAll = ['all', ...new Set([...allItems])];
  return { mergedItems, mergedItemsAll };
};
