import React from 'react';
import './ContactUsPage.css';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import TopNav from '../../components/Navbar/TopNav';
import BottomNav from '../../components/Navbar/BottomNav';
import { useDocTitle } from '../../hooks/useDocTitle';

const ContactUsPage = () => {
  useDocTitle();

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="contact-page">
        <div className="contact-page-banner">
          <h1 className="contact-page-title">Contact Us</h1>
        </div>
        <div className="contact-page-content">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
