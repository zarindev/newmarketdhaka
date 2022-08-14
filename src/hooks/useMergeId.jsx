import { useFetch } from './useFetch';

export const useMergeId = (url) => {
  const fetchedItems = useFetch(url);
  const { items } = fetchedItems;
  const allIds = items.map((item) => item.id);
  const mergedId = [...new Set([...allIds])];
  return mergedId;
};
