import { useFetch } from './useFetch';

export const useAllKey = (url) => {
  const fetchedItems = useFetch(url);
  const { items } = fetchedItems;
  const allKeys = items.map((item) => item.serType);
  const mergedKey = ['all', ...new Set([...allKeys])];
  return mergedKey;
};
