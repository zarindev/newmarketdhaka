import { createContext, useState, useEffect, useContext } from 'react';
import { useComQuery } from '../hooks/useComQuery';
import { useFetch } from '../hooks/useFetch';
import { useMerge } from '../hooks/useMerge';
import { useSerQuery } from '../hooks/useSerQuery';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [componentFiles, setComponentFiles] = useState([]);

  const serGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceList`;
  const services = useFetch(serGet)?.items;

  const comGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceCompList`;
  const companies = useFetch(comGet)?.items;

  // const serFetched = useSerQuery(serGet);
  // const serData = serFetched?.data;
  // const serError = serFetched?.error;
  // const serIsLoading = serFetched?.isLoading;

  // const comFetched = useComQuery(comGet);
  // const comData = comFetched?.data;
  // const comError = comFetched?.data;
  // const comIsLoading = comFetched?.isLoading;

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
        // serData,
        // serError,
        // serIsLoading,
        // comData,
        // comError,
        // comIsLoading,
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
