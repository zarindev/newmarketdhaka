import React, { useState, useEffect } from 'react';
import { sliderData } from './sliderData';
import rightArrow from '../../images/svg/right-arrow 1 (Traced).svg';
import rightArrowTwo from '../../images/svg/right-arrow 2 (Traced).svg';
import SingleSlide from './SingleSlide';
import { useGlobalContext } from '../../context/FunctionProvider';

const SliderComponent = ({ sliderTitle }) => {
  const { snakeCase } = useGlobalContext();
  const [service, setService] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = sliderData.map(
    (services) => services[Object.keys(services)[2]][0]
  ).length;

  useEffect(() => {
    const getServices = () => {
      const data = sliderData.find(
        (services) => snakeCase(services.serviceType) === snakeCase(sliderTitle)
      );
      if (data.serviceType) {
        setService(data.servicesAvilable);
      } else {
        setService([]);
      }
    };
    getServices();
  }, []);

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

        {service.map((slide) => {
          return (
            <SingleSlide key={slide.id} {...slide} sliderTitle={sliderTitle} />
          );
        })}

        {/* {sliderData[sliderKey].map((slide, index) => {
          return (
            <SingleSlide key={slide.id} {...slide} sliderKey={sliderKey} />
          );
        })} */}
      </div>
    </div>
  );
};

export default SliderComponent;
