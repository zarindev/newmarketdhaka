import { useState } from "react";
import "./table.css";
import { useTable, useSortBy } from "react-table";

// images import
import sortUpIcon from "../../images/sort-up 1.png";
import Modal from "../Modal/Modal";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);
  const [row, setRow] = useState({});

  const [isOpen, setIsOpen] = useState(false);

  const getRowData = (row) => {
    if (!row) return;
    setRow(row);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} row={row} />
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
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="approval-table-gap"></tbody>
        <tbody {...getTableBodyProps()} className="table-body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => getRowData(row)}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
