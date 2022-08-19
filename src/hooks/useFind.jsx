import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';

export const useFind = (items) => {
  const [activeItem, setActiveItem] = useState({});

  const { user } = useAuth();
  const uid = user?.uid;

  useEffect(() => {
    if (items === undefined) {
      setActiveItem([]);
    } else {
      const singleItem = items.find((item) => item.userUId === uid);
      setActiveItem({ ...singleItem });
    }
  }, [items, uid]);

  return activeItem;
};
