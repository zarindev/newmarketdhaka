import { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import downArrow from "../../images/svg/arrow-down.svg";
import ServicesSubmenu from "../ServicesSubmenu/ServicesSubmenu";
import { servicesData } from "./servicesData";

const SingleService = ({ service, image, servicesRef }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [activeSer, setActiveSer] = useState({
    service: "",
    submenu: [],
  });

  const serviceCtnRef = useRef(null);
  const serviceRef = useRef(null);

  const getActiveService = () => {
    const data = servicesData.find(
      (item) => item.service === serviceRef.current.textContent
    );
    setActiveSer(data);

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
        activeSer={activeSer}
      />
      <div
        className={isSubmenuOpen ? "service activeSer" : "service"}
        ref={serviceRef}
        onClick={handleClick}
      >
        <div className="service-img-ctn">
          <img src={image} alt={service} className="service-img" />
        </div>
        <div className="service-title-ctn">
          <p className="service-title">{service}</p>
          {activeSer.submenu && (
            <img src={downArrow} alt="down-arrow" className="service-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleService;
