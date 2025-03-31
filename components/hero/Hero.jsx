import React from "react";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ img, alt, attribution, objectPos, children }) => {
  return (
    <div className="hero" style={{ "--backgroundPos": objectPos }}>
      <img src={img} alt={alt} className="hero-image"/>
      <p className="imageAttribution">Image from {attribution}</p>
      <div className="hero-content">{children}</div>
    </div>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired,
  objectPos: PropTypes.string, // Example: "center", "top left", "50% 50%"
};

export default Hero;
