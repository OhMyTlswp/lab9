import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Page from '../../components/page/Page';
import './settings.css';
function Settings() {
  return (
    <Page>
      <div className="settings">Settings</div>
    </Page>
  );
}
export default view(Settings);
