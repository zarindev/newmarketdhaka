import React from 'react';
import './AllServices.css';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import Services from '../../components/Services/Services';
import SingleService from './SingleService';
import homeAndOffice from '../../images/workspace 1.png';
import carRentalService from '../../images/maintenance 1.png';
import foodAndRestaurant from '../../images/grocery 1.png';
import Footer from '../../components/Footer/Footer';
import { useDocTitle } from '../../hooks/useDocTitle';

const AllServices = () => {
  useDocTitle();

  return (
    <>
      <TopNav />
      <div className="all-services">
        <div className="all-services-banner">
          <h1 className="all-services-title">All Services</h1>
        </div>
        <Services />
        <div className="all-services-contents">
          <SingleService
            serviceImage={homeAndOffice}
            serviceTitle="Home & Office"
          />
          <SingleService
            serviceImage={carRentalService}
            serviceTitle="Car Rental Service"
          />
          <SingleService
            serviceImage={foodAndRestaurant}
            serviceTitle="Food & Restaurant"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllServices;
