import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Species from "../pages/species/Species";
import Care from "../pages/care/Care";
import Articles from "../pages/articles/Articles";
import Affiliate from "../pages/affiliate/Affiliate";
import Collaborate from "../pages/collaborate/Collaborate";

import "./App.css"; // Ensure global styles are imported

const App = () => {
  return (
    <div className="app-container" style={{ minHeight: '100%', width: '100%' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/species" element={<Species />} />
        <Route path="/care" element={<Care />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/collaborate" element={<Collaborate />} />
      </Routes>
    </div>
  );
};

export default App;