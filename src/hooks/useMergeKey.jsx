import { useFetch } from './useFetch';

export const useMergeKey = (url) => {
  const fetchedItems = useFetch(url);
  const { items } = fetchedItems;
  const allKeys = items.map((item) => item.serType);
  const mergedKey = [...new Set([...allKeys])];
  return mergedKey;
};
