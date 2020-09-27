import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './header.css';
import Drawer from '../../components/drawer/Drawer';
import LinkMenu from '../../components/linkMenu/LinkMenu';
import BurgerButton from '../../components/burgerButton/BurgerButton';
import state from '../../store';
import openDrawer from '../../actions/openDrawer';
function Header() {
  return (
    <div className="header">
      <Drawer active={state.isDrawerOpen} content={<LinkMenu links={state.links} />} />
      <BurgerButton active={state.isDrawerOpen} activate={openDrawer} />
      <div className="header-blocks"></div>
    </div>
  );
}
export default view(Header);
