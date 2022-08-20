import React, { useRef } from 'react';
import './Services.css';
import { servicesData } from './servicesData';
import { Link } from 'react-router-dom';
import arrowCircleDown from '../../images/svg/arrow-circle-down.svg';
import SingleService from './SingleService';
import RoundedButton from '../RoundedButton/RoundedButton';

const Services = () => {
  const servicesRef = useRef();

  return (
    <div className="services">
      <h1 className="services-title">All Services</h1>
      <div className="services-ctn" ref={servicesRef}>
        {servicesData.map((service) => {
          return (
            <SingleService
              key={service.id}
              {...service}
              servicesRef={servicesRef}
            />
          );
        })}
        <div className="styled-divider"></div>
      </div>
      <Link className="services-btn-link" to="/all_services">
        <RoundedButton
          buttonText="See All Services"
          buttonIcon={arrowCircleDown}
          buttonAltText="arrow-circle-down"
        />
      </Link>
    </div>
  );
};

export default Services;
