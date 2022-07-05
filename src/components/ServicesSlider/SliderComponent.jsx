import React, { useState, useEffect, useRef } from 'react';
import { sliderData } from './sliderData';
import rightArrow from '../../images/svg/right-arrow 1 (Traced).svg';
import rightArrowTwo from '../../images/svg/right-arrow 2 (Traced).svg';
import ellipse from '../../images/svg/Ellipse 2.svg';

const SliderComponent = ({ sliderTitle }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = sliderData[sliderTitle].length;

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? slides - 1 : slideIndex - 1);
  };

  const nextSlide = () => {
    setSlideIndex(slideIndex === slides - 1 ? 0 : slideIndex + 1);
  };

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
          onClick={prevSlide}
        />
        <img
          src={rightArrowTwo}
          alt="right-arrow icon"
          className="slide-arrow slide-arrow-right"
          onClick={nextSlide}
        />
        {sliderData[sliderTitle].map((slide, index) => {
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
                <img
                  src={image[index || imageIndex]}
                  alt={title}
                  className="slide-image"
                />
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
