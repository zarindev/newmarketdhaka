import { useMemo } from 'react';
import providerIcon from '../images/technical-service 1.png';
import serviceIcon from '../images/customer-service 1.png';
import companyIcon from '../images/enterprise 1.png';
import categoryIcon from '../images/subfolder 1.png';
import subCategoryIcon from '../images/options 1.png';

export const useAdminTableColumn = () => {
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
      },
    ],
    []
  );

  return columns;
};
