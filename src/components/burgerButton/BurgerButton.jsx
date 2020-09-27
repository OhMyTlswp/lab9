import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './burgerButton.css';
import PropTypes from 'prop-types';
function BurgerButton(props) {
  return (
    <div onClick={props.activate} className={props.active ? 'burger-button burger-button__active' : 'burger-button'}>
      <div className="burger-button_line" />
    </div>
  );
}
BurgerButton.propTypes = {
  active: PropTypes.bool.isRequired,
};
export default view(BurgerButton);
