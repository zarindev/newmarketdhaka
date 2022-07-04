import React from 'react';
import './ServicesSlider.css';
import SliderComponent from './SliderComponent';

const ServicesSlider = () => {
  return (
    <div className="services-slider">
      <h1 className="services-slider-title">
        Take a glimps of all the services
      </h1>
      <SliderComponent sliderTitle="Home Services" />
      <SliderComponent sliderTitle="Car Services" />
      <SliderComponent sliderTitle="IT Training" />
    </div>
  );
};

export default ServicesSlider;
