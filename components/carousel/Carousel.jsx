import React, { useState, useEffect } from "react";
import "./Carousel.css";

import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg";
import { ReactComponent as IsopodBall } from "../../assets/icons/isopod-ball.svg";

const Carousel = ({ images, descriptions, links = [], automatic = false }) => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at index 2 (middle image)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (automatic) {
      const intervalId = setInterval(nextSlide, 3000);
      return () => clearInterval(intervalId);
    }
  }, [automatic]);

  // Centering logic: Map index to the correct translate value
  const translateValue = (currentIndex - 2) * -20; // 40%, 20%, 0%, -20%, -40%

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(${translateValue}%)`,
          }}
        >
          {images.map((image, index) => (
            <a
              href={links[index] || "#"} // Use corresponding link or default to "#"
              key={index}
              tabIndex="0" // Allow focus
              className={`carousel-item ${index === currentIndex ? "active" : ""}`}
              onFocus={() => setCurrentIndex(index)} // Update index on focus
            >
              <img src={image} alt={`Slide ${index}`} />
              <p>{descriptions[index]}</p>
            </a>
          ))}
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>
        <LeftArrow className="left-arrow" />
      </button>
      <button className="next" onClick={nextSlide}>
        <RightArrow className="right-arrow" />
      </button>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            <IsopodBall />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
