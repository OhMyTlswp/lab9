import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './BurgerButton.css';
import PropTypes from 'prop-types';

function BurgerButton({ toggle, active }) {
  return (
    <button type="button" onClick={toggle} className={active ? 'burger-button burger-button__active' : 'burger-button'}>
      <div className="burger-button_line" />
    </button>
  );
}
BurgerButton.propTypes = {
  active: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default view(BurgerButton);
