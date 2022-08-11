import ClipLoader from 'react-spinners/ClipLoader';
import './Loading.css';

const Loading = ({ color, size }) => {
  return (
    <div className="loading">
      <ClipLoader color={color} size={size} />
    </div>
  );
};

export default Loading;
