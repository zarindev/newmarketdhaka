import { useState } from 'react';
import './Hero.css';
import Dots from '../Dots/Dots';

import first from '../../images/hero-image.png';
import second from '../../images/michael-Wk3P6vL9m40-unsplash.jpg';
import third from '../../images/benjamin-huggett-Fz35xk6wE9k-unsplash.jpg';
import fourth from '../../images/simon-gamma-CqTOTZh5vrs-unsplash.jpg';
import fifth from '../../images/mehdi-messrro-yef79KkAguA-unsplash.jpg';

const heroData = [first, second, third, fourth, fifth];

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="hero">
      <div className="hero-image-ctn">
        <img src={heroData[imageIndex]} alt="hero" className="hero-image" />
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
          <Dots
            arrLength={5}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
            imageData={heroData}
            autoPlay
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
