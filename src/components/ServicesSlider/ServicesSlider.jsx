import React from 'react';
import './ServicesSlider.css';
import SliderComponent from './SliderComponent';

const ServicesSlider = () => {
  return (
    <div className="services-slider">
      <h1 className="services-slider-title">
        Take a glimps of all the services
      </h1>
      <SliderComponent sliderKey="homeServices" sliderTitle="Home Services" />
      <SliderComponent sliderKey="carServices" sliderTitle="Car Services" />
      <SliderComponent sliderKey="itTraining" sliderTitle="IT Training" />
    </div>
  );
};

export default ServicesSlider;
