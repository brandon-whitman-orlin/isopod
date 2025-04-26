import React, { useEffect, useState } from "react";
import "./Articles.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import HeroImage from "../../assets/images/articles-hero.jpg";

import PageSection from "../../components/pagesection/PageSection";
import DisplayGrid from "../../components/displaygrid/DisplayGrid";
import ArticleLink from "../../components/article/ArticleLink";

import WebFooter from "../../components/webfooter/WebFooter";

import { ReactComponent as IsopodLogo } from "../../assets/icons/isopod-ball-eyes.svg";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
      const articlesGlob = import.meta.glob("../../articles/*/*.json", { eager: true });
  
      const articlesList = Object.keys(articlesGlob).map((path) => {
        const articleData = articlesGlob[path];
        const match = path.match(/\/articles\/([^/]+)\//);
        const folder = match ? match[1] : null;
        return folder ? { ...articleData, folder } : null;
      }).filter(Boolean);
  
      // Helper to parse dates
      const parseDate = (dateString) => {
        const [month, day, year] = dateString.split("-").map(Number);
        return new Date(year, month - 1, day); // month is 0-indexed
      };
  
      articlesList.sort((a, b) => {
        // Featured first
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        // In-progress last
        if (a.inProgress && !b.inProgress) return 1;
        if (!a.inProgress && b.inProgress) return -1;
        // Otherwise, by publishDate newest first
        const dateA = parseDate(a.publishDate);
        const dateB = parseDate(b.publishDate);
        return dateB - dateA;
      });
  
      setArticles(articlesList);
    }, []);

  return (
    <div className="articles">
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
        <Hero img={HeroImage} alt="High-definition image of an Armadillidium gestroi isopod" attribution="kuritafsheen77" objectPos="27%">
          <h1>Articles</h1>
          <h2>The Most Interesting Isopod Articles on the Web</h2>
        </Hero>
        <PageSection>
          <h2>Nice Isopod News</h2>
          <h3>Everything New in the World of Niceopods</h3>
          <DisplayGrid identical={true}>
            {articles.map((article) => {
              const classes = [];
              if (article.featured) classes.push("featured");
              if (article.inProgress) classes.push("in-progress");
              return (
                <ArticleLink 
                  key={article.folder}
                  article={article.folder}
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

export default Articles;
