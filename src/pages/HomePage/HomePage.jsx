import { useEffect } from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import Services from '../../components/Services/Services';
import ServicesSlider from '../../components/ServicesSlider/ServicesSlider';
import { useDocTitle } from '../../hooks/useDocTitle';
import { servicesData } from '../../components/Services/servicesData';

const HomePage = () => {
  useDocTitle();

  useEffect(() => {
    const docWidth = document.documentElement.offsetWidth;
    [].forEach.call(document.querySelectorAll('*'), function (el) {
      if (el.offsetWidth > docWidth) {
        console.log(el);
      }
    });
  }, []);

  return (
    <>
      <TopNav />
      <CategoryNav />
      <Hero />
      <Services serData={servicesData} />
      <ServicesSlider />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
