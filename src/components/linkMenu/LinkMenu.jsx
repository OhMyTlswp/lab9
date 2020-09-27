import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './linkMenu.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
function LinkMenu(props) {
  return (
    <>
      {props.links.map((link) => (
        <NavLink key={link.key} to={link.url} activeClassName="link__active" className="link">
          {link.name}
        </NavLink>
      ))}
    </>
  );
}

LinkMenu.propTypes = {
  links: PropTypes.array.isRequired,
};
export default view(LinkMenu);
