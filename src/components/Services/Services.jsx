import React, { useRef } from 'react';
import './Services.css';
import { servicesData } from './servicesData';
import { Link } from 'react-router-dom';
import arrowCircleDown from '../../images/svg/arrow-circle-down.svg';
import SingleService from './SingleService';

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
      <button className="services-btn">
        <Link className="services-btn-link" to="/all_services">
          <p className="services-btn-text">See All Services</p>
          <img
            src={arrowCircleDown}
            alt="arrow-circle-down icon"
            className="services-btn-icon"
          />
        </Link>
      </button>
    </div>
  );
};

export default Services;
