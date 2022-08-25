import { useState, useEffect } from 'react';
import { useSerQuery } from './useSerQuery';

export const useMerge = (url) => {
  const [allItems, setAllItems] = useState([]);

  const { serData } = useSerQuery(url);

  useEffect(() => {
    if (serData) {
      setAllItems(serData?.map((item) => item.serType));
    }
  }, [serData]);

  const mergedSerType = [...new Set([...allItems])];
  const mergedSerTypeAll = ['all', ...new Set([...allItems])];
  return { mergedSerType, mergedSerTypeAll };
};
