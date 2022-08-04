import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { titleCase, snakeToTitle } from '../functions/formatString';

export const useDocTitle = (newTitle) => {
  const location = useLocation();
  const staticTitle = 'New Market Dhaka';

  useEffect(() => {
    const activePath = location.pathname;

    if (activePath === '/' || activePath === '/home') {
      document.title = staticTitle.replace('/', '');
    } else {
      const formatedActiveTitle = snakeToTitle(activePath.replace('/', ''));

      const newActiveTitle = titleCase(
        formatedActiveTitle.substring(formatedActiveTitle.indexOf('/') + 1)
      );
      document.title = `${newTitle || newActiveTitle} | ${staticTitle}`;
    }
  }, [location, newTitle]);
};
