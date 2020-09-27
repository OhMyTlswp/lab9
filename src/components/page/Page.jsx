import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './page.css';
function Page(props) {
  return <div className="page">{props.children}</div>;
}
export default view(Page);
