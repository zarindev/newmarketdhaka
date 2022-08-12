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

const SingleSlide = ({ image, title, workWeek, location, name, serType }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const defaultImg = [defaultOne, defaultTwo, defaultThree, defaultFour];

  return (
    <div className="slide-ctn">
      <div className="image-dots-ctn">
        {Array.from({ length: 4 }).map((item, index) => {
          return (
            <img
              key={index}
              src={ellipse}
              alt="ellipse icon"
              className={
                imageIndex === index
                  ? 'image-dot image-dot-active'
                  : 'image-dot'
              }
              onClick={() => setImageIndex(index)}
            />
          );
        })}
      </div>
      <Link to={`/home/${snakeCase(serType)}/${snakeCase(title)}`}>
        <div className="slide">
          <div className="slide-image-ctn">
            {image && (
              <img
                src={image[imageIndex]}
                alt={title}
                className="slide-image"
              />
            )}
            {image || (
              <img
                src={defaultImg[imageIndex]}
                alt={title}
                className="slide-image"
              />
            )}
          </div>
          <div className="slide-content">
            <h4 className="slide-title">{title}</h4>
            <p className="slide-para">{workWeek}</p>
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
