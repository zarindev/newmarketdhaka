import { useState, useEffect } from "react";
import { useSerQuery } from "./useSerQuery";

export const useMerge = () => {
  const [allItems, setAllItems] = useState([]);

  const { serData } = useSerQuery();

  useEffect(() => {
    if (!serData) return;

    setAllItems(serData?.map((item) => item.serCategory.value));
  }, [serData]);

  const mergedSerType = [...new Set([...allItems])];
  const mergedSerTypeAll = ["all", ...new Set([...allItems])];
  return { mergedSerType, mergedSerTypeAll };
};
