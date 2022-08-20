import { useState } from 'react';
import './Hero.css';
import { heroImageData } from './heroImageData';
import Dots from '../Dots/Dots';

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

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
          <Dots
            arrLength={5}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
            imageData={heroImageData}
            autoPlay
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
