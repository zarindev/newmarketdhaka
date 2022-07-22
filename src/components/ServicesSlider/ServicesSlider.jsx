import React from 'react';
import { Link } from 'react-router-dom';
import RoundedButton from '../SmallComponents/RoundedButton/RoundedButton';
import './ServicesSlider.css';
import SliderComponent from './SliderComponent';

const ServicesSlider = () => {
  return (
    <div className="services-slider">
      <h1 className="services-slider-title">
        Take a glimps of all the services
      </h1>
      <SliderComponent sliderTitle="Home services" />
      <SliderComponent sliderTitle="Car services" />
      <SliderComponent sliderTitle="IT training" />
      <Link to="/more_services">
        <RoundedButton buttonText="Explore More Services" />
      </Link>
    </div>
  );
};

export default ServicesSlider;
