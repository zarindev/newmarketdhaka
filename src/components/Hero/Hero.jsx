import React, { useState } from 'react';
import './Hero.css';
import heroImage from '../../images/hero-image.png';
import ellipse from '../../images/svg/Ellipse 2.svg';
import { heroImageData } from './heroImageData';

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="hero">
      <div className="hero-image-ctn">
        <img
          src={heroImageData[imageIndex]}
          alt="hero image"
          className="hero-image"
        />
      </div>
      <div className="hero-items-ctn">
        <div className="hero-items">
          <h3 className="small-title">Network</h3>
          <h1 className="main-title">
            Finds you services <br /> near your location
          </h1>
          <p className="description">
            <span>including</span> home service, food, restaurants, <br />{' '}
            grocery, repair service, emergency need, <br /> medical services and
            many more.
          </p>
          <div className="dots-ctn">
            {Array.from({ length: 5 }).map((item, index) => {
              return (
                <img
                  key={index}
                  src={ellipse}
                  alt="ellipse"
                  className={
                    imageIndex === index ? 'element active-element' : 'element'
                  }
                  onClick={() => setImageIndex(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
