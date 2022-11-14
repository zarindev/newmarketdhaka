import { useState, useEffect } from "react";
import { snakeCase } from "../functions/formatString";
import { useSerQuery } from "./useSerQuery";

export const useFilter = (type, key) => {
  const [activeSer, setActiveSer] = useState([]);

  const { serData, serError, serIsLoading, serRefetch } = useSerQuery();

  useEffect(() => {
    if (serData && type === "serviceType") {
      const specificItems = serData.filter(
        (item) => snakeCase(item.serCategory.value) === snakeCase(key)
      );
      setActiveSer([...specificItems]);
    } else if (serData && type === "companyInfoId") {
      const specificItems = serData.filter(
        (item) => item.companyInfoId === key
      );
      setActiveSer([...specificItems]);
    } else if (serData && type === "userUId") {
      const specificItems = serData.filter((item) => item?.userUId === key);
      setActiveSer([...specificItems]);
    }
  }, [serData, type, key]);

  return {
    activeSer,
    serError,
    serIsLoading,
    serRefetch,
  };
};
