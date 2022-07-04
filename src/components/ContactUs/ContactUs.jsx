import React, { useState, useRef } from 'react';
import './ContactUs.css';
import contactImage from '../../images/Ellipse 142.png';
import phoneIcon from '../../images/svg/Phone.svg';
import locationIcon from '../../images/svg/location-white.svg';
import emailIcon from '../../images/svg/Email.svg';
import CategoryNav from '../Navigation/CategoryNav/CategoryNav';
import TopNav from '../Navigation/TopNav/TopNav';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const nameRef = useRef('');
  const emailRef = useRef('');
  const reasonRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <TopNav/>
      <CategoryNav/>
      <div className="contact-us">
      
      <div className="contact-intro">
        <div className="contact-content">
          <h2 className="contact-title">
            Become <br /> Service Provider
          </h2>
          <p className="contact-desc">
            Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor
            do amet sint. Velit officia consequat <br /> duis enim velit mollit.
            Exercitation veniam <br /> consequat sunt nostrud amet.
          </p>
          <button className="contact-btn">Get started</button>
        </div>
        <div className="contact-image-ctn">
          <img
            src={contactImage}
            alt="contact image"
            className="contact-image-ctn"
          />
        </div>
      </div>
      <div className="contact-form-ctn">
        <h2 className="contact-form-title">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input field-control"
            placeholder="Full Name"
            ref={nameRef}
            onChange={() => setName(nameRef.current.value)}
          />
          <input
            type="text"
            className="form-input field-control"
            placeholder="E-mail"
            ref={emailRef}
            onChange={() => setEmail(emailRef.current.value)}
          />
          <textarea
            cols="30"
            rows="10"
            className="form-textarea field-control"
            placeholder="Reason"
            ref={reasonRef}
            onChange={() => setReason(reasonRef.current.value)}
          />
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
        <div className="contact-info-ctn">
          <div className="contact-info">
            <img src={phoneIcon} alt="phone icon" className="contact-icon" />
            <p className="contact-address">contact@company.com</p>
          </div>
          <div className="contact-info">
            <img
              src={locationIcon}
              alt="location icon"
              className="contact-icon"
            />
            <p className="contact-address">
              794 Mcallister St San Francisco, 94102
            </p>
          </div>
          <div className="contact-info">
            <img src={emailIcon} alt="email icon" className="contact-icon" />
            <p className="contact-address">contact@company.com</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
