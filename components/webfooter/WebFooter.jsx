import React from 'react';
import PropTypes from 'prop-types';

import './WebFooter.css';

const WebFooter = ({ children }) => {
  return (
    <div className="web-footer">
      {children.map((list, index) => (
        <div key={index} className="footer-column">
          {list.length === 1 ? (
            // Render the single child directly without a wrapping div
            list[0]
          ) : (
            // Render multiple items, each wrapped in a div
            list.map((item, idx) => <div key={idx}>{item}</div>)
          )}
        </div>
      ))}
    </div>
  );
};

WebFooter.propTypes = {
  children: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)),
};

export default WebFooter;
