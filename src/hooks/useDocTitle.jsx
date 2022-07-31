import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { snakeToTitle, titleCase } from '../functions/formatString';

export const useDocTitle = () => {
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
      document.title = `${newActiveTitle} | ${staticTitle}`;
    }
  }, [location]);
};
