import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import PaginationCom from '../../components/PaginationCom/PaginationCom';
import SingleSlide from '../../components/ServicesSlider/SingleSlide';
import { useFilter } from '../../hooks/useFilter';

const CreatedServices = ({ activeComId }) => {
  const { activeSer, serIsLoading } = useFilter('companyInfoId', activeComId);

  const [activeServices, setActiveServices] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [serviceOffset, setServiceOffset] = useState(0); // serviceOffset => index of the first service
  const servicesPerPage = 9;

  useEffect(() => {
    const endOffset = serviceOffset + servicesPerPage; // endOffset => index of the last servcie
    setActiveServices(activeSer.slice(serviceOffset, endOffset));
    setPageCount(Math.ceil(activeSer.length / servicesPerPage));
  }, [activeSer, serviceOffset, servicesPerPage]);

  if (serIsLoading) {
    return <Loading color="#ce2d4f" size={125} />;
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
          {activeSer.length === 0 && (
            <h2 className="created-ser-null">
              Created services are displayed here. Click on the{' '}
              <span className="created-ser-null-custom">
                Create New Service
              </span>{' '}
              button to create a service
            </h2>
          )}
          {activeServices.map((service) => {
            return <SingleSlide key={service.id} {...service} />;
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
