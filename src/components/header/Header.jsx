import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './Header.css';
import Drawer from '../Drawer/Drawer';
import LinkMenu from '../LinkMenu/LinkMenu';
import BurgerButton from '../BurgerButton/BurgerButton';
import state from '../../store';
import toggleDrawer from '../../actions/toggleDrawer';

function Header() {
  return (
    <div className="header">
      <Drawer active={state.isDrawerOpen} content={<LinkMenu links={state.links} />} />
      <BurgerButton active={state.isDrawerOpen} toggle={toggleDrawer} />
    </div>
  );
}
export default view(Header);
