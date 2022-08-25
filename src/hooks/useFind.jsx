import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/AppProvider';
import { useAuth } from '../context/AuthProvider';
import { useComQuery } from './useComQuery';

export const useFind = () => {
  const [activeCom, setActiveCom] = useState({});

  const { comGet } = useGlobalContext();
  const { comData, comError, comIsLoading } = useComQuery(comGet);

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
