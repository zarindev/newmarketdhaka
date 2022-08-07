import { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [componentFiles, setComponentFiles] = useState([]);

  return (
    <AppContext.Provider
      value={{
        componentFiles,
        setComponentFiles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
