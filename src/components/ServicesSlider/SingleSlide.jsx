import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import { snakeCase } from "../../functions/formatString";
import locationIcon from "../../images/svg/location.svg";
import profileIcon from "../../images/svg/profile.svg";
import Dots from "../Dots/Dots";

const SingleSlide = ({
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

  const serImgData = useMemo(
    () => [serImg1, serImg2, serImg3, serImg4],
    [serImg1, serImg2, serImg3, serImg4]
  );

  return (
    <div className="slide-ctn">
      <Dots
        arrLength={serImgData?.length}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        imageData={serImgData}
        autoPlay={false}
      />
      <Link to={`/home/${snakeCase(serType)}/${snakeCase(title)}`}>
        <div className="slide">
          <div className="slide-img-ctn">
            {serImgData && (
              <img
                src={`http://mdadmin-001-site2.ftempurl.com/images/${serImgData[imageIndex]}`}
                alt="slide-img"
                className="slide-img"
                width={315}
                height={195}
                loading="lazy"
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
