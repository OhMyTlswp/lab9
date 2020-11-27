import React from 'react';
import PropTypes from 'prop-types';
import './Drawer.css';

function Drawer({ active, content }) {
  return <div className={active ? 'drawer drawer__active' : 'drawer'}>{content}</div>;
}

Drawer.propTypes = {
  active: PropTypes.bool.isRequired,
  content: PropTypes.element.isRequired,
};
export default Drawer;
