import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUS/AboutUs';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import SignUp from './pages/SignUp/SignUp';
import SignUpTwo from './pages/SignUpTwo/SignUpTwo';
import SignIn from './pages/SignIn/SignIn';
import AllServices from './pages/AllServices/AllServices';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Profile from './pages/Profile/Profile';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';
import Register from './pages/Register/Register';
import RegisterCom from './pages/Register/RegisterCom';
import RegisterIndie from './pages/Register/RegisterIndie';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUsPage />} />
        <Route path="/sign_up_step_two" element={<SignUpTwo />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/company" element={<RegisterCom />} />
        <Route path="/register/individual" element={<RegisterIndie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit_profile" element={<ProfileEdit />} />
        <Route path="/all_services" element={<AllServices />} />
        <Route path="/:service_type/:title" element={<ServiceDetails />} />
      </Routes>
    </>
  );
};

export default App;
