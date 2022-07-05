import React from 'react';
import { servicesData } from './services-data';
import './Services.css';
import { Link } from 'react-router-dom';
import downArrow from '../../images/svg/down-arrow 1 (Traced).svg';
import arrowCircleDown from '../../images/svg/arrow-circle-down.svg';

const Services = () => {
  return (
    <div className="services">
      <h1 className="services-title">All Services</h1>
      <div className="services-ctn">
        {servicesData.map((service) => {
          return (
            <div className="service" key={service.id}>
              <div className="service-img-ctn">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-img"
                />
              </div>
              <div className="service-title-ctn">
                <p className="service-title">{service.title}</p>
                <img
                  src={downArrow}
                  alt="down-arrow icon"
                  className="service-icon"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="styled-divider"></div>
      <Link to="/all_services">
        <button className="services-btn">
          <p>See All Services</p>
          <img src={arrowCircleDown} alt="arrow-circle-down icon" />
        </button>
      </Link>
    </div>
  );
};

export default Services;
