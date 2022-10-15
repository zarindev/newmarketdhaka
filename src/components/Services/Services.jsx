import React, { useRef } from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import arrowCircleDown from "../../images/svg/arrow-circle-down.svg";
import SingleService from "./SingleService";
import RoundedBtn from "../Button/RoundedBtn";
import { useGlobalContext } from "../../context/AppProvider";

const Services = ({ serData }) => {
  const navigate = useNavigate();
  const servicesRef = useRef(null);
  const { mergedSerType } = useGlobalContext();

  const handleClick = () => {
    mergedSerType.length === 0
      ? toast.info("Please wait while the services are loading", {
          progress: undefined,
          toastId: "serLoading",
        })
      : navigate("/all_services");
  };

  return (
    <section aria-label="all-services" className="services">
      <h1 className="services-title">All Services</h1>
      <div className="services-ctn" ref={servicesRef}>
        {serData.map((service) => {
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
      <RoundedBtn
        text="See All Services"
        icon={arrowCircleDown}
        altText="arrow-circle-down"
        onClick={handleClick}
      />
    </section>
  );
};

export default Services;
