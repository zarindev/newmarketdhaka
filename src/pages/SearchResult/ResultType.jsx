import SingleSlide from '../../components/ServicesSlider/SingleSlide';

const ResultType = ({ result }) => {
  return (
    <>
      {result.length > 0 && (
        <div className="same-services-ctn">
          <div className="slider-heading">
            <h3 className="slider-title">Keyword Search Results</h3>
            <p className="same-services-avilable">
              {`${result.length} Services Avilable`}
            </p>
            <div className="same-styled-divider"></div>
          </div>
          <div className="single-slide-ctn">
            {result.map((service) => {
              return <SingleSlide key={service.id} {...service} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ResultType;
