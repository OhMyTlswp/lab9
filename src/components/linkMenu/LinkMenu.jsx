import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './LinkMenu.css';
import { NavLink } from 'react-router-dom';
import closeDrawer from '../../actions/closeDrawer';

function LinkMenu() {
  return (
    <>
      <NavLink onClick={closeDrawer} to="/dashboard" activeClassName="link__active" className="link">
        dashboard
      </NavLink>
      <NavLink onClick={closeDrawer} to="/profile" activeClassName="link__active" className="link">
        profile
      </NavLink>
      <NavLink onClick={closeDrawer} to="/settings" activeClassName="link__active" className="link">
        settings
      </NavLink>
    </>
  );
}
export default view(LinkMenu);
