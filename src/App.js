import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import {
  AboutUs,
  CategoryNav,
  ContactUs,
  HomePage,
  SignIn,
  SignUp,
  SignUpTwo,
  TopNav,
} from './components';
import Footer from './components/Footer/Footer';
import AllServices from './pages/AllServices/AllServices';

const App = () => {
  return (
    <>
      <TopNav />
      <CategoryNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign_up_step_two" element={<SignUpTwo />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/all_services" element={<AllServices />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
