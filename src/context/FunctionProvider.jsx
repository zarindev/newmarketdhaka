import React, { createContext, useState, useEffect, useContext } from 'react';
import { servicesData } from '../components/Services/servicesData';

const FunctionContext = createContext();

const FunctionProvider = ({ children }) => {
  const titleCase = (str) => {
    const titleCased = str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    return titleCased;
  };

  const capitalCase = (str) => {
    const capitalCased =
      str.replace(/_/g, ' ').charAt(0).toUpperCase() +
      str.replace(/_/g, ' ').slice(1);
    return capitalCased;
  };

  const itCapitalCase = (service_type) => {
    if (capitalCase(service_type) === 'It training') {
      return 'IT training';
    }
  };

  const checkCase = (service_type) => {
    if (capitalCase(service_type) === 'It training') {
      return itCapitalCase(service_type);
    } else {
      return capitalCase(service_type);
    }
  };

  const camelCase = (str) => {
    const camelCased = str.replace(/_([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    return camelCased;
  };

  const snakeCase = (str) => {
    const snakeCased = str.replace(/ /g, '_').toLowerCase();
    return snakeCased;
  };

  return (
    <FunctionContext.Provider
      value={{
        titleCase,
        capitalCase,
        itCapitalCase,
        checkCase,
        camelCase,
        snakeCase,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(FunctionContext);
};

export { FunctionContext, FunctionProvider };

// custom hooks
// onclickoutside
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

// draganddrop file
export const useDragAndDrop = () => {
  const [dragOver, setDragOver] = useState(false);
  const [fileDropError, setFileDropError] = useState('');

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = () => setDragOver(false);

  return {
    dragOver,
    setDragOver,
    onDragOver,
    onDragLeave,
    fileDropError,
    setFileDropError,
  };
};
