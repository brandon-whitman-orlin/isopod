import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ img, alt, attribution, children }) => {
  return (
    <div className="hero">
      <img src={img} alt={alt} className="hero-image" />
      <p className="image-attribution">Image from {attribution}.</p>
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
