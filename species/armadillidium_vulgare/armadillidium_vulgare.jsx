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
import ArticleImage12 from "./assets/armadillidium_vulgare_14.jpg";

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
        </Hero>
        <PageSection>
          <h2>Armadillidium vulgare</h2>
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
          <h3>Armadillidium vulgare, At a Glance</h3>
          <p>Meet the globe-trotting crustacean that's conquered backyards worldwide: Armadillidium vulgare. Also known as the "pill bug", "potato bug", or "roly-poly", these terrestrial crustaceans belonging to the woodlouse family. Armadillidium vulgare originates from the Mediterranean region of Europe, however this species has established populations worldwide. Armadillidium vulgare is most common in temperate climates across North America, Australia, and parts of Asia.</p>
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
          <ArticleImages>
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
          <p>Armadillidium vulgare is a medium sized isopod, and can reach up to 18 millimeters in length. Its exoskeleton consists of segmented, overlapping plates, providing a flexible yet protective armor. When threatened, this species can roll into a ball (conglobate) as a defense against predators. While the Wild Type morph of Armadillidium vulgare is slate gray, individuals may also display brown or mottled patterns.</p>
          <ArticleImage
            image={ArticleImage4}
            description="A dark brown Armadillidium vulgare isopod with slight yellow splotches"
            source="Anders Sandberg from Oxford, UK"
          />
          <p>Armadillidium vulgare can be distinguished from similar species by the lack of the gap found when it rolls into a ball: Armadillidium vulgare rolls into a ball with no gaps, whereas similar species (ex: <a href="/species/armadillidium_nasatum" rel="noopener noreferrer">Armadillidium nasatum</a> and <a href="/species/armadillidium_depressum" rel="noopener noreferrer">Armadillidium depressum</a>) will leave a small gap.</p>
          <ArticleImage
            image={ArticleImage5}
            description="A dark gray Armadillidium depressum isopod, leaving a gap when conglobated"
            source="tracks73"
          />
        </PageSection>
        <PageSection>
          <h2>Natural Habitat</h2>
          <h3>Where Armadillidium vulgare Thrives:</h3>
          <p>Armadillidium vulgare isopods are native to the Mediterranean region of Europe, but they have adapted to a wide variety of environments around the world. They are commonly found under mulch, fallen leaves, and rocks, and other humid places to prevent dehydration. Armadillidium vulgare, like other isopods, enjoy feeding on decaying plant matter, lichens, and algae.</p>
          <ArticleImage
            image={ArticleImage6}
            description="A brown Armadillidium vulgare isopod among the leaf litter"
            source="Nathan T. Jones"
          />
        </PageSection>
        <PageSection>
          <h2>Care</h2>
          <h3>Caring for Armadillidium vulgare:</h3>
          <p>The hardiness that has allowed Armadillidium vulgare to colonize the globe also makes them ideal companions for both novice and experienced keepers. These isopods excel both as fascinating pets and as industrious clean-up crews for other terrarium animals. In captivity, Armadillidium vulgare should largely be fed decaying plant matter, but you should also be sure to provide small sources of protein and calcium to ensure proper growth and molting.</p>
          <ArticleImage
            image={ArticleImage9}
            description="Armadillidium vulgare (wild type) eating"
            source="HCA"
          />
          <p>Isopods typically reproduce in the spring, with females capable of producing up to three groups of offspring (broods) per year, each containing anywhere from 20 to 160 eggs at a time. These eggs develop in a fluid-filled brood pouch called the marsupium, located on the underside of the female's body. After hatching, the young remain in the pouch for 1 to 2 months before emerging as a small versions of the adult (mancas).</p>
          <ArticleImage
            image={ArticleImage11}
            description='A mature Armadillidium vulgare "Magic Potion" isopod, next to a young juvenile (manca)'
            source="Brandon (Myself)"
          />
          <p>These isopods are quite hardy, tolerating a relatively wide range of temperatures and humidity levels. However, like all crustaceans, they are susceptible to dehydration and require a moist environment to thrive. With proper care, these resilient crustaceans typically enjoy lifespans of one to two years.</p>
          <ArticleImage
            image={ArticleImage10}
            description="Armadillidium vulgare terrarium setup"
            source="Burkhard Mücke"
          />
        </PageSection>
        <PageSection>
          <h2>Conclusion</h2>
          <h3>A Retrospective:</h3>
          <p>The humble Armadillidium vulgare offers a perfect entry point into the captivating world of isopods. Their remarkable adaptability has earned them a place in diverse ecosystems across the globe, while their distinctive ball-rolling behavior continues to charm observers from curious children to dedicated naturalists. Whether you're just beginning your isopod journey or expanding your collection, Armadillidium vulgare holds true as a staple of the isopod pet-trade.</p>
          <ArticleImage
            image={ArticleImage12}
            description="A brown Armadillidium vulgare isopod"
            source="LeticiaSmania"
          />
          <h3>Curious about other species? Find more <a href="/species" rel="noopener noreferrer">here</a>!</h3>
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
