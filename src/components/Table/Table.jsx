import { useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';
import ApprovalModal from '../ApprovalModal/ApprovalModal';
import './Table.css';
import sortUpIcon from '../../images/sort-up 1.png';

const Table = ({ columns, data }) => {
  const hiddenCols = columns.filter((column) => column.show === false);
  const hiddenAcc = hiddenCols.map((col) => col.accessor);

  const initialState = {
    hiddenColumns: [],
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, initialState }, useSortBy);

  const [modalIsOpen, setIsOpen] = useState(false);

  const [clickedId, setclickedId] = useState('');
  const [clickedSer, setClickedSer] = useState('');
  const [clickedCom, setClickedCom] = useState('');
  const [clickedCategory, setClickedCategory] = useState('');

  const openModal = (e) => {
    setIsOpen(true);
    setclickedId(e.currentTarget.childNodes[0].textContent);
    setClickedSer(e.currentTarget.childNodes[1].textContent);
    setClickedCom(e.currentTarget.childNodes[2].textContent);
    setClickedCategory(e.currentTarget.childNodes[3].textContent);
  };

  // TODO: add styles after the model is opened
  const afterOpenModal = () => {
    if (document.getElementById('body')) {
      return;
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [activeRow, setActiveRow] = useState({});
  useEffect(() => {
    if ((clickedId, clickedSer, clickedCom, clickedCategory)) {
      const clickedRow = rows.find(
        (row) =>
          row.original.companyInfoId === parseInt(clickedId, 10) &&
          row.original.title === clickedSer &&
          row.original.companyInfo.companyName === clickedCom &&
          row.original.serType === clickedCategory
      );
      setActiveRow(clickedRow);
    }
  }, [rows, clickedId, clickedSer, clickedCom, clickedCategory]);

  return (
    <table {...getTableProps()} className="approval-table">
      <thead className="table-head">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <img
                      src={sortUpIcon}
                      alt="table sorting indicator"
                      className="table-sort-icon table-sort-icon-down"
                    />
                  ) : (
                    <img
                      src={sortUpIcon}
                      alt="table sorting indicator"
                      className="table-sort-icon"
                    />
                  )
                ) : null}
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      {Object.keys(activeRow).length > 0 && (
        <ApprovalModal
          modalIsOpen={modalIsOpen}
          openModal={openModal}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
          appElement={document.getElementById('body')}
          activeRow={activeRow}
        />
      )}
      <tbody className="approval-table-gap"></tbody>
      <tbody {...getTableBodyProps()} className="table-body">
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} onClick={openModal}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
