import { useMemo } from "react";

// images import
import serviceNameIcon from "../images/technical-service 1.png";
import categoryIcon from "../images/subfolder 1.png";
import phoneNumberIcon from "../images/options 1.png";

export const useComTableColumn = () => {
  const columns = useMemo(
    () => [
      {
        id: "serName",
        Header: () => (
          <div className="tabel-label-ctn">
            <img
              src={serviceNameIcon}
              alt="serviceProvider"
              className="table-label-icon"
            />
            <p className="tabel-label">Service Name</p>
          </div>
        ),
        accessor: "title",
      },
      {
        id: "serCategory",
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
        accessor: "serCategory.value",
      },
      {
        id: "status",
        Header: () => (
          <div className="tabel-label-ctn">
            <img
              src={phoneNumberIcon}
              alt="serviceProvider"
              className="table-label-icon"
            />
            <p className="tabel-label">Status</p>
          </div>
        ),
        accessor: (item) =>
          item.status.toString() === "true" ? "Active" : "Inactive",
      },
    ],
    []
  );

  return columns;
};
