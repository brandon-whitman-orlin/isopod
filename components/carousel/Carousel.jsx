import React, { useState, useEffect } from "react";
import "./Carousel.css";

import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg";
import { ReactComponent as IsopodBall } from "../../assets/icons/isopod-ball.svg";

const Carousel = ({ articleLinks, automatic = false }) => {
  const centerIndex =
    articleLinks.length >= 5 ? 2 : Math.floor(articleLinks.length / 2);
  const [currentIndex, setCurrentIndex] = useState(centerIndex);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articleLinks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articleLinks.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (automatic) {
      const intervalId = setInterval(nextSlide, 3000);
      return () => clearInterval(intervalId);
    }
  }, [automatic, articleLinks.length]);

  const translateValue = (currentIndex - centerIndex) * -20;

  // Ensure each ArticleLink has the compressed prop set to true
  const clonedArticleLinks = articleLinks.map((articleLink) => {
    const props = articleLink.props || {};
    if (props.compressed !== true) {
      return React.cloneElement(articleLink, { compressed: true });
    }
    return articleLink;
  });

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
            // Pass carousel-item and active classes to the ArticleLink
            return React.cloneElement(articleLink, {
              className: `carousel-item ${isActive} ${
                articleLink.props.className || ""
              }`,
              key: index,
              tabIndex: index === currentIndex ? "0" : "-1", // Only focusable when active
              onFocus: () => setCurrentIndex(index), // Update index on focus
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