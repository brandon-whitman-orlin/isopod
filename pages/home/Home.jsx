import React, { useEffect, useState } from "react";
import "./Home.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import HeroImage from "../../assets/images/home-hero.jpg";

import PageSection from "../../components/pagesection/PageSection";

import HorizontalSlider from "../../components/horizontalslider/HorizontalSlider";

import ArticleLink from "../../components/article/ArticleLink";

import WebFooter from "../../components/webfooter/WebFooter";

import { ReactComponent as IsopodLogo } from "../../assets/icons/isopod-ball-eyes.svg";

function Home() {
  return (
    <div className="home">
      <ThemeMenu />
      <header className="header">
        <Navbar
          links={[
            <a href="/species" rel="noopener noreferrer">Species</a>,
            <a href="/care" rel="noopener noreferrer">Care</a>,
            <a href="/articles" rel="noopener noreferrer">Articles</a>,
            <a href="/about" rel="noopener noreferrer">About</a>,
            <a href="/contact" rel="noopener noreferrer">Contact</a>,
            // <div className="dropdown div-button" tabIndex={0}>Options <span className="dropdown-caret"></span>
            //   <ul className="dropdown-menu">
            //     <li><ThemeChange className="dropdown-option"/></li>
            //     <li><button className="dropdown-option">Language</button></li>
            //   </ul>
            // </div>
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
        <Hero img={HeroImage} alt="High-definition image of an Armadillidium vulgare isopod" attribution="Ed Alfonso" objectPos="35%">
          <h1>Niceopods</h1>
          <h2>The #1 resource for Isopod Enthusiasts</h2>
        </Hero>
        <PageSection>
          <h2>Welcome to Niceopods</h2>
          <h3>Everything you need to know about Pet Isopods</h3>
          <p>Whether you're a beginner or an expert, we provide everything you need to care for and understand isopods. Explore <a href="/species" rel="noopener noreferrer">species profiles</a>, <a href="/care" rel="noopener noreferrer">care sheets</a>, and <a href="/articles" rel="noopener noreferrer">industry news</a>, all in one place!</p>
        </PageSection>
        <PageSection>
          <h2>Featured Species</h2>
          <h3>
            These are just a few species, for more, see our <a href="/species" rel="noopener noreferrer">species profiles</a>
          </h3>
          <HorizontalSlider
            articleLinks={[
              <ArticleLink species="porcellionides_pruinosus" compressed={false} />,
              <ArticleLink species="porcellio_scaber" compressed={false} />,
              <ArticleLink species="armadillidium_vulgare" compressed={false} />,
              <ArticleLink species="armadillidium_maculatum" compressed={false} />,
              <ArticleLink species="porcellio_laevis" compressed={false} />
            ]}
            // automatic
            // a
          />
        </PageSection>
        <PageSection>
          <h2>In the News</h2>
          <h3>Important Isopod Updates</h3>
          {/* <ArticleLink
            image={ArticleImage1}
            title="Exciting Isopod News"
            description="A super cool article on Isopods"
            link="/defaultarticle"
            readTime={5}
            publishDate={"03/24/2025"}
            articleAuthor={"Dr. Isopod"}
          /> */}
          <ArticleLink article="isopods_101" compressed={false} />
          <ArticleLink article="beginner_isopods" compressed={false} />
          <p>Want more? Find more articles <a href="/articles" rel="noopener noreferrer">here</a>!</p>
        </PageSection>
        <PageSection>
          <h2>Why Niceopods?</h2>
          <h3>Because Isopods are Nice-opods!</h3>
          <p>Niceopods is the ultimate resource for every isopod enthusiast, providing expert <a href="/care" rel="noopener noreferrer">care guides</a>, detailed <a href="/species" rel="noopener noreferrer">species profiles</a>, and the <a href="/articles" rel="noopener noreferrer">latest news</a> concerning the isopod pet trade! Whether you're new to the hobby, or an experienced keeper searching for the best isopod to add to your collection, our goal is to make isopod care accessible and interesting. From habitat setup to breeding tips, we cover everything you need to know about these fascinating creatures. Join us in exploring the incredible world of isopods!</p>
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

export default Home;
