import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SameServices.css';
import SingleSlide from '../../components/ServicesSlider/SingleSlide';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import PaginationCom from '../../components/PaginationCom/PaginationCom';
import ScrollToTop from '../../utils/ScrollToTop';
import { checkCase, snakeCase, titleCase } from '../../functions/formatString';
import { useDocTitle } from '../../hooks/useDocTitle';
import Loading from '../../components/Loading/Loading';
import { useGlobalContext } from '../../context/AppProvider';

const SameServices = () => {
  useDocTitle();

  const { items, isLoading, setIsLoading } = useGlobalContext();

  const { service_type } = useParams();
  const [mergedSerState, setMergedSerState] = useState([]);
  const [activeServices, setActiveServices] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [serviceOffset, setServiceOffset] = useState(0); // serviceOffset => index of the first service
  const servicesPerPage = 9;

  useEffect(() => {
    if (titleCase(service_type) === 'All') {
      return setMergedSerState(items); // return => for exiting out of the loop
    }

    const mergedSer = items.filter(
      (service) => snakeCase(service.serType) === snakeCase(service_type)
    );
    setMergedSerState(mergedSer);
  }, [items, service_type]);

  useEffect(() => {
    const endOffset = serviceOffset + servicesPerPage; // endOffset => index of the last servcie
    setActiveServices(mergedSerState.slice(serviceOffset, endOffset));
    setPageCount(Math.ceil(mergedSerState.length / servicesPerPage));
  }, [mergedSerState, serviceOffset, servicesPerPage]);

  useEffect(() => {
    if (mergedSerState.length > 0) setIsLoading(false);
  }, [mergedSerState, setIsLoading]);

  return (
    <ScrollToTop>
      <TopNav />
      <CategoryNav />
      <div className="same-services-ctn">
        <div className="slider-heading">
          <h3 className="slider-title">{checkCase(service_type)}</h3>
          <p className="same-services-avilable">
            {`${mergedSerState.length} Services Avilable`}
          </p>
          <div className="same-styled-divider"></div>
        </div>
        <div className="single-slide-ctn">
          {isLoading && <Loading color="#ce2d4f" size={125} />}
          {activeServices &&
            activeServices.map((service) => {
              return (
                <SingleSlide
                  key={service.id}
                  {...service}
                  serType={service_type}
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
      <Footer />
    </ScrollToTop>
  );
};

export default SameServices;
