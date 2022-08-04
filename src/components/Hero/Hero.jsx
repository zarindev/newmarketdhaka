import React, { useState, useEffect } from 'react';
import './Hero.css';
import ellipse from '../../images/svg/Ellipse 2.svg';
import { heroImageData } from './heroImageData';

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setImageIndex(imageIndex + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, [imageIndex]);

  useEffect(() => {
    imageIndex > heroImageData.length - 1 && setImageIndex(0);
  }, [imageIndex]);

  return (
    <div className="hero">
      <div className="hero-image-ctn">
        <img
          src={heroImageData[imageIndex]}
          alt="hero"
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
          <div className="hero-dots-ctn">
            {Array.from({ length: 5 }).map((item, index) => {
              return (
                <img
                  key={index}
                  src={ellipse}
                  alt="ellipse"
                  className={
                    imageIndex === index
                      ? 'hero-dot hero-dot-active'
                      : 'hero-dot'
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
