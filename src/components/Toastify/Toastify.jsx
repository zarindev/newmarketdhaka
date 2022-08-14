import { ToastContainer } from 'react-toastify';

const Toastify = ({ position }) => {
  return (
    <ToastContainer
      limit={1}
      position={position}
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export default Toastify;
