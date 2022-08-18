import { useState } from 'react';
import { Link } from 'react-router-dom';
import { snakeCase } from '../../functions/formatString';
import ellipse from '../../images/svg/Ellipse 2.svg';
import locationIcon from '../../images/svg/location.svg';
import profileIcon from '../../images/svg/profile.svg';
import defaultOne from '../../images/service-one.png';
import defaultTwo from '../../images/service-two.png';
import defaultThree from '../../images/service-three.png';
import defaultFour from '../../images/service-zero.png';
import Dots from '../Dots/Dots';

const SingleSlide = ({
  data,
  title,
  location,
  name,
  serType,
  serviceOpen,
  serviceClose,
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const defaultImg = [defaultOne, defaultTwo, defaultThree, defaultFour];

  return (
    <div className="slide-ctn">
      <Dots
        arrLength={4}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        imageData={defaultImg}
      />
      <Link to={`/home/${snakeCase(serType)}/${snakeCase(title)}`}>
        <div className="slide">
          <div className="slide-img-ctn">
            {data ? (
              <img
                src={`data:image/jpeg;base64,${data}`}
                alt={title}
                className="slide-img"
              />
            ) : (
              <img
                src={defaultImg[imageIndex]}
                alt={title}
                className="slide-img"
              />
            )}
          </div>
          <div className="slide-content">
            <h4 className="slide-title">{title}</h4>
            {serviceOpen && serviceClose && (
              <p className="slide-para">{`${serviceOpen} - ${serviceClose}`}</p>
            )}
            {location && (
              <div className="slide-location-ctn">
                <img
                  src={locationIcon}
                  alt="location icon"
                  className="location-icon"
                />
                <p className="slide-para">{location}</p>
              </div>
            )}
            {name && (
              <div className="slide-name-ctn">
                <img
                  src={profileIcon}
                  alt="profile icon"
                  className="profile-icon"
                />
                <p className="slide-para">{name}</p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleSlide;
