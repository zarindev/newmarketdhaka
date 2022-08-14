import { useFetch } from './useFetch';

export const useMergeSellerId = (url) => {
  const fetchedItems = useFetch(url);
  const { items } = fetchedItems;
  const allIds = items.map((item) => item.sellerInfoId);
  const mergedId = [...new Set([...allIds])];
  return mergedId;
};
