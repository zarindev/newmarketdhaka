import React from 'react';
import ComboBtn from '../ComboBtn/ComboBtn';

const ModalContent = ({ approvalData }) => {
  return (
    <div className="modal">
      {approvalData.map((item) => {
        const { id, icon, label, content } = item;
        return (
          <div className="modal-content" key={id}>
            <div className="tabel-label-ctn">
              <img
                src={icon}
                alt="serviceProvider"
                className="table-label-icon"
              />
              <p className="tabel-label">{label}</p>
            </div>
            <p className="modal-data">{content}</p>
          </div>
        );
      })}
      <ComboBtn btnOneText="Accept" btnTwoText="Decline" />
    </div>
  );
};

export default ModalContent;
