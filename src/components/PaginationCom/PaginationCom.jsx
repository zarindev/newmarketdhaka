import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './PaginationCom.css';

const PaginationCom = ({
  activeServices,
  pageCount,
  serviceOffset,
  setServiceOffset,
  servicesPerPage,
}) => {
  const handlePageClick = (e) => {
    const newOffset = (e.selected * servicesPerPage) / activeServices.length;
    setServiceOffset(newOffset);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceOffset, servicesPerPage]);

  return (
    <ReactPaginate
      previousLabel="Prev"
      nextLabel="Next"
      pageCount={pageCount}
      onPageChange={handlePageClick}
      breakLabel="..."
      pageRangeDisplayed={8}
      marginPagesDisplayed={3}
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      pageClassName="pagination-number"
      previousClassName="pagination-prev pagination-text"
      nextClassName="pagination-next pagination-text"
      activeClassName="pagination-active"
      disabledClassName="pagination-disabled"
      breakClassName="pagination-break"
    />
  );
};

export default PaginationCom;
