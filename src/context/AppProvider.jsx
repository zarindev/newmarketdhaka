import { createContext, useState, useEffect, useContext } from 'react';
import { useAllKey } from '../hooks/useAllKey';
import { useFetch } from '../hooks/useFetch';
import { useMergeId } from '../hooks/useMergeId';
import { useMergeKey } from '../hooks/useMergeKey';
import { useMergeSellerId } from '../hooks/useMergeSellerId';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [componentFiles, setComponentFiles] = useState([]);

  const serGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceList`;
  const fetchedSer = useFetch(serGet);
  const { items } = fetchedSer;

  const comGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceCompList`;
  const companies = useFetch(comGet)?.items;

  const mergedSerTypeAll = useAllKey(serGet);
  const mergedSerType = useMergeKey(serGet);
  const mergedSellerId = useMergeSellerId(serGet);
  const mergedComId = useMergeId(comGet);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        showDropdown,
        setShowDropdown,
        items,
        companies,
        mergedSerType,
        mergedSerTypeAll,
        mergedSellerId,
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
