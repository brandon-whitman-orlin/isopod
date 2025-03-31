import React from 'react';
import './Biography.css';

import LinkedInIcon from "../../assets/icons/linkedin.png";
import RedditIcon from "../../assets/icons/reddit.png";

const Biography = ({ img, name, title, desc, link, linkType }) => {
  // Conditional class based on linkType
  const linkClass = linkType ? `biography-link ${linkType.toLowerCase()}` : 'biography-link';

  // Conditional link text based on linkType
  const linkText = () => {
    switch (linkType?.toLowerCase()) {
      case 'linkedin':
        return `Connect with ${name}`;
      case 'reddit':
        return `View ${name}'s Profile`;
      default:
        return `Contact ${title}`;
    }
  };

  // Function to render SVGs based on the linkType
  const renderSVGs = () => {
    switch (linkType?.toLowerCase()) {
      case 'linkedin':
        return (
          <>
            <img src={LinkedInIcon}/>
            <span>{linkText()}</span>
            <div className="arrow"></div>
          </>
        );
      case 'reddit':
        return (
          <>
            <img src={RedditIcon}/>
            <span>{linkText()}</span>
            <div className="arrow"></div>
          </>
        );
      default:
        return (
          <>
            <span>{linkText()}</span>
          </>
        );
    }
  };

  return (
    <div className="biography">
      <img src={img} alt={`${name}, ${title}`} className="biography-image" />
      <h4 className="biography-name">{name}</h4>
      <h5 className="biography-title">{title}</h5>
      <p className="biography-description">{desc}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {renderSVGs()}
        </a>
      )}
    </div>
  );
};

export default Biography;
