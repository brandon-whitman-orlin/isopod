import React from 'react';
import './Biography.css';

import LinkedInIcon from "../../assets/icons/linkedin.png";
import RedditIcon from "../../assets/icons/reddit.png";
import IsopodIcon from "../../assets/icons/isopod-ball.png";

const Biography = ({ img, name, title, desc, link, linkType }) => {
  // Conditional class based on linkType
  const linkClass = linkType ? `biography-link ${linkType.toLowerCase()}` : 'biography-link';

  // Conditional link text based on linkType
  const linkText = () => {
    switch (linkType?.toLowerCase()) {
      case 'linkedin':
        return `Connect with ${name}`;
      case 'reddit':
        return `${name}'s Profile`;
      case 'none':
        return 'Find out how here';
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
            <img src={LinkedInIcon} alt="LinkedIn icon" />
            <span>{linkText()}</span>
            <div className="arrow"></div>
          </>
        );
      case 'reddit':
        return (
          <>
            <img src={RedditIcon} alt="Reddit icon" />
            <span>{linkText()}</span>
            <div className="arrow"></div>
          </>
        );
      case 'none':
        return (
          <>
            <img src={IsopodIcon} alt="Reddit icon" />
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
