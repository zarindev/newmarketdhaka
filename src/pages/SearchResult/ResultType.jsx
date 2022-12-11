import SingleSlide from "../../components/ServicesSlider/SingleSlide";

const ResultType = ({ searchResult, searchText }) => {
  return (
    <>
      {searchResult?.length === 0 ? (
        <div className="same-services-ctn">
          <div className="noSerWrapper">
            <h4 className="noSerText">No services found</h4>
          </div>
        </div>
      ) : (
        <div className="same-services-ctn">
          <div className="slider-heading">
            <h3 className="slider-title">
              Results for{" "}
              <span className="created-ser-null-custom">{searchText} </span>{" "}
            </h3>
            <p className="same-services-avilable">
              {`${searchResult.length} Services Avilable`}
            </p>
            <div className="same-styled-divider"></div>
          </div>
          <div className="single-slide-ctn">
            {searchResult.map((service) => {
              return (
                <SingleSlide
                  key={service.id}
                  serType={service.serCategory.value}
                  {...service}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ResultType;
