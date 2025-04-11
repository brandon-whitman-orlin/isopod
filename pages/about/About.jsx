import React, { useEffect, useState } from "react";
import "./About.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import HeroImage from "../../assets/images/about-hero.jpg";

import PageSection from "../../components/pagesection/PageSection";
import DisplayGrid from "../../components/displaygrid/DisplayGrid";
import Biography from "../../components/biography/Biography";

import Brandon from "../../assets/images/brandon.jpg";
import Ellie from "../../assets/images/ellie.jpg";
import LittleArmouredOne from "../../assets/images/u-LittleArmouredOne.jpg";

import CarouselImage1 from "../../assets/images/carousel1.jpg";
import CarouselImage2 from "../../assets/images/carousel2.jpg";
import CarouselImage3 from "../../assets/images/carousel3.jpg";
import CarouselImage4 from "../../assets/images/carousel4.jpg";
import CarouselImage5 from "../../assets/images/carousel5.jpg";
import CarouselImage6 from "../../assets/images/carousel6.jpg";

import WebFooter from "../../components/webfooter/WebFooter";

import { ReactComponent as IsopodLogo } from "../../assets/icons/isopod-ball-eyes.svg";

function About() {
  return (
    <div className="about">
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
        <Hero img={HeroImage} alt="High-definition image of an Armadillidium maculatum isopod" attribution="kuritafsheen77" objectPos="54%">
          <h1>About Us</h1>
          <h2>Your Ultimate Hub for All Things Isopod</h2>
        </Hero>
        <PageSection>
          <h2>About Niceopods</h2>
          <h3>Your Ultimate Resource for Pet Isopods</h3>
          <p>Isopods are more than just bugs—they're fascinating pets with unique behaviors, stunning colors, and they play a vital role in our ecosystem. But finding clear, reliable care information used to mean digging through scattered pages with conflicting advice. That's why we created Niceopods: a one-stop resource for isopod enthusiasts of all levels. From species profiles to expert care tips, we bring everything you need together in one place—so you can spend less time searching and more time enjoying these incredible creatures! </p>
        </PageSection>
        <PageSection>
          <h2>Meet the Team</h2>
          <h3>The wonderful people who make this all possible</h3>
          <DisplayGrid>
            <Biography
              img={Brandon}
              name="Brandon"
              title="Lead Developer"
              desc="Brandon has had a fascination with Isopods his whole life. Coincidentally, he also has a fascination with Web-Development. These two interested combined have been used to bring you Niceopods!"
              link="https://www.linkedin.com/in/brandon-whitman-orlin/"
              linkType={"LinkedIn"}
            />
            <Biography
              img={Ellie}
              name="Ellie"
              title="Digital Artist"
              desc="Ellie has designed several digital assets for the Niceopods website."
              link="https://www.linkedin.com/in/e-murray02/"
              linkType={"LinkedIn"}
            />
            <Biography
              img={LittleArmouredOne}
              name="u/LittleArmouredOne"
              title="Photographer"
              desc="u/LittleArmouredOne has helped support Niceopods by providing licensing for photographs they have taken."
              link="https://www.reddit.com/user/LittleArmouredOne/"
              linkType={"Reddit"}
            />
            <Biography
              img={CarouselImage3}
              name="Bob"
              title="Photographer"
              desc="Bob has helped support Niceopods by providing licensing for photographs they have taken."
              link="https://www.reddit.com/r/isopods/"
              linkType={"Reddit"}
            />
            <Biography
              img={CarouselImage4}
              name="Joan"
              title="Photographer"
              desc="Joan has helped support Niceopods by providing licensing for photographs they have taken."
              link="https://www.reddit.com/r/isopods/"
              linkType={"Reddit"}
            />
            <Biography
              img={CarouselImage5}
              name="Sandy"
              title="Photographer"
              desc="Sandy has helped support Niceopods by providing licensing for photographs they have taken."
              link="https://www.reddit.com/r/isopods/"
              linkType={"Reddit"}
            />
            <Biography
              img={CarouselImage6}
              name="Anna"
              title="Photographer"
              desc="Anna has helped support Niceopods by providing licensing for photographs they have taken."
              link="https://www.reddit.com/r/isopods/"
              linkType={"Reddit"}
            />
          </DisplayGrid>
        </PageSection>
        <PageSection>
          <h2>Want to Contribute?</h2>
          <h3>Help Us Help Others</h3>
          <p>Check out ways to <a href="/collaborate" rel="noopener noreferrer">work with us</a>!</p>
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

export default About;
