import React, { useState, useEffect } from "react";
import "./Carousel.css";

import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg";
import { ReactComponent as IsopodBall } from "../../assets/icons/isopod-ball.svg";

const Carousel = ({ articleLinks, automatic = false }) => {
  const validArticleLinks = articleLinks.filter(Boolean); // Remove falsy values
  const centerIndex =
    validArticleLinks.length >= 5 ? 2 : Math.floor(validArticleLinks.length / 2);
  const [currentIndex, setCurrentIndex] = useState(centerIndex);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % validArticleLinks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? validArticleLinks.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (automatic) {
      const intervalId = setInterval(nextSlide, 3000);
      return () => clearInterval(intervalId);
    }
  }, [automatic, validArticleLinks.length]);

  const translateValue = (currentIndex - centerIndex) * -20;

  // Ensure each ArticleLink has the compressed prop set to true
  const clonedArticleLinks = validArticleLinks.map((articleLink, index) => {
    if (!React.isValidElement(articleLink)) return null;
    return React.cloneElement(articleLink, {
      compressed: true,
      key: index,
    });
  }).filter(Boolean); // Remove any nulls from the mapping

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
        <LeftArrow className="left-arrow" />
      </button>
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(${translateValue}%)`,
          }}
        >
          {clonedArticleLinks.map((articleLink, index) => {
            const isActive = index === currentIndex ? "active" : "";
            return React.cloneElement(articleLink, {
              className: `carousel-item ${isActive} ${
                articleLink.props.className || ""
              }`,
              tabIndex: index === currentIndex ? "0" : "-1",
              onFocus: () => setCurrentIndex(index),
            });
          })}
        </div>
      </div>

      <button className="next" onClick={nextSlide}>
        <RightArrow className="right-arrow" />
      </button>
      <div className="carousel-indicators">
        {clonedArticleLinks.map((_, index) => (
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
