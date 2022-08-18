import { createContext, useState, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useMerge } from '../hooks/useMerge';
import useReactQuery from '../hooks/useReactQuery';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [componentFiles, setComponentFiles] = useState([]);

  const serGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceList`;
  const services = useFetch(serGet)?.items;

  const comGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceCompList`;
  const companies = useFetch(comGet)?.items;

  const mergedBySerType = useMerge(services);
  const mergedSerType = mergedBySerType?.mergedItems;
  const mergedSerTypeAll = mergedBySerType?.mergedItemsAll;

  return (
    <AppContext.Provider
      value={{
        showDropdown,
        setShowDropdown,
        services,
        companies,
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
