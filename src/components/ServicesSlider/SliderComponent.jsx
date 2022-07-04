import React, { useState } from 'react';
import { sliderData } from './sliderData';
import rightArrow from '../../images/svg/right-arrow 1 (Traced).svg';
import rightArrowTwo from '../../images/svg/right-arrow 2 (Traced).svg';
import ellipseWhite from '../../images/svg/Ellipse 1.svg';
import ellipseGray from '../../images/svg/Ellipse 2.svg';

const SliderComponent = ({ sliderTitle }) => {
  const [isActive, setIsActive] = useState(false);

  const buttons = [1, 2, 3, 4];

  return (
    <div className="slider-component">
      <div className="slider-heading">
        <h3 className="slider-title">{sliderTitle}</h3>
        <div className="slider-btn-ctn">
          <p className="slider-btn-text">See All</p>
          <img
            src={rightArrow}
            alt="read-more icon"
            className="slider-btn-icon"
          />
        </div>
      </div>
      <div className="slider-content">
        <img
          src={rightArrowTwo}
          alt="left-arrow icon"
          className="slide-arrow slide-arrow-left"
        />
        <img
          src={rightArrowTwo}
          alt="left-arrow icon"
          className="slide-arrow slide-arrow-right"
        />
        {sliderData[sliderTitle].map((slide) => {
          const {
            id,
            image,
            title,
            time,
            locationIcon,
            location,
            profileIcon,
            name,
          } = slide;

          return (
            <div className="slide" key={id}>
              <div className="slide-image-ctn">
                <img src={image} alt={title} className="slide-image" />
                <div className="image-scroller-ctn">
                  {buttons.map((button, index) => {
                    return (
                      <img
                        key={index}
                        src={ellipseGray}
                        alt="ellipse icon"
                        className={
                          isActive
                            ? 'image-scroller image-scroller-active'
                            : 'image-scroller'
                        }
                        onClick={() => setIsActive(!isActive)}
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
          );
        })}
      </div>
    </div>
  );
};
export default SliderComponent;
