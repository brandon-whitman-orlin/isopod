import React, { useEffect, useState } from "react";
import "./Care.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import HeroImage from "../../assets/images/care-hero.jpg";

import PageSection from "../../components/pagesection/PageSection";
import DisplayGrid from "../../components/displaygrid/DisplayGrid";
import ArticleLink from "../../components/article/ArticleLink";

import WebFooter from "../../components/webfooter/WebFooter";

import { ReactComponent as IsopodLogo } from "../../assets/icons/isopod-ball-eyes.svg";

function Care() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const careGlob = import.meta.glob("../../care/*/*.json", { eager: true });
  
    const careList = Object.keys(careGlob).map((path) => {
      const careData = careGlob[path];
      const match = path.match(/\/care\/([^/]+)\//);
      const folder = match ? match[1] : null;
      return folder ? { ...careData, folder } : null;
    }).filter(Boolean);
  
    const parseDate = (dateString) => {
      const [month, day, year] = dateString.split("-").map(Number);
      return new Date(year, month - 1, day); // month is 0-indexed
    };
  
    careList.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.inProgress && !b.inProgress) return 1;
      if (!a.inProgress && b.inProgress) return -1;
      const dateA = parseDate(a.publishDate);
      const dateB = parseDate(b.publishDate);
      return dateB - dateA;
    });
  
    setArticles(careList);
  }, []);

  return (
    <div className="care">
      <ThemeMenu />
      <header className="header">
        <Navbar
          links={[
            <a href="/species" rel="noopener noreferrer">Species</a>,
            <a href="/care" rel="noopener noreferrer">Care</a>,
            <a href="/articles" rel="noopener noreferrer">Articles</a>,
            <a href="/about" rel="noopener noreferrer">About</a>,
            <a href="/contact" rel="noopener noreferrer">Contact</a>,
          ]}
          name={
            <span>
              <span>
                <IsopodLogo />
              </span>
              <span>Niceopods</span>
            </span>
          }
        />
      </header>
      <main className="main">
        <Hero img={HeroImage} alt="High-definition image of an Armadillidium vulgare isopod" attribution="Ignacio Vazquez" objectPos="40%">
          <h1>Care</h1>
          <h2>Care Sheets for Every Isopod You Can Think Of</h2>
        </Hero>
        <PageSection>
          <h2>Who Cares About Isopods?</h2>
          <h3>We do! And you should too!</h3>
          <DisplayGrid identical={true}>
            {articles.map((article) => {
            const classes = [];
            if (article.featured) classes.push("featured");
            if (article.inProgress) classes.push("in-progress");
            return (
              <ArticleLink 
                key={article.folder}
                care={article.folder}
                compressed={false}
                className={classes.join(" ")}
              />
            );
          })}
          </DisplayGrid>
        </PageSection>
      </main>
      <footer className="footer">
        <WebFooter 
          children={[
            [<a className="site-name" href="/" rel="noopener noreferrer"><span>
              <span>
                <IsopodLogo />
              </span>
              <span>Niceopods</span>
            </span></a>],
            [<h4>Services</h4>, <a href="/species" rel="noopener noreferrer">Species</a>, <a href="/care" rel="noopener noreferrer">Care</a>, <a href="/articles" rel="noopener noreferrer">Articles</a>, <a href="/affiliate" rel="noopener noreferrer">Affiliate Links</a>],
            [<h4>More</h4>, <a href="/about" rel="noopener noreferrer">About Us</a>, <a href="/collaborate" rel="noopener noreferrer">Work With Us</a>, <a href="/contact" rel="noopener noreferrer">Contact</a>]
          ]}
        />
      </footer>
    </div>
  );
}

export default Care;