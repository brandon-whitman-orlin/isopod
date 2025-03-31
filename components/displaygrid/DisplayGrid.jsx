import React from 'react';
import PropTypes from 'prop-types';
import './DisplayGrid.css'; // Assuming you have a CSS file for styling

const DisplayGrid = ({ children, single, identical }) => {
  // Conditionally apply class "single-column" if 'single' prop is true
  // Also add "identical" class if 'identical' prop is provided
  const gridClass = `display-grid ${single ? 'single-column' : ''} ${identical ? 'identical' : ''}`.trim();

  // Wrap each child with a .display-grid-item element
  const wrappedChildren = React.Children.map(children, (child) => (
    <div className="display-grid-item">{child}</div>
  ));

  return <div className={gridClass}>{wrappedChildren}</div>;
};

// Prop validation
DisplayGrid.propTypes = {
  children: PropTypes.node.isRequired,
  single: PropTypes.bool,
  identical: PropTypes.bool,
};

DisplayGrid.defaultProps = {
  single: false,
  identical: false,
};

export default DisplayGrid;
