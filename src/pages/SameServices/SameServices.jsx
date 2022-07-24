import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { sliderData } from '../../components/ServicesSlider/sliderData';
import SliderComponent from '../../components/ServicesSlider/SliderComponent';
import './SameServices.css';
import { useGlobalContext } from '../../context/FunctionProvider';
import SingleSlide from '../../components/ServicesSlider/SingleSlide';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/Utilities/ScrollToTop';

const SameServices = () => {
  const { service_type } = useParams();
  const { checkCase } = useGlobalContext();
  const [currentServices, setCurrentServices] = useState([]);
  const [pageServices, setPageServices] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [serviceOffset, setServiceOffset] = useState(0); // serviceOffset => index of the first service
  const servicesPerPage = 9;

  useEffect(() => {
    const getCurrentServices = () => {
      const data = sliderData.find(
        (services) => services.serviceType === checkCase(service_type)
      );
      const specificKey = Object.keys(data)[2];
      const specificServices = data[specificKey];
      specificServices && setCurrentServices(specificServices);
    };
    getCurrentServices();
  });

  useEffect(() => {
    const endOffset = serviceOffset + servicesPerPage; // endOffset => index of the last servcie
    setPageServices(currentServices.slice(serviceOffset, endOffset));
    setPageCount(Math.ceil(currentServices.length / servicesPerPage));
  }, [currentServices, serviceOffset, servicesPerPage]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * servicesPerPage) / pageServices.length;
    setServiceOffset(newOffset);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceOffset, servicesPerPage]);

  return (
    <>
      <ScrollToTop>
        <TopNav />
        <CategoryNav />
        <div className="same-services-ctn">
          <div className="slider-heading">
            <h3 className="slider-title">{checkCase(service_type)}</h3>
            <p className="same-services-avilable">
              {`${currentServices.length} Services Avilable`}
            </p>
            <div className="same-styled-divider"></div>
          </div>
          <div className="single-slide-ctn">
            {pageServices.map((service) => {
              return (
                <SingleSlide
                  key={service.id}
                  {...service}
                  sliderTitle={checkCase(service_type)}
                />
              );
            })}
          </div>
          <ReactPaginate
            previousLabel="Prev"
            nextLabel="Next"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            breakLabel="..."
            pageRangeDisplayed={9}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageClassName="pagination-number"
            previousClassName="pagination-prev pagination-text"
            nextClassName="pagination-next pagination-text"
            disabledClassName="pagination-disabled"
            activeClassName="pagination-active"
            breakClassName="pagination-break"
          />
        </div>
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default SameServices;
