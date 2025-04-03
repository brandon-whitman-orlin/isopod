import React, { useEffect, useState } from "react";
import "./armadillidium_vulgare.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import HeroImage from "./assets/armadillidium_vulgare_2.jpg";
import PageSection from "../../components/pagesection/PageSection";
import IsopodStats from "../../components/isopodstats/IsopodStats";
import WebFooter from "../../components/webfooter/WebFooter";

import { ReactComponent as IsopodLogo } from "../../assets/icons/isopod-ball-eyes.svg";
import data from './armadillidium_vulgare.json'; // Import JSON data

function Armadillidium_vulgare() {
  // Initialize state to hold the isopod data
  const [isopodData, setIsopodData] = useState(null);

  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    // Set the state with the data from the JSON file
    setIsopodData(data);
  }, []);

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
        <Hero img={HeroImage} alt="High-definition image of an Armadillidium vulgare isopod" attribution="Franco Folini" objectPos="90%">
          <h1>Armadillidium vulgare</h1>
          <h2>(Wild Type)</h2>
        </Hero>
        <PageSection>
          <h2>Armadillidium vulgare (Wild Type)</h2>
          <h3>The Common Pill-Bug</h3>
          {/* Pass the data to IsopodStats as props */}
          {isopodData && (
            <IsopodStats 
              difficulty={isopodData.difficulty} 
              price={isopodData.price} 
              size={isopodData.size} 
              hardiness={isopodData.hardiness} 
              color={isopodData.color} 
            />
          )}
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

export default Armadillidium_vulgare;
