import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';
import { useFetch } from './useFetch';

export const useFind = (items) => {
  const [activeSer, setActiveSer] = useState({});

  const { user } = useAuth();
  const uid = user?.uid;

  useEffect(() => {
    const specificSer = items.find((item) => item.userUId === uid);
    specificSer && setActiveSer(specificSer);
  }, [items, uid]);

  return activeSer;
};
