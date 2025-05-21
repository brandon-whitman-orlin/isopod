import React, { useEffect, useState } from "react";
import "./Collaborate.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import HeroImage from "../../assets/images/collaborate-hero.jpg";

import PageSection from "../../components/pagesection/PageSection";

import WebFooter from "../../components/webfooter/WebFooter";

import { ReactComponent as IsopodLogo } from "../../assets/icons/isopod-ball-eyes.svg";

function Collaborate() {
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
    <div className="collaborate">
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
          attribution="kuritafsheen77"
          objectPos="55%"
        >
          <h1>Collaborate</h1>
          <h2>Help Make Niceopods a Better Place</h2>
        </Hero>
        <PageSection>
          <h2>Let's Work Together</h2>
          <h3>Here's how you can work with Niceopods:</h3>
          <form id="collaborate-form" className="contact-form" action="https://formspree.io/f/xdkgjren" method="post">
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
              <label htmlFor="collaboration-type">
                Preferred Contact Method
              </label>
              <select
                id="collaboration-type"
                name="collaboration-type"
                required
                defaultValue={"default"}
              >
                <option value="default" disabled>
                  How can we work together?
                </option>
                <option value="contribute-images">
                  Contribute Images - Share your photos for educational use
                </option>
                <option value="write-articles">
                  Write Articles - Help create new content for the site
                </option>
                <option value="proofread-articles">
                  Proofread Articles - Review and improve existing content
                </option>
                <option value="affiliate-product">
                  Affiliate a Product - Promote your product with an affiliate
                  link
                </option>
                <option value="other">Other (Describe Below)</option>
              </select>
            </div>
            <div>
              <label htmlFor="message">Additional Notes</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Anything else you want me to know?"
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

export default Collaborate;
