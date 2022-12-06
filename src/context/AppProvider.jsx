import { createContext, useState, useEffect, useContext } from "react";
import { useMerge } from "../hooks/useMerge";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [componentFiles, setComponentFiles] = useState([]);

  const { mergedSerType, mergedSerTypeAll } = useMerge();

  return (
    <AppContext.Provider
      value={{
        mergedSerType,
        mergedSerTypeAll,
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
