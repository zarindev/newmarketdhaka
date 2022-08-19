import { useEffect } from 'react';
import ellipse from '../../images/svg/Ellipse 2.svg';
import './Dots.css';

const Dots = ({
  arrLength,
  imageIndex,
  setImageIndex,
  imageData,
  autoPlay,
}) => {
  useEffect(() => {
    if (autoPlay) {
      const slider = setInterval(() => {
        setImageIndex(imageIndex + 1);
      }, 4000);
      return () => clearInterval(slider);
    }
  }, [imageIndex, setImageIndex, autoPlay]);

  useEffect(() => {
    imageIndex > imageData.length - 1 && setImageIndex(0);
  }, [imageIndex, setImageIndex, imageData]);

  return (
    <div className="dots-ctn">
      {Array.from({ length: arrLength }).map((item, index) => {
        return (
          <img
            key={index}
            src={ellipse}
            alt="ellipse"
            className={imageIndex === index ? 'dot dot-active' : 'dot'}
            onClick={() => setImageIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default Dots;
