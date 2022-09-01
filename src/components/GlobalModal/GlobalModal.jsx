import Modal from 'react-modal';
import './GlobalModal.css';
import serviceIcon from '../../images/customer-service 1.png';
import companyIcon from '../../images/enterprise 1.png';
import categoryIcon from '../../images/subfolder 1.png';
import subCategoryIcon from '../../images/options 1.png';
import licenseIcon from '../../images/key 1.png';
import binIcon from '../../images/forgot-password 1.png';
import ModalContent from './ModalContent';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ApprovalModal = ({
  modalIsOpen,
  openModal,
  afterOpenModal,
  closeModal,
  activeRow,
  trueBtnText,
  falseBtnText,
  falseDelBtnText,
}) => {
  const { title, serType, offeredServices, companyInfo } = activeRow?.original;
  const { companyName, licenseKey, binNumber } = companyInfo;

  const approvalData = [
    { id: 1, icon: serviceIcon, label: 'Service', content: title },
    { id: 2, icon: companyIcon, label: 'Company', content: companyName },
    { id: 3, icon: categoryIcon, label: 'Category', content: serType },
    {
      id: 4,
      icon: subCategoryIcon,
      label: 'Sub category',
      content: offeredServices,
    },
    { id: 5, icon: licenseIcon, label: 'Licence key', content: licenseKey },
    { id: 6, icon: binIcon, label: 'Company BIN number', content: binNumber },
  ];

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false} // find alt for this
      appElement={document.getElementById('#root')}
    >
      <ModalContent
        approvalData={approvalData}
        closeModal={closeModal}
        trueBtnText={trueBtnText}
        falseBtnText={falseBtnText}
        falseDelBtnText={falseDelBtnText}
      />
    </Modal>
  );
};

export default ApprovalModal;
