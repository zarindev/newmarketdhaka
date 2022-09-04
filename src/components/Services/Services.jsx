import React, { useRef } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import arrowCircleDown from '../../images/svg/arrow-circle-down.svg';
import SingleService from './SingleService';
import RoundedButton from '../RoundedButton/RoundedButton';

const Services = ({ data }) => {
  const servicesRef = useRef();

  return (
    <div className="services">
      <h1 className="services-title">All Services</h1>
      <div className="services-ctn" ref={servicesRef}>
        {data.map((service) => {
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
          text="See All Services"
          icon={arrowCircleDown}
          altText="arrow-circle-down"
        />
      </Link>
    </div>
  );
};

export default Services;
