import React, { useEffect, useState } from "react";
import "./Contact.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import HeroImage from "../../assets/images/contact-hero.jpg";

import PageSection from "../../components/pagesection/PageSection";

import WebFooter from "../../components/webfooter/WebFooter";

import { ReactComponent as IsopodLogo } from "../../assets/icons/isopod-ball-eyes.svg";

function Contact() {
  const [contactMethod, setContactMethod] = useState("");
  const [placeholder, setPlaceholder] = useState(
    "Select a contact method first"
  );
  const [isContactEnabled, setIsContactEnabled] = useState(false);

  const handleContactMethodChange = (event) => {
    const method = event.target.value;
    setContactMethod(method);

    const placeholders = {
      email: "email@example.com",
      reddit: "u/your-reddit-username",
      discord: "YourDiscord#1234",
      other: "Enter your contact info",
    };

    setPlaceholder(placeholders[method] || "Enter your contact info");
    setIsContactEnabled(true);
  };

  return (
    <div className="contact">
      <ThemeMenu />
      <header className="header">
        <Navbar
          links={[
            <a href="/species" rel="noopener noreferrer">
              Species
            </a>,
            <a href="/care" rel="noopener noreferrer">
              Care
            </a>,
            <a href="/articles" rel="noopener noreferrer">
              Articles
            </a>,
            <a href="/about" rel="noopener noreferrer">
              About
            </a>,
            <a href="/contact" rel="noopener noreferrer">
              Contact
            </a>,
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
        <Hero
          img={HeroImage}
          alt="High-definition image of an Armadillidium vulgare isopod"
          attribution="Fabien Piednoir"
          objectPos="45%"
        >
          <h1>Contact</h1>
          <h2>Get in Touch With Niceopods</h2>
        </Hero>
        <PageSection>
          <h2>Let's Chat!</h2>
          <h3>
            Have something you want to talk about? Here's how to reach out:
          </h3>
          <form id="contact-form" className="contact-form" action="https://formspree.io/f/manokzry" method="post">
            <div>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="What should I call you?"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-method">Preferred Contact Method</label>
              <select
                id="contact-method"
                name="contact-method"
                value={contactMethod}
                onChange={handleContactMethodChange}
                required
              >
                <option value="" disabled>
                  Select contact method
                </option>
                <option value="email">Email</option>
                <option value="reddit">Reddit</option>
                <option value="discord">Discord</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact">Your Contact Info</label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder={placeholder}
                required
                disabled={!isContactEnabled}
              />
            </div>
            <div>
              <label htmlFor="message">Reason for Contact</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me what's on your mind :D"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </PageSection>
      </main>
      <footer className="footer">
        <WebFooter
          children={[
            [
              <a className="site-name" href="/" rel="noopener noreferrer">
                <span>
                  <span>
                    <IsopodLogo />
                  </span>
                  <span>Niceopods</span>
                </span>
              </a>,
            ],
            [
              <h4>Services</h4>,
              <a href="/species" rel="noopener noreferrer">
                Species
              </a>,
              <a href="/care" rel="noopener noreferrer">
                Care
              </a>,
              <a href="/articles" rel="noopener noreferrer">
                Articles
              </a>,
              <a href="/affiliate" rel="noopener noreferrer">
                Affiliate Links
              </a>,
            ],
            [
              <h4>More</h4>,
              <a href="/about" rel="noopener noreferrer">
                About Us
              </a>,
              <a href="/collaborate" rel="noopener noreferrer">
                Work With Us
              </a>,
              <a href="/contact" rel="noopener noreferrer">
                Contact
              </a>,
            ],
          ]}
        />
      </footer>
    </div>
  );
}

export default Contact;
