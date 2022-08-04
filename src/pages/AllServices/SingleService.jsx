import React from 'react';
import { allServicesData } from './allServicesData';

const SingleService = ({ serviceImage, serviceTitle }) => {
  return (
    <div className="all-services-list-ctn">
      <div className="all-services-list-title-ctn">
        <div className="all-services-list-styled-divider"></div>
        <img src={serviceImage} alt="" className="all-services-list-image" />
        <h3 className="all-services-list-title">{serviceTitle}</h3>
      </div>
      {allServicesData[serviceTitle].map((service) => {
        return (
          <div className="all-services-content" key={service.id}>
            <h4 className="all-services-list-type">{service.service_type}</h4>
            <ul className="all-services-lists">
              <li className="all-services-list">{service.service_item_1}</li>
              <li className="all-services-list">{service.service_item_2}</li>
              <li className="all-services-list">{service.service_item_3}</li>
              <li className="all-services-list">{service.service_item_4}</li>
              <li className="all-services-list">{service.service_item_5}</li>
              <li className="all-services-list">{service.service_item_6}</li>
              <li className="all-services-list">{service.service_item_7}</li>
              <li className="all-services-list">{service.service_item_8}</li>
              <li className="all-services-list">{service.service_item_9}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SingleService;
