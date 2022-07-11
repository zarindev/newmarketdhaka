import React, { useState, useEffect, useRef } from 'react';
import downArrow from '../../images/svg/down-arrow 1 (Traced).svg';
import ServicesSubmenu from '../ServicesSubmenu/ServicesSubmenu';
import { useOnClickOutside } from '../../context/FunctionProvider';
import { servicesData } from './servicesData';

const SingleService = ({ service, image, servicesRef }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [activeService, setActiveService] = useState({
    service: '',
    submenu: [],
  });

  const serviceCtnRef = useRef();
  const serviceRef = useRef();

  const getActiveService = () => {
    const data = servicesData.find(
      (item) => item.service === serviceRef.current.textContent
    );
    setActiveService(data);

    const servicesLocation = servicesRef.current.getBoundingClientRect();
    const servicesCenter = (servicesLocation.left + servicesLocation.right) / 2;
    const servicesTop = servicesLocation.y;
    const serviceLocation = serviceCtnRef.current.getBoundingClientRect();
    const serviceCenter = (serviceLocation.left + serviceLocation.right) / 2;
    const serviceTop = serviceLocation.y;
    setLocation({ servicesTop, serviceTop });
  };

  const handleClick = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  useOnClickOutside(serviceCtnRef, () => setIsSubmenuOpen(false));

  return (
    <div className="service-ctn" ref={serviceCtnRef} onClick={getActiveService}>
      <ServicesSubmenu
        isSubmenuOpen={isSubmenuOpen}
        location={location}
        activeService={activeService}
      />
      <div className="service" ref={serviceRef} onClick={handleClick}>
        <div className="service-img-ctn">
          <img src={image} alt={service} className="service-img" />
        </div>
        <div className="service-title-ctn">
          <p className="service-title">{service}</p>
          <img src={downArrow} alt="down-arrow icon" className="service-icon" />
        </div>
      </div>
    </div>
  );
};

export default SingleService;
