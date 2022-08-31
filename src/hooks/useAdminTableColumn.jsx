import { useState, useEffect, useMemo } from 'react';
import providerIcon from '../images/technical-service 1.png';
import serviceIcon from '../images/customer-service 1.png';
import companyIcon from '../images/enterprise 1.png';
import categoryIcon from '../images/subfolder 1.png';
import subCategoryIcon from '../images/options 1.png';
import { useWindowSize } from './useWindowSize';

export const useAdminTableColumn = () => {
  const size = useWindowSize();
  const { width } = size;
  const [isShowed, setIsShowed] = useState(true);

  useEffect(() => {
    if (width < 1100) {
      setIsShowed(false);
    } else {
      setIsShowed(true);
    }
  }, [width]);

  const columns = useMemo(
    () => [
      {
        Header: () => (
          <div className="tabel-label-ctn">
            <img
              src={providerIcon}
              alt="serviceProvider"
              className="table-label-icon"
            />
            <p className="tabel-label">Provider ID</p>
          </div>
        ),
        accessor: 'companyInfoId',
        show: true,
      },
      {
        Header: () => (
          <div className="tabel-label-ctn">
            <img
              src={serviceIcon}
              alt="serviceProvider"
              className="table-label-icon"
            />
            <p className="tabel-label">Service</p>
          </div>
        ),
        accessor: 'title',
        show: true,
      },
      {
        Header: () => (
          <div className="tabel-label-ctn">
            <img
              src={companyIcon}
              alt="serviceProvider"
              className="table-label-icon"
            />
            <p className="tabel-label">Company</p>
          </div>
        ),
        accessor: 'companyInfo.companyName',
        show: isShowed,
      },
      {
        Header: () => (
          <div className="tabel-label-ctn">
            <img
              src={categoryIcon}
              alt="serviceProvider"
              className="table-label-icon"
            />
            <p className="tabel-label">Category</p>
          </div>
        ),
        accessor: 'serType',
        show: isShowed,
      },
      {
        Header: () => (
          <div className="tabel-label-ctn">
            <img
              src={subCategoryIcon}
              alt="serviceProvider"
              className="table-label-icon"
            />
            <p className="tabel-label">Sub category</p>
          </div>
        ),
        accessor: 'offeredServices',
        show: isShowed,
      },
    ],
    [isShowed]
  );

  return columns;
};
