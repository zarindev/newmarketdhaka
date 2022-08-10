import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { snakeCase } from '../../functions/formatString';
import ellipse from '../../images/svg/Ellipse 2.svg';

const SingleSlide = ({
  image,
  title,
  workWeek,
  locationIcon,
  location,
  profileIcon,
  name,
  serType,
}) => {
  const [imageIndex, setImageIndex] = useState(0);

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
          </div>
          <div className="slide-content">
            <h4 className="slide-title">{title}</h4>
            <p className="slide-para">{workWeek}</p>
            <div className="slide-location-ctn">
              <img
                src={locationIcon}
                alt="location icon"
                className="location-icon"
              />
              <p className="slide-para">{location}</p>
            </div>
            <div className="slide-name-ctn">
              <img
                src={profileIcon}
                alt="profile icon"
                className="profile-icon"
              />
              <p className="slide-para">{name}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleSlide;
