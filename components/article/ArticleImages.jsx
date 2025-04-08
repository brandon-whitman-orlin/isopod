import React from 'react';
import "./ArticleImages.css";

const ArticleImages = ({ children }) => {
  if (!children || React.Children.count(children) === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="article-images">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="image-container">
          {child}
        </div>
      ))}
    </div>
  );
};

export default ArticleImages;
