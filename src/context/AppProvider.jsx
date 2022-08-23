import { createContext, useState, useEffect, useContext } from 'react';
import { useComQuery } from '../hooks/useComQuery';
import { useMerge } from '../hooks/useMerge';
import { useSerQuery } from '../hooks/useSerQuery';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [componentFiles, setComponentFiles] = useState([]);

  const serGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceList`;
  const comGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceCompList`;
  const serPost = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/PotService`;
  const comPost = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/PotCompany`;

  const serData = useSerQuery(serGet)?.data;
  const comData = useComQuery(comGet)?.data;

  const mergedBySerType = useMerge(serGet);
  const mergedSerType = mergedBySerType?.mergedItems;
  const mergedSerTypeAll = mergedBySerType?.mergedItemsAll;

  return (
    <AppContext.Provider
      value={{
        showDropdown,
        setShowDropdown,
        serGet,
        comGet,
        serPost,
        comPost,
        serData,
        comData,
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
