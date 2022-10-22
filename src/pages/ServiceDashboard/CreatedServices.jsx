import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import SingleSlide from "../../components/ServicesSlider/SingleSlide";
import { useFilter } from "../../hooks/useFilter";

const CreatedServices = ({ activeUserId }) => {
  const { activeSer, serIsLoading } = useFilter("userUId", activeUserId);

  if (serIsLoading) {
    return <Loading color="#ce2d4f" size={115} />;
  }

  return (
    <div className="created-ser-ctn">
      <div className="created-ser-heading">
        <p className="created-ser-title">All Services</p>
        <div className="created-ser-styled-divider"></div>
        <p className="created-ser-amount">{activeSer.length} in total</p>
      </div>
      <div className="same-services-ctn">
        <div className="single-slide-ctn">
          {!serIsLoading && activeSer.length === 0 ? (
            <h2 className="created-ser-null">
              Created services are displayed here. Click on the{" "}
              <span className="created-ser-null-custom">
                Create New Service
              </span>{" "}
              button to create a service
            </h2>
          ) : (
            activeSer.map((service) => {
              return (
                <SingleSlide
                  key={service.id}
                  serType={service.serCategory.value}
                  {...service}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatedServices;
