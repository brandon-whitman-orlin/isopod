import React from "react";
import PropTypes from "prop-types";
import "./ArticleLink.css";

import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";

const ArticleLink = ({
  image,
  title,
  description,
  link,
  readTime,
  publishDate,
  articleAuthor,
  compressed,
  className,
  tabIndex
}) => {
  return (
    <a href={link} className={`article-link ${className || ''}`} tabIndex={tabIndex}> {/* Apply className here */}
      <article className="article-link-content">
        {image && <img src={image} alt="Article thumbnail" className="article-link-image" />}
        <h4 className="article-link-title">{title}</h4>
        {!compressed && (
          <>
            <p className="article-link-description">{description}</p>
            <div className="article-link-information">
              <div className="article-link-read-time-wrapper">
                <ClockIcon className="clock-icon" />
                {readTime && <span className="article-link-read-time">{readTime} min read</span>}
              </div>
              <div className="article-link-publish-date-wrapper">
                <CalendarIcon className="calendar-icon" />
                {publishDate && <span className="article-link-publish-date">{publishDate}</span>}
              </div>
            </div>
          </>
        )}
      </article>
    </a>
  );
};

ArticleLink.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  readTime: PropTypes.number,
  publishDate: PropTypes.string,
  articleAuthor: PropTypes.string,
  compressed: PropTypes.bool,
};

export default ArticleLink;
