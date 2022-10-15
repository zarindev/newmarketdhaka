import { useState } from "react";
import "./Hero.css";
import Dots from "../Dots/Dots";
import first from "../../images/hero-image-one.png";
import second from "../../images/hero-image-two.jpg";
import third from "../../images/hero-image-three.jpg";
import fourth from "../../images/hero-image-four.jpg";
import fifth from "../../images/hero-image-five.jpg";
import PostBtn from "../Navbar/PostBtn";

const heroImgData = [first, second, third, fourth, fifth];

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="hero">
      <div className="hero-image-ctn">
        <img src={heroImgData[imageIndex]} alt="hero" className="hero-image" />
      </div>
      <div className="hero-items-ctn">
        <div className="hero-items">
          <h3 className="small-title">Network</h3>
          <h1 className="main-title">
            Finds you services <br /> near your location
          </h1>
          <p className="description">
            <span>including</span> home service, food, restaurants, <br />{" "}
            grocery, repair service, emergency need, <br /> medical services and
            many more.
          </p>
          <Dots
            arrLength={heroImgData.length}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
            imageData={heroImgData}
            autoPlay={true}
          />
          <div className="heroPostBtn">
            <PostBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
