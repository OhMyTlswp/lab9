import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Page from '../../components/page/Page';
import './profile.css';
function Profile() {
  return (
    <Page>
      <div className="profile">Profile</div>
    </Page>
  );
}
export default view(Profile);
