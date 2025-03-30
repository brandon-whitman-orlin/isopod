import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ArticleLink.css";

import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";

const ArticleLink = ({
  article,
  care,
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
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const folder = article ? "articles" : care ? "care" : null;
    const item = article || care;

    if (folder && item) {
      const fetchArticleData = async () => {
        try {
          const jsonData = await import(`../../${folder}/${item}/${item}.json`);
          const image = await import(`../../${folder}/${item}/assets/thumbnail.jpg`);

          setArticleData({ ...jsonData.default, image: image.default });
        } catch (error) {
          console.error("Error loading article data:", error);
        }
      };
      fetchArticleData();
    }
  }, [article, care]);

  const finalData = articleData || { image, title, description, link, readTime, publishDate, articleAuthor };

  if (!finalData.title || !finalData.link) return null;

  return (
    <a href={finalData.link} rel="noopener noreferrer" className={`article-link ${className || ''}`} tabIndex={tabIndex}>
      <article className="article-link-content">
        {finalData.image && <img src={finalData.image} alt="Article thumbnail" className="article-link-image" />}
        <p className="image-attribution">Image from {finalData.imageAttribution}</p>
        <h4 className="article-link-title">{finalData.title}</h4>
        {!compressed && (
          <>
            <p className="article-link-description">{finalData.description}</p>
            <div className="article-link-information">
              <div className="article-link-read-time-wrapper">
                <ClockIcon className="clock-icon" />
                {finalData.readTime && <span className="article-link-read-time">{finalData.readTime} min read</span>}
              </div>
              <div className="article-link-publish-date-wrapper">
                <CalendarIcon className="calendar-icon" />
                {finalData.publishDate && <span className="article-link-publish-date">{finalData.publishDate}</span>}
              </div>
            </div>
          </>
        )}
      </article>
    </a>
  );
};

ArticleLink.propTypes = {
  article: PropTypes.string,
  care: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  readTime: PropTypes.number,
  publishDate: PropTypes.string,
  articleAuthor: PropTypes.string,
  compressed: PropTypes.bool,
  className: PropTypes.string,
  tabIndex: PropTypes.number,
};

export default ArticleLink;
