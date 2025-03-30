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
import DefaultArticle from "../pages/defaultarticle/DefaultArticle";

import Armadillidium_vulgare from "../care/armadillidium_vulgare/armadillidium_vulgare";
import Armadillidium_maculatum from "../care/armadillidium_maculatum/armadillidium_maculatum";
import Porcellionides_scaber from "../care/porcellionides_scaber/porcellionides_scaber";
import Porcellionides_pruinosus from "../care/porcellionides_pruinosus/porcellionides_pruinosus";
import Porcellionides_laevis from "../care/porcellionides_laevis/porcellionides_laevis";

import Isopods_101 from "../articles/isopods_101/isopods_101";
import Beginner_Isopods from "../articles/beginner_isopods/beginner_isopods";

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
        <Route path="/defaultarticle" element={<DefaultArticle />} />
        <Route path="/care/armadillidium_vulgare" element={<Armadillidium_vulgare />} />
        <Route path="/care/armadillidium_maculatum" element={<Armadillidium_maculatum />} />
        <Route path="/care/porcellionides_scaber" element={<Porcellionides_scaber />} />
        <Route path="/care/porcellionides_pruinosus" element={<Porcellionides_pruinosus />} />
        <Route path="/care/porcellionides_laevis" element={<Porcellionides_laevis />} />
        <Route path="/articles/isopods_101" element={<Isopods_101 />} />
        <Route path="/articles/beginner_isopods" element={<Beginner_Isopods />} />
      </Routes>
    </div>
  );
};

export default App;