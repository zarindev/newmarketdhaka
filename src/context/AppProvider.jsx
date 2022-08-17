import { createContext, useState, useEffect, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useMerge } from '../hooks/useMerge';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [componentFiles, setComponentFiles] = useState([]);

  const serGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceList`;
  const services = useFetch(serGet)?.items;

  const comGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceCompList`;
  const companies = useFetch(comGet)?.items;

  const mergedSerTypeAll = useMerge(services, 'serType')?.mergedItemsAll;
  const mergedSerType = useMerge(services, 'serType')?.mergedItems;
  const mergedComId = useMerge(companies, 'id')?.mergedItems;

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        showDropdown,
        setShowDropdown,
        serGet,
        comGet,
        services,
        companies,
        mergedSerTypeAll,
        mergedSerType,
        mergedComId,
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
