import { createContext, useContext } from 'react';

const FuncContext = createContext();

const FuncProvider = ({ children }) => {
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
    <FuncContext.Provider
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
    </FuncContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(FuncContext);
};

export { FuncContext, FuncProvider };
