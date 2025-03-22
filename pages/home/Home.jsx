import React, { useEffect, useState } from "react";
import "./Home.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";

import { ReactComponent as IsopodLogo } from "../../assets/icons/isopod-ball-eyes.svg";

function Home() {
  return (
    <div className="home">
      <header className="header">
        <Navbar
          links={[
            <a href="/" className="active">
              Home
            </a>,
            <a href="/about">
              About
            </a>,
            <a href="/contact">Contact</a>,
            // <div className="dropdown div-button" tabIndex={0}>Options <span className="dropdown-caret"></span>
            //   <ul className="dropdown-menu">
            //     <li><ThemeChange className="dropdown-option"/></li>
            //     <li><button className="dropdown-option">Language</button></li>
            //   </ul>
            // </div>
          ]}
          name={<span><span><IsopodLogo/></span><span>Niceopods</span></span>}
        />
      </header>
      <ThemeMenu/>
      <main className="main">
        <p>Work in progress :D</p>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default Home;