import { useState, useEffect } from 'react';
import { useComQuery } from './useComQuery';

export const useFind = (url, uid) => {
  const [activeItem, setActiveItem] = useState({});

  const comFetched = useComQuery(url);
  const item = comFetched?.data;
  const itemError = comFetched?.error;
  const itemIsLoading = comFetched?.isLoading;

  useEffect(() => {
    if (item === undefined) {
      setActiveItem([]);
    } else {
      const singleItem = item.find((item) => item.userUId === uid);
      setActiveItem({ ...singleItem });
    }
  }, [item, uid]);

  return { activeItem, itemError, itemIsLoading };
};
