import { createContext, useState, useEffect, useContext } from 'react';
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

  const { serData } = useSerQuery(serGet);
  const { mergedSerType, mergedSerTypeAll } = useMerge(serGet);

  return (
    <AppContext.Provider
      value={{
        showDropdown,
        setShowDropdown,
        componentFiles,
        setComponentFiles,
        serGet,
        comGet,
        serPost,
        comPost,
        serData,
        mergedSerType,
        mergedSerTypeAll,
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
