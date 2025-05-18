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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxYXUTHvanrc4bhlbunapm7psvhY7Op43acSukikLHunYYRk72lThE5Q45D3OKyplTW3g/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Form submission failed.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
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
          <p>Coming Soon!</p>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
            <button type="submit">Submit</button>
            {status && <p>{status}</p>}
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
