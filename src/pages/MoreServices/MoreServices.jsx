import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import RoundedButton from '../../components/SmallComponents/RoundedButton/RoundedButton';
import ScrollToTop from '../../components/Utilities/ScrollToTop';
import SliderComponent from '../../components/ServicesSlider/SliderComponent';
import arrowCircleDown from '../../images/svg/arrow-circle-down.svg';
import './MoreServices.css';

const MoreServices = () => {
  return (
    <>
      <ScrollToTop>
        <TopNav />
        <CategoryNav />
        <div className="more-services-ctn">
          <div className="more-services">
            <SliderComponent sliderTitle="Home services" />
            <SliderComponent sliderTitle="Car services" />
            <SliderComponent sliderTitle="IT training" />
            <SliderComponent sliderTitle="Home services" />
            <SliderComponent sliderTitle="Car services" />
            <SliderComponent sliderTitle="IT training" />
          </div>
          <Link to="/more_services/all_services">
            <RoundedButton
              buttonText="See All Services"
              buttonIcon={arrowCircleDown}
              buttonAltText="arrow-circle-down"
            />
          </Link>
        </div>
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default MoreServices;
