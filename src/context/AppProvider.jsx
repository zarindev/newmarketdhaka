import { createContext, useState, useEffect, useContext } from 'react';
import { useAllKey } from '../hooks/useAllKey';
import { useFetch } from '../hooks/useFetch';
import { useMergeKey } from '../hooks/useMergeKey';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [componentFiles, setComponentFiles] = useState([]);

  const serGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceList`;

  const fetchedSer = useFetch(serGet);
  const { items } = fetchedSer;

  const mergedSerTypeAll = useAllKey(serGet);
  const mergedSerType = useMergeKey(serGet);

  return (
    <AppContext.Provider
      value={{
        showDropdown,
        setShowDropdown,
        items,
        mergedSerTypeAll,
        mergedSerType,
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
