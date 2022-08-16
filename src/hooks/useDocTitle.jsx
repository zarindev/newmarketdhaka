import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { snakeToTitle } from '../functions/formatString';

export const useDocTitle = (newTitle) => {
  const location = useLocation();
  const staticTitle = 'New Market Dhaka';

  useEffect(() => {
    const activePath = location.pathname;

    if (activePath === '/') {
      document.title = staticTitle.replace('/', '');
    } else {
      const activePathLast = snakeToTitle(
        activePath.replace(/^.*\/(.*)$/, '$1')
      );
      document.title = `${newTitle || activePathLast} | ${staticTitle}`;
    }
  }, [location, newTitle]);
};
