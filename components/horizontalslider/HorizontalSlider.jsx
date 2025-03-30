import React from "react";
import "./HorizontalSlider.css";

const HorizontalSlider = ({ articleLinks }) => {
  const validArticleLinks = articleLinks.filter(Boolean); // Remove falsy values

  // Ensure each ArticleLink has the compressed prop set to true
  const processedArticleLinks = validArticleLinks.map((articleLink, index) => {
    if (!React.isValidElement(articleLink)) return null;
    return React.cloneElement(articleLink, {
      compressed: true,
      key: index,
    });
  }).filter(Boolean); // Remove nulls

  return (
    <div className="horizontal-slider-wrapper">
        <div className="horizontal-slider">
            {processedArticleLinks}
        </div>
    </div>
  );
};

export default HorizontalSlider;
