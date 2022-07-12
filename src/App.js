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

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUsPage />} />
        <Route path="/sign_up_step_two" element={<SignUpTwo />} />
<<<<<<< HEAD
        <Route path="/sign_up" element={<SignUp/>} />
=======
        <Route path="/sign_up" element={<SignUp />} />
>>>>>>> 7ed3f48ea8ad1b51fc7853ef3be2040ffa524344
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit_profile" element={<ProfileEdit />} />
        <Route path="/all_services" element={<AllServices />} />
        <Route path="/:service_type/:title" element={<ServiceDetails />} />
      </Routes>
    </>
  );
};

export default App;
