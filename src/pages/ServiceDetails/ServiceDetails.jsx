import React from 'react';
import Footer from '../../components/Footer/Footer';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import './ServiceDetails.css';

const ServiceDetails = () => {
  return (
    <>
      <TopNav />
      <CategoryNav />
      <div className="service-details">
        <h4>do a kickflip</h4>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetails;
