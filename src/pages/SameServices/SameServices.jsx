import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sliderData } from '../../components/ServicesSlider/sliderData';
import SliderComponent from '../../components/ServicesSlider/SliderComponent';
import './SameServices.css';
import { useGlobalContext } from '../../context/FunctionProvider';
import SingleSlide from '../../components/ServicesSlider/SingleSlide';

const SameServices = () => {
  const { service_type } = useParams();
  const { checkCase } = useGlobalContext();
  const [currentServices, setCurrentServices] = useState([]);

  useEffect(() => {
    const getCurrentServices = () => {
      const data = sliderData.find(
        (services) => services.serviceType === checkCase(service_type)
      );
      const specificKey = Object.keys(data)[2];
      const specificServices = data[specificKey];

      specificServices && setCurrentServices(specificServices);
    };
    getCurrentServices();
  }, []);

  return (
    <div className="same-services-ctn">
      <div className="slider-heading">
        <h3 className="slider-title">{checkCase(service_type)}</h3>
        <p className="same-services-avilable">
          {`${currentServices.length} Services Avilable`}
        </p>
        <div className="same-styled-divider"></div>
      </div>
      <div className="single-slide-ctn">
        {currentServices.map((service) => {
          return (
            <SingleSlide
              key={service.id}
              {...service}
              sliderTitle={checkCase(service_type)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SameServices;
