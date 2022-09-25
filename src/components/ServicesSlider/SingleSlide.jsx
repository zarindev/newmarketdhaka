import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';
import { snakeCase } from '../../functions/formatString';
import locationIcon from '../../images/svg/location.svg';
import profileIcon from '../../images/svg/profile.svg';
import defaultOne from '../../images/service-one.webp';
import defaultTwo from '../../images/service-two.webp';
import defaultThree from '../../images/service-three.webp';
import defaultFour from '../../images/service-four.webp';
import Dots from '../Dots/Dots';

const defaultImgData = [defaultOne, defaultTwo, defaultThree, defaultFour];

const SingleSlide = ({
  data,
  serImg1,
  serImg2,
  serImg3,
  serImg4,
  title,
  location,
  name,
  serType,
  serviceOpen,
  serviceClose,
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isSerImg, setIsSerImg] = useState(false);

  const serImgData = useMemo(
    () => [serImg1, serImg2, serImg3, serImg4],
    [serImg1, serImg2, serImg3, serImg4]
  );

  useEffect(() => {
    if (!serImgData.includes(undefined) && serImgData.length > 0) {
      setIsSerImg(true);
    } else {
      setIsSerImg(false);
    }
  }, [serImgData]);

  return (
    <div className="slide-ctn">
      <Dots
        arrLength={4}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        imageData={serImgData}
        autoPlay={false}
      />
      <Link to={`/home/${snakeCase(serType)}/${snakeCase(title)}`}>
        <div className="slide">
          <div className="slide-img-ctn">
            {isSerImg ? (
              <Image
                cloudName={process.env.REACT_APP_CLD_CLOUD_NAME}
                publicId={serImgData[imageIndex]}
                className="slide-img"
              >
                <Transformation width="400" crop="scale" />
                <Transformation fetchFormat="auto" />
              </Image>
            ) : (
              <img
                src={defaultImgData[imageIndex]}
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
