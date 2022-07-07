import React, { useState, useEffect } from 'react';
import { sliderData } from './sliderData';
import rightArrow from '../../images/svg/right-arrow 1 (Traced).svg';
import rightArrowTwo from '../../images/svg/right-arrow 2 (Traced).svg';
import SingleSlide from './SingleSlide';

const SliderComponent = ({ sliderTitle }) => {
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
          return <SingleSlide key={slide.id} {...slide} index={index} />;
        })}
      </div>
    </div>
  );
};

export default SliderComponent;
