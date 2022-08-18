import { useState, useEffect } from 'react';
import { snakeCase } from '../functions/formatString';

export const useFilter = (items, type, key) => {
  const [activeItems, setActiveItems] = useState([]);

  useEffect(() => {
    if (items === undefined) {
      setActiveItems([]);
    } else if (type === 'serType') {
      const specificItems = items.filter(
        (item) => snakeCase(item.serType) === snakeCase(key)
      );
      setActiveItems([...specificItems]);
    } else if (type === 'companyInfoId') {
      const specificItems = items.filter((item) => item.companyInfoId === key);
      setActiveItems([...specificItems]);
    }
  }, [items, type, key]);

  return activeItems;
};
