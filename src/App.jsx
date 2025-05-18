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
import NotFound from "../pages/notfound/NotFound";

import Armadillidium_vulgare from "../species/armadillidium_vulgare/armadillidium_vulgare";
import Armadillidium_maculatum from "../species/armadillidium_maculatum/armadillidium_maculatum";
import Porcellio_scaber from "../species/porcellio_scaber/porcellio_scaber";
import Porcellionides_pruinosus from "../species/porcellionides_pruinosus/porcellionides_pruinosus";
import Porcellio_laevis from "../species/porcellio_laevis/porcellio_laevis";

import Isopod_Substrate from "../care/isopod_substrate/isopod_substrate";

import Isopods_101 from "../articles/isopods_101/isopods_101";
import Beginner_Isopods from "../articles/beginner_isopods/beginner_isopods";

import "./App.css"; // Ensure global styles are imported

const App = () => {
  return (
    <div className="app-container" style={{ minHeight: '100%', width: '100%', overflowX: 'hidden'}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/species" element={<Species />} />
        <Route path="/care" element={<Care />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/notfound" element={<NotFound />} />

        <Route path="/species/armadillidium_vulgare" element={<Armadillidium_vulgare />} />
        <Route path="/species/armadillidium_maculatum" element={<Armadillidium_maculatum />} />
        <Route path="/species/porcellionides_pruinosus" element={<Porcellionides_pruinosus />} />
        <Route path="/species/porcellio_scaber" element={<Porcellio_scaber />} />
        <Route path="/species/porcellio_laevis" element={<Porcellio_laevis />} />

        <Route path="/care/isopod_substrate" element={<Isopod_Substrate />} />

        <Route path="/articles/isopods_101" element={<Isopods_101 />} />
        <Route path="/articles/beginner_isopods" element={<Beginner_Isopods />} />

        {/* Catch-all route for unmatched URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;