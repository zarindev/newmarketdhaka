import { useEffect } from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import TopNav from '../../components/Navbar/TopNav';
import BottomNav from '../../components/Navbar/BottomNav';
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
      <BottomNav />
      <Hero />
      <Services serData={servicesData} />
      <ServicesSlider />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
