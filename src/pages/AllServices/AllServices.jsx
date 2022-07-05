import React from 'react';
import './AllServices.css';
import Services from '../../components/Services/Services';
import { allServicesData } from '../allServicesData';

const AllServices = () => {
  return (
    <div className="all-services">
      <div className="all-services-banner">
        <h1 className="all-services-title">All Services</h1>
      </div>
      <Services />
      {allServicesData.map((serviceData) => {
        console.log(serviceData['Home & Office']);
      })}

      <div className="all-services-list">
        <div className="all-services-list-styled-break"></div>
        <div className="all-services-content">
          <h4 className="all-services-list-title"></h4>
          <ul className="all-services-list-ctn">
            <li className="all-services-list"></li>
            <li className="all-services-list"></li>
            <li className="all-services-list"></li>
            <li className="all-services-list"></li>
            <li className="all-services-list"></li>
            <li className="all-services-list"></li>
            <li className="all-services-list"></li>
            <li className="all-services-list"></li>
            <li className="all-services-list"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
