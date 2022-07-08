import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ellipse from '../../images/svg/Ellipse 2.svg';
import { sliderData } from './sliderData';

const SingleSlide = ({
  id,
  image,
  title,
  time,
  locationIcon,
  location,
  profileIcon,
  name,
  index,
  sliderKey,
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setImageIndex(imageIndex + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, [imageIndex]);

  useEffect(() => {
    imageIndex > image.length - 1 && setImageIndex(0);
  }, [image, imageIndex]);

  return (
    <Link
      to={`/${sliderKey
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase()}/${title.replace(/ /g, '_').toLowerCase()}`}
    >
      <div className="slide">
        <div className="slide-image-ctn">
          <img src={image[imageIndex]} alt={title} className="slide-image" />
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
                />
              );
            })}
          </div>
        </div>
        <div className="slide-content">
          <h4 className="slide-title">{title}</h4>
          <p className="slide-para">{time}</p>
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
  );
};

export default SingleSlide;
