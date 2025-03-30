import React, { useEffect, useRef } from "react";
import "./HorizontalSlider.css";

const HorizontalSlider = ({ articleLinks }) => {
  const sliderRef = useRef(null); // Reference to the slider container

  const validArticleLinks = articleLinks.filter(Boolean); // Remove falsy values

  // Ensure each ArticleLink has the compressed prop set to true
  const processedArticleLinks = validArticleLinks.map((articleLink, index) => {
    if (!React.isValidElement(articleLink)) return null;
    return React.cloneElement(articleLink, {
      compressed: true,
      key: index,
    });
  }).filter(Boolean); // Remove nulls

  useEffect(() => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.scrollWidth;
      const containerWidth = sliderRef.current.clientWidth;
      const scrollPosition = (sliderWidth - containerWidth) / 2;
      sliderRef.current.scrollLeft = scrollPosition; // Set scroll position to 50%
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="horizontal-slider-wrapper">
      <div className="horizontal-slider" ref={sliderRef}>
        {processedArticleLinks}
      </div>
    </div>
  );
};

export default HorizontalSlider;
