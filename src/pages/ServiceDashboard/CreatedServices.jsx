import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import PaginationCom from '../../components/PaginationCom/PaginationCom';
import SingleSlide from '../../components/ServicesSlider/SingleSlide';
import { useGlobalContext } from '../../context/AppProvider';

const CreatedServices = () => {
  const { items, mergedSellerId, mergedComId, isLoading, setIsLoading } =
    useGlobalContext();

  const [mergedSerState, setMergedSerState] = useState([]);
  const [activeServices, setActiveServices] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [serviceOffset, setServiceOffset] = useState(0); // serviceOffset => index of the first service
  const servicesPerPage = 9;

  const activeComId = mergedComId[0];

  useEffect(() => {
    const mergedSer = items.filter((service) => service.companyInfoId === 11);
    setMergedSerState(mergedSer);
  }, [items, activeComId]);

  useEffect(() => {
    const endOffset = serviceOffset + servicesPerPage; // endOffset => index of the last servcie
    setActiveServices(mergedSerState.slice(serviceOffset, endOffset));
    setPageCount(Math.ceil(mergedSerState.length / servicesPerPage));
  }, [mergedSerState, serviceOffset, servicesPerPage]);

  useEffect(() => {
    if (mergedSerState.length > 0) setIsLoading(false);
  }, [mergedSerState, setIsLoading]);

  return (
    <div className="created-ser-ctn">
      <div className="created-ser-heading">
        <p className="created-ser-title">All Services</p>
        <div className="created-ser-styled-divider"></div>
        <p className="created-ser-amount">{mergedSerState.length} in total</p>
      </div>
      <div className="same-services-ctn">
        <div className="single-slide-ctn">
          {isLoading && <Loading color="#ce2d4f" size={125} />}

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
