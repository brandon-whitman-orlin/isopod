import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import "./NotFound.css";

import Navbar from "../../components/navbar/Navbar";
import WebFooter from "../../components/webfooter/WebFooter";
import { ReactComponent as IsopodLogo } from "../../assets/icons/isopod-ball-eyes.svg";

function NotFound() {
  const location = useLocation();
  const message = location.state?.message || `Sorry, we can't find anything for \"${location.pathname}\".`;
  const cta = location.state?.cta || "Want to help change that?";
  return (
    <div className='not-found'>
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
      <div className="not-found-content">
        <h1 className='not-found-h1'>
          <span className='four-o-four'>
            4
            <span className='isopod-o'>
              <IsopodLogo />
            </span>
            4
          </span>
          <span className='hyphen'>-</span>
          <span>NOT FOUND</span>
        </h1>
        <p className='not-found-text'>{message}</p>
        <p className='not-found-text'>
          {cta} Click <a href="/collaborate" rel="noopener noreferrer">here</a>.
        </p>
      </div>
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
              </a>
            ],
            [
              <h4>Services</h4>,
              <a href="/species" rel="noopener noreferrer">Species</a>,
              <a href="/care" rel="noopener noreferrer">Care</a>,
              <a href="/articles" rel="noopener noreferrer">Articles</a>,
              <a href="/affiliate" rel="noopener noreferrer">Affiliate Links</a>
            ],
            [
              <h4>More</h4>,
              <a href="/about" rel="noopener noreferrer">About Us</a>,
              <a href="/collaborate" rel="noopener noreferrer">Work With Us</a>,
              <a href="/contact" rel="noopener noreferrer">Contact</a>
            ]
          ]}
        />
      </footer>
    </div>
  );
}

export default NotFound;