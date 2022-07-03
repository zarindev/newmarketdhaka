import React from 'react';
import Hero from '../Hero/Hero';
import CategoryNav from '../Navigation/CategoryNav/CategoryNav';
import TopNav from '../Navigation/TopNav/TopNav';
import SearchBox from '../SearchBox/SearchBox';
import Services from '../Services/Services';

function HomePage() {
  return (
    <>
      <TopNav />
      <CategoryNav />
      <Hero />
      <SearchBox />
      <Services />
    </>
  );
}

export default HomePage;
