import React, { useEffect, useState } from "react";
import "./armadillidium_vulgare.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import HeroImage from "./assets/armadillidium_vulgare_2.jpg";
import ArticleImage1 from "./assets/armadillidium_vulgare_3.jpg";
import ArticleImage2 from "./assets/armadillidium_vulgare_4.jpg";
import ArticleImage3 from "./assets/armadillidium_vulgare_5.jpg";
import ArticleImage4 from "./assets/armadillidium_vulgare_6.jpg";
import ArticleImage5 from "./assets/armadillidium_vulgare_7.jpg";
import ArticleImage6 from "./assets/armadillidium_vulgare_8.jpg";
import ArticleImage7 from "./assets/armadillidium_vulgare_9.jpg";
import ArticleImage8 from "./assets/armadillidium_vulgare_10.jpg";
import ArticleImage9 from "./assets/armadillidium_vulgare_11.jpg";
import ArticleImage10 from "./assets/armadillidium_vulgare_12.jpg";
import ArticleImage11 from "./assets/armadillidium_vulgare_13.jpg";

import PageSection from "../../components/pagesection/PageSection";
import IsopodStats from "../../components/isopodstats/IsopodStats";
import ArticleImage from "../../components/article/ArticleImage";
import ArticleImages from "../../components/article/ArticleImages";
import TaxonomyTable from "../../components/taxonomytable/TaxonomyTable";
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
        <Hero img={HeroImage} alt="High-definition image of an Armadillidium vulgare isopod" attribution="Franco Folini" objectPos="100%">
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
        <PageSection>
          <h2>Introduction</h2>
          <h3>Armadillidium vulgare, at a glance</h3>
          <p>Armadillidium vulgare, also known as the "pill bug", "potato bug", or "roly-poly", is a terrestrial crustacean belonging to the woodlouse family. Native to the Mediterranean region of Europe, this species has successfully established populations worldwide, most common in temperate climates across North America, Australia, and parts of Asia.</p>
          <ArticleImage
            image={ArticleImage1}
            description="A brown Armadillidium vulgare isopod with light splotches"
            source="xpda"
          />
        </PageSection>
        <PageSection>
          <h2>Taxonomy</h2>
          <h3>Classifying Armadillidium vulgare</h3>
          <p>Armadillidium vulgare was first described by French entomologist Pierre André Latreille in 1804, by the name "Armadillo vulgaris".</p>
          <ArticleImage
              image={ArticleImage3}
              description="French entomologist Pierre André Latreille"
              source="Brown"
          />
          <p>Armadillidium vulgare comes from the family "Armadillidiidae", a family of woodlice that can roll into a ball. The behavior of rolling into a ball is known as "conglobation".</p>
          <ArticleImages>
            <TaxonomyTable
              domain="Eukaryota"
              kingdom="Animalia"
              phylum="Arthropoda"
              className="Malacostraca"
              order="Isopoda"
              suborder="Oniscidea"
              family="Armadillidiidae"
              genus="Armadillidium"
              species="Armadillidium vulgare"
            />
            <ArticleImage
              image={ArticleImage2}
              description="A dark brown Armadillidium vulgare isopod which has rolled itself into a ball"
              source="Patrick Hacker"
            />
            <p>Armadillidium vulgare has several different morphs, including "Magic Potion" and "High Yellow".</p>
            <ArticleImage
                image={ArticleImage7}
                description='Armadillidium vulgare "Magic Potion"'
                source="Anonymous Redditor"
            />
            <ArticleImage
                image={ArticleImage8}
                description='Armadillidium vulgare "High Yellow"'
                source="Redditor u/LittleArmouredOne"
            />
          </ArticleImages>
        </PageSection>
        <PageSection>
          <h2>Physical Description</h2>
          <h3>What Makes Armadillidium vulgare Unique:</h3>
          <p>Armadillidium vulgare can reach up to 18 millimeters in length. Its exoskeleton consists of segmented, overlapping plates, providing a flexible yet protective armor. When threatened, this species can roll into a ball (conglobate) as a defense against predators. Typically slate gray, individuals may also display brown or mottled patterns. Armadillidium vulgare can be distinguished from similar species by the lack of the gap found when it rolls into a ball: Armadillidium vulgare rolls into a ball with no gaps, whereas similar species (ex: <a href="/species/armadillidium_nasatum" rel="noopener noreferrer">Armadillidium nasatum</a> and <a href="/species/armadillidium_depressum" rel="noopener noreferrer">Armadillidium depressum</a>) will leave a small gap.</p>
          <ArticleImage
            image={ArticleImage4}
            description="A dark brown Armadillidium vulgare isopod with slight yellow splotches"
            source="Anders Sandberg from Oxford, UK"
          />
          <ArticleImage
            image={ArticleImage5}
            description="A dark gray Armadillidium depressum isopod, leaving a gap when conglobated"
            source="tracks73"
          />
        </PageSection>
        <PageSection>
          <h2>Natural Habitat</h2>
          <h3>Where Armadillidium vulgare Thrives:</h3>
          <p>Armadillidium vulgare is native to the Mediterranean region of Europe but has adapted to a variety of environments worldwide. In its native habitat, it thrives in coastal areas with a temperate climate. The species is commonly found under mulch, fallen leaves, and rocks, preferring humid conditions and nocturnal activity to prevent dehydration. Armadillidium vulgare's ability to withstand drier conditions allows it to inhabit calcium-rich soils and coastal regions, feeding on decaying plant matter, lichens, and algae.</p>
          <ArticleImage
            image={ArticleImage6}
            description="A brown Armadillidium vulgare isopod among the leaf litter"
            source="Nathan T. Jones"
          />
        </PageSection>
        <PageSection>
          <h2>Care</h2>
          <h3>Caring for Armadillidium vulgare:</h3>
          <p>Armadillidium vulgare, are popular in the pet trade due to their hardiness and ease of care. In captivity, they play a vital role in maintaining a healthy ecosystem by consuming decaying organic matter, thus reducing mold and improving substrate quality. In captivity, Armadillidium vulgare should largely be fed decaying plant matter, but you should also be sure to provide small sources of protein and calcium for nutrition.</p>
          <ArticleImage
            image={ArticleImage9}
            description="Armadillidium vulgare (wild type) eating"
            source="HCA"
          />
          <p>Pill bugs typically reproduce in the spring, with females capable of producing up to three groups of offspring (broods) per year, each containing anywhere from 20 to 160 eggs at a time. These eggs develop in a fluid-filled brood pouch called the marsupium, located on the underside of the female's body. After hatching, the young remain in the pouch for 1 to 2 months before emerging as a small versions of the adult (mancas).</p>
          <ArticleImage
            image={ArticleImage11}
            description='A mature Armadillidium vulgare "Magic Potion" isopod, next to a young juvenile (manca)'
            source="Brandon (Myself)"
          />
          <p>These isopods are quite hardy, tolerating a relatively wide range of temperatures and humidity levels. However, like all crustacean, they are susceptible to dehydration and require a moist environment to thrive. In captivity, maintaining an appropriate moisture gradient is essential to prevent dehydration. Pill bugs usually live for one-two years.</p>
          <ArticleImage
            image={ArticleImage10}
            description="Armadillidium vulgare terrarium setup"
            source="Burkhard Mücke"
          />
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
