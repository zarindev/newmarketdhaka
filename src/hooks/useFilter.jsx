import { useState, useEffect } from 'react';
import { snakeCase } from '../functions/formatString';

export const useFilter = (items, type) => {
  const [activeItems, setActiveItems] = useState([]);

  useEffect(() => {
    // const filteredItems = items.filter(
    //   (item) => snakeCase(item.serType) === snakeCase(type)
    // );
    // setActiveItems(filteredItems);

    const filteredItems = items.filter((item) => item.companyInfoId === type);
    setActiveItems(filteredItems);
  }, [items, type]);

  return activeItems;
};
