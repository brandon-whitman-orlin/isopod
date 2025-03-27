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

import Armadillidium_vulgare from "./src/articles/armadillidium_vulgare/armadillidium_vulgare.jsx";
import Armadillidium_maculatum from "./src/articles/armadillidium_maculatum/armadillidium_maculatum.jsx";
import Porcellionides_scaber from "./src/articles/porcellionides_scaber/porcellionides_scaber.jsx";
import Porcellionides_pruinosus from "./src/articles/porcellionides_pruinosus/porcellionides_pruinosus.jsx";
import Porcellionides_laevis from "./src/articles/porcellionides_laevis/porcellionides_laevis.jsx";

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
        <Route path="/articles/armadillidium_vulgare" element={<Armadillidium_vulgare />} />
        <Route path="/articles/armadillidium_maculatum" element={<Armadillidium_maculatum />} />
        <Route path="/articles/porcellionides_scaber" element={<Porcellionides_scaber />} />
        <Route path="/articles/porcellionides_pruinosus" element={<Porcellionides_pruinosus />} />
        <Route path="/articles/porcellionides_laevis" element={<Porcellionides_laevis />} />
      </Routes>
    </div>
  );
};

export default App;