import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { snakeToTitle } from '../functions/formatString';

export const useDocTitle = (newTitle) => {
  const location = useLocation();
  const staticTitle = 'New Market Dhaka';

  useEffect(() => {
    const activePath = location.pathname;
    const activeLink = activePath.substring(activePath.lastIndexOf('/') + 1);

    if (activePath === '/') {
      document.title = staticTitle.replace('/', '');
    } else {
      const activeTitle = snakeToTitle(activeLink);
      document.title = `${newTitle || activeTitle} | ${staticTitle}`;
    }
  }, [location, newTitle]);
};
