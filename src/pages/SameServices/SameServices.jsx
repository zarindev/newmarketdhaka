import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SameServices.css';
import SingleSlide from '../../components/ServicesSlider/SingleSlide';
import TopNav from '../../components/Navbar/TopNav';
import BottomNav from '../../components/Navbar/BottomNav';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../utils/ScrollToTop';
import { checkCase, snakeCase, titleCase } from '../../functions/formatString';
import { useDocTitle } from '../../hooks/useDocTitle';
import Loading from '../../components/Loading/Loading';
import { useSerQuery } from '../../hooks/useSerQuery';

const SameServices = () => {
  useDocTitle();

  const { serData, serIsLoading } = useSerQuery();
  const { service_type } = useParams();
  const [activeSer, setActiveSer] = useState([]);

  useEffect(() => {
    if (serData && titleCase(service_type) === 'All') {
      return setActiveSer(serData); // return => for exiting out of the loop
    } else if (serData) {
      const mergedSer = serData?.filter(
        (service) => snakeCase(service.serType) === snakeCase(service_type)
      );
      setActiveSer(mergedSer);
    }
  }, [serData, service_type]);

  return (
    <ScrollToTop>
      <TopNav />
      <BottomNav />
      {serIsLoading ? (
        <Loading color="#ce2d4f" size={115} />
      ) : (
        <div className="same-services-ctn">
          <div className="slider-heading">
            <h3 className="slider-title">{checkCase(service_type)}</h3>
            <p className="same-services-avilable">
              {`${activeSer.length} Services Avilable`}
            </p>
            <div className="same-styled-divider"></div>
          </div>
          <div className="single-slide-ctn">
            {activeSer.length <= 0 ? (
              <Loading color="#ce2d4f" size={125} />
            ) : (
              activeSer.map((service) => {
                return (
                  <SingleSlide
                    key={service.id}
                    {...service}
                    serType={service_type}
                  />
                );
              })
            )}
          </div>
        </div>
      )}

      <Footer />
    </ScrollToTop>
  );
};

export default SameServices;
