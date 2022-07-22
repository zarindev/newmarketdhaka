import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import RoundedButton from '../../components/SmallComponents/RoundedButton/RoundedButton';
import ScrollToTop from '../../components/Utilities/ScrollToTop';
import SliderComponent from '../../components/ServicesSlider/SliderComponent';
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
            <RoundedButton buttonText="Explore More Services" />
          </Link>
        </div>
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default MoreServices;
