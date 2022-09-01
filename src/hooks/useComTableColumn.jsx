import { useState, useEffect, useMemo } from 'react';
import serviceIcon from '../images/customer-service 1.png';
import categoryIcon from '../images/subfolder 1.png';
import { useWindowSize } from './useWindowSize';

export const useComTableColumn = () => {
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
    ],
    [isShowed]
  );

  return columns;
};
