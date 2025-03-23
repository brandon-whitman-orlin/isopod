import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./PageSection.css";

const PageSection = ({ children }) => {
  return (
    <section className="page-section">
        {children}
    </section>
  );
};

PageSection.propTypes = {
  children: PropTypes.node,
};

export default PageSection;