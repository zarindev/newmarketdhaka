import SingleSlide from "../../components/ServicesSlider/SingleSlide";

const CreatedServices = ({ activeSer }) => {
  return (
    <div className="created-ser-ctn">
      <div className="created-ser-heading">
        <p className="created-ser-title">All Services</p>
        <div className="created-ser-styled-divider"></div>
        <p className="created-ser-amount">{activeSer.length} in total</p>
      </div>
      <div className="same-services-ctn">
        <div className="single-slide-ctn">
          {activeSer.length === 0 ? (
            <h2 className="created-ser-null">
              Created services are displayed here. Click on the{" "}
              <span className="created-ser-null-custom">
                Create New Service
              </span>{" "}
              button to create a service
            </h2>
          ) : (
            activeSer.map((service) => (
              <SingleSlide
                key={service.id}
                serType={service.serCategory.value}
                {...service}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatedServices;
