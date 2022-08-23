import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/AppProvider';
import { useAuth } from '../context/AuthProvider';
import { useComQuery } from './useComQuery';

export const useFind = () => {
  const [activeItem, setActiveItem] = useState({});
  const { comGet } = useGlobalContext();

  const comFetched = useComQuery(comGet);
  const item = comFetched?.data;
  const itemError = comFetched?.error;
  const itemIsLoading = comFetched?.isLoading;

  const { user } = useAuth();
  const uid = user?.uid;

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
