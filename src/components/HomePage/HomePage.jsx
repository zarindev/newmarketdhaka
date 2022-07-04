import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Hero from '../Hero/Hero';
import CategoryNav from '../Navigation/CategoryNav/CategoryNav';
import TopNav from '../Navigation/TopNav/TopNav';
import SearchBox from '../SearchBox/SearchBox';
import Services from '../Services/Services';
import ServicesSlider from '../ServicesSlider/ServicesSlider';

function HomePage() {
  return (
    <>
      <TopNav />
      <CategoryNav />
      <Hero />
      <SearchBox />
      <Services />
      <ServicesSlider />
      <ContactUs />
    </>
  );
}

export default HomePage;
