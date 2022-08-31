import timesIcon from '../../images/svg/times-round.svg';

const ModalContent = ({ approvalData, closeModal }) => {
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
      <img
        src={timesIcon}
        alt="times"
        className="modal-close-btn"
        onClick={closeModal}
      />
      <div className="combo-btn-ctn">
        <button className="combo-btn">Accept</button>
        <button className="combo-btn combo-btn-two">Decline</button>
      </div>
    </div>
  );
};

export default ModalContent;
