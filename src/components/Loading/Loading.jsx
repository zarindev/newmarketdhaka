import ClipLoader from "react-spinners/ClipLoader";
import "./loading.css";

const Loading = ({ color, size }) => {
  return (
    <section aria-label="spinning loader" className="loading">
      <ClipLoader color={color} size={size} />
    </section>
  );
};

export default Loading;
