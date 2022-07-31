import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [items, setItems] = useState([]);

  const getItems = useCallback(async () => {
    const res = await fetch(url);
    const data = await res.json();
    setItems(data);
  }, [url]);

  useEffect(() => {
    getItems();
  }, [url, getItems]);

  return { items };
};
