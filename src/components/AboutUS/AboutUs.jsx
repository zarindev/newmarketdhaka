import React from 'react';
import Footer from '../Footer/Footer';
import CategoryNav from '../Navigation/CategoryNav/CategoryNav';
import TopNav from '../Navigation/TopNav/TopNav';
import './AboutUs.css';

function AboutUs() {
  return (
    <>
    <TopNav />
      <CategoryNav />
    <div className="about">
      <p className="about-title">180 kickflip</p>
    </div>
    <Footer/>
    </>
  );
}

export default AboutUs;
