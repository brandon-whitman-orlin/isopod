import React from 'react';
import "./ArticleImage.css";

const ArticleImage = ({ image, source, description }) => {
  return (
    <div className="article-image">
      <img src={image} alt={description} className="article-image-img" />
      {description && <p className="article-image-description">{description}</p>}
      {source && <p className="article-image-source">Image from {source}</p>}
    </div>
  );
};

export default ArticleImage;
