import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Hero.css";

import HeroImage from "../../assets/images/hero.jpg";

const Hero = ({ children }) => {
  return (
    <div className="hero">
      <img src={HeroImage} alt="High-definition image of an Armadillidium vulgare isopod" className="hero-image" />
      <div className="hero-content">
        {children}
      </div>
    </div>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
};

export default Hero;
