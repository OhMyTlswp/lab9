import React from 'react';
import './Page.css';
import PropTypes from 'prop-types';

function Page({ children }) {
  return <div className="page">{children}</div>;
}

Page.propTypes = {
  children: PropTypes.func.isRequired,
};
export default Page;
