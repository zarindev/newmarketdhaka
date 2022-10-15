import { useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";
import GlobalModal from "../GlobalModal/GlobalModal";
import "./Table.css";
import sortUpIcon from "../../images/sort-up 1.png";
import { useAuth } from "../../context/AuthProvider";

const Table = ({ columns, data, activeComId, tableTitle }) => {
  // hide columns
  const hiddenCols = columns.filter((column) => column.show === false);
  const hiddenAcc = hiddenCols.map((col) => col.accessor);

  const initialState = {
    hiddenColumns: [],
  };

  // main table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, initialState }, useSortBy);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [clickedId, setClickedId] = useState("");
  const [clickedSer, setClickedSer] = useState("");
  const [clickedCom, setClickedCom] = useState("");
  const [clickedCategory, setClickedCategory] = useState("");

  const { user } = useAuth();

  // modal
  const openModal = (e) => {
    setModalIsOpen(true);
    if (user?.uid === "TJyklprfkah56Y1FtrnTmXQmh8i2") {
      setClickedId(e.currentTarget.childNodes[0].textContent);
      setClickedSer(e.currentTarget.childNodes[1].textContent);
      setClickedCom(e.currentTarget.childNodes[2].textContent);
      setClickedCategory(e.currentTarget.childNodes[3].textContent);
    } else {
      setClickedSer(e.currentTarget.childNodes[0].textContent);
      setClickedCategory(e.currentTarget.childNodes[1].textContent);
    }
  };

  const afterOpenModal = () => {
    if (document.getElementById("body")) {
      // TODO: add styles after the model is opened
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // clicked row
  const [activeRow, setActiveRow] = useState({});
  useEffect(() => {
    if (user?.uid === "TJyklprfkah56Y1FtrnTmXQmh8i2") {
      const clickedRow = rows.find(
        (row) =>
          row.original.companyInfoId === parseInt(clickedId, 10) &&
          row.original.title === clickedSer &&
          row.original.companyInfo.companyName === clickedCom &&
          row.original.serType === clickedCategory
      );
      setActiveRow({ ...clickedRow });
    } else {
      const clickedComRow = rows.find(
        (row) =>
          row.original.companyInfoId === activeComId &&
          row.original.title === clickedSer &&
          row.original.serType === clickedCategory
      );
      setActiveRow({ ...clickedComRow });
    }
  }, [
    rows,
    clickedId,
    clickedSer,
    clickedCom,
    clickedCategory,
    user,
    activeComId,
  ]);

  // btn text
  const [trueBtnText, setTrueBtnText] = useState("");
  const [falseBtnText, setFalseBtnText] = useState("");

  useEffect(() => {
    if (user?.uid === "TJyklprfkah56Y1FtrnTmXQmh8i2") {
      setTrueBtnText("Accept");
      setFalseBtnText("Reject");
    } else if (tableTitle.toLowerCase().includes("active")) {
      setTrueBtnText("Disable");
      setFalseBtnText("Delete");
    } else if (tableTitle.toLowerCase().includes("disabled")) {
      setTrueBtnText("Enable");
      setFalseBtnText("Delete");
    }
  }, [user, tableTitle]);

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
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      {Object.keys(activeRow).length > 0 && (
        <GlobalModal
          modalIsOpen={modalIsOpen}
          openModal={openModal}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
          appElement={document.getElementById("body")}
          activeRow={activeRow}
          tableTitle={tableTitle}
          trueBtnText={trueBtnText}
          falseBtnText={falseBtnText}
        />
      )}
      <tbody className="approval-table-gap"></tbody>
      <tbody {...getTableBodyProps()} className="table-body">
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} onClick={openModal}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
