import { useState, useEffect } from 'react';
import PaginationCom from '../../components/PaginationCom/PaginationCom';
import SingleSlide from '../../components/ServicesSlider/SingleSlide';
import { sliderData } from '../../components/ServicesSlider/sliderData';
import { checkCase } from '../../functions/formatString';

const CreatedServices = () => {
  const [activeServices, setActiveServices] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [serviceOffset, setServiceOffset] = useState(0); // serviceOffset => index of the first service
  const servicesPerPage = 9;

  const specificService = sliderData?.find(
    (service) => service.serType === checkCase('Home services')
  );

  const { serType, serAvailable } = specificService;

  useEffect(() => {
    const endOffset = serviceOffset + servicesPerPage; // endOffset => index of the last servcie
    setActiveServices(serAvailable.slice(serviceOffset, endOffset));
    setPageCount(Math.ceil(serAvailable.length / servicesPerPage));
  }, [serAvailable, serviceOffset, servicesPerPage]);

  return (
    <div className="created-ser-ctn">
      <div className="created-ser-heading">
        <p className="created-ser-title">All Services</p>
        <div className="created-ser-styled-divider"></div>
        <p className="created-ser-amount">{serAvailable.length} in total</p>
      </div>
      <div className="same-services-ctn">
        <div className="single-slide-ctn">
          {activeServices.map((service) => {
            return (
              <SingleSlide
                key={service.id}
                {...service}
                serType={checkCase(serType)}
              />
            );
          })}
        </div>
        <PaginationCom
          activeServices={activeServices}
          pageCount={pageCount}
          serviceOffset={serviceOffset}
          setServiceOffset={setServiceOffset}
          servicesPerPage={servicesPerPage}
        />
      </div>
    </div>
  );
};

export default CreatedServices;
