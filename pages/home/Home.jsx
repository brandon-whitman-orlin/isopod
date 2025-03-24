import React, { useEffect, useState } from "react";
import "./Home.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeChange from "../../components/themechange/ThemeChange";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";
import PageSection from "../../components/pagesection/PageSection";
import Carousel from "../../components/carousel/Carousel";

import CarouselImage1 from "../../assets/images/carousel1.jpg";
import CarouselImage2 from "../../assets/images/carousel2.jpg";
import CarouselImage3 from "../../assets/images/carousel3.jpg";
import CarouselImage4 from "../../assets/images/carousel4.jpg";
import CarouselImage5 from "../../assets/images/carousel5.jpg";

import ArticleLink from "../../components/article/ArticleLink";

import ArticleImage1 from "../../assets/images/articleimage1.jpg";
import ArticleImage2 from "../../assets/images/articleimage2.jpg";

import { ReactComponent as IsopodLogo } from "../../assets/icons/isopod-ball-eyes.svg";

function Home() {
  return (
    <div className="home">
      <ThemeMenu />
      <header className="header">
        <Navbar
          links={[
            <a href="/species">Species</a>,
            <a href="/care">Care</a>,
            <a href="/articles">Articles</a>,
            <a href="/about">About</a>,
            <a href="/contact">Contact</a>,
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
        <Hero>
          <h1>Niceopods</h1>
          <h2>The #1 resource for Isopod Enthusiasts</h2>
        </Hero>
        <PageSection>
          <h2>Welcome to Niceopods</h2>
          <h3>Everything you need to know about Pet Isopods</h3>
          <p>Whether you're a beginner or an expert, we provide everything you need to care for and understand isopods. Explore <a href="/species">species profiles</a>, <a href="/care">care sheets</a>, and <a href="/articles">industry news</a>, all in one place!</p>
        </PageSection>
        <PageSection>
          <h2>Featured Species</h2>
          <h3>
            These are just a few species, for more, see our <a href="/species">species profiles</a>
          </h3>
          {/* <Carousel
            images={[
              CarouselImage1,
              CarouselImage2,
              CarouselImage3,
              CarouselImage4,
              CarouselImage5,
            ]}
            descriptions={["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"]}
            links={["link1", "link2", "link3", "link4", "link5"]}
            // automatic
          /> */}
          <Carousel
            articleLinks={[
              <ArticleLink
                image={CarouselImage1}
                title="Cool Isopod 1"
                description="Cool Isopod 1"
                link="link1"
                readTime={5}
                publishDate="03/24/2025"
                articleAuthor="Author Name"
                compressed={false}
              />,
              <ArticleLink
                image={CarouselImage2}
                title="Cool Isopod 2"
                description="Cool Isopod 2"
                link="link2"
                readTime={5}
                publishDate="03/24/2025"
                articleAuthor="Author Name"
                compressed={false}
              />,
              <ArticleLink
                image={CarouselImage3}
                title="Cool Isopod 3"
                description="Cool Isopod 3"
                link="link3"
                readTime={5}
                publishDate="03/24/2025"
                articleAuthor="Author Name"
                compressed={false}
              />,
              <ArticleLink
                image={CarouselImage4}
                title="Cool Isopod 4"
                description="Cool Isopod 4"
                link="link4"
                readTime={5}
                publishDate="03/24/2025"
                articleAuthor="Author Name"
                compressed={false}
              />,
              <ArticleLink
                image={CarouselImage5}
                title="Cool Isopod 5"
                description="Cool Isopod 5"
                link="link5"
                readTime={5}
                publishDate="03/24/2025"
                articleAuthor="Author Name"
                compressed={false}
              />,
            ]}
            // automatic
          />
        </PageSection>
        <PageSection>
          <h2>In the News</h2>
          <h3>Important Isopod Updates</h3>
          <ArticleLink
            image={ArticleImage1}
            title="Exciting Isopod News"
            description="A super cool article on Isopods"
            link="link6"
            readTime={5}
            publishDate={"03/24/2025"}
            articleAuthor={"Dr. Isopod"}
          />
          <ArticleLink
            image={ArticleImage2}
            title="More exciting Isopod News"
            description="Another super cool article on Isopods"
            link="link7"
            readTime={4}
            publishDate={"02/21/2025"}
            articleAuthor={"Dr. Isopod"}
          />
          <p>Want more? Find more articles <a href="/articles">here</a>!</p>
        </PageSection>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default Home;
