import "./modal.css";
import { Dialog } from "@headlessui/react";

// images impport
import timesIcon from "../../images/svg/times-round.svg";
import serviceIcon from "../../images/customer-service 1.png";
import categoryIcon from "../../images/subfolder 1.png";
import phoneNumberIcon from "../../images/options 1.png";
import locationIcon from "../../images/svg/Location-red.svg";

const Modal = ({ isOpen, setIsOpen, row }) => {
  const rowData = [
    { icon: serviceIcon, label: "Service", content: row?.original?.title },

    {
      icon: categoryIcon,
      label: "Category",
      content: row?.original?.serCategory?.value,
    },
    {
      icon: locationIcon,
      label: "Location",
      content: row?.original?.location,
    },
    {
      icon: phoneNumberIcon,
      label: "Phone Number",
      content: row?.original?.offeredServices,
    },
  ];

  return (
    <Dialog
      as="div"
      className="modal"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Dialog.Panel className="modalPanel">
        {rowData.map((item, i) => (
          <div key={i} className="modalCards">
            <div className="modalCard">
              <img src={item?.icon} alt="serviceProvider" loading="lazy" />
              <p className="modalCardTitle">{item.label ?? "-"}</p>
            </div>
            <p className="modalCardDesc">{item.content ?? "-"}</p>
          </div>
        ))}
        <img
          src={timesIcon}
          alt="times"
          className="modalCloseButton"
          onClick={() => setIsOpen(false)}
        />
        <div className="modalButtons">
          <button className="modalButton modalPlusButton">Accept</button>
          <button className="modalButton modalMinusButton">Decline</button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
