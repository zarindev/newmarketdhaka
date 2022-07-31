import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [placeholder, setPlaceholder] = useState([]);

  return (
    <AppContext.Provider value={{ placeholder, setPlaceholder }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
