import { createContext, useState, useEffect, useContext } from 'react';
import { useMerge } from '../hooks/useMerge';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [componentFiles, setComponentFiles] = useState([]);

  const serGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceList`;
  const comGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceCompList`;
  const serPost = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/PotService`;
  const comPost = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/PotCompany`;

  const { mergedSerType } = useMerge();
  const { mergedSerTypeAll } = useMerge();

  return (
    <AppContext.Provider
      value={{
        mergedSerType,
        mergedSerTypeAll,
        componentFiles,
        setComponentFiles,
        serGet,
        comGet,
        serPost,
        comPost,
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
