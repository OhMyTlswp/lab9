import React from 'react';
import { view } from '@risingstack/react-easy-state';
import PropTypes from 'prop-types';
import './drawer.css';
function Drawer(props) {
  return <div className={props.active ? 'drawer drawer__active' : 'drawer'}>{props.content}</div>;
}

Drawer.propTypes = {
  active: PropTypes.bool.isRequired,
  content: PropTypes.element.isRequired,
};
export default view(Drawer);
