import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';
import { useComQuery } from './useComQuery';

export const useFind = () => {
  const [activeCom, setActiveCom] = useState({});

  const { comData, comError, comIsLoading } = useComQuery();

  const { user } = useAuth();
  const uid = user?.uid;

  useEffect(() => {
    if (comData) {
      const singleItem = comData.find((item) => item.userUId === uid);
      setActiveCom({ ...singleItem });
    }
  }, [comData, uid]);

  return { activeCom, comError, comIsLoading };
};
