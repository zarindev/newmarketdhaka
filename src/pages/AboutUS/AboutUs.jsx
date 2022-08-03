import React from 'react';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import Footer from '../../components/Footer/Footer';
import './AboutUs.css';
import { aboutData } from './aboutData';
import { useDocTitle } from '../../hooks/useDocTitle';

function AboutUs() {
  useDocTitle();

  return (
    <>
      <TopNav />
      <div className="about">
        <div className="about-banner">
          <h1 className="about-title">About Us</h1>
        </div>
        <div className="about-content">
          {aboutData.map((item) => {
            return (
              <div className="about-item" key={item.id}>
                <h4 className="about-item-title">{item.title}</h4>
                <p className="about-item-desc">{item.desc}</p>
                <div className="about-item-image-ctn">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="about-item-image"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
