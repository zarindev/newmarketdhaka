import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import { AboutUs, ContactUs, HomePage, SignUp, SignUpTwo } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/sign_up_step_two" element={<SignUpTwo />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/contact_us" element={<ContactUs />} />
    </Routes>
  );
};

export default App;
