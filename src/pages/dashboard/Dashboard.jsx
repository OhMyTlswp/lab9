import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './dashboard.css';
import Page from '../../components/page/Page';
function Dashboard() {
  return (
    <Page>
      <div className="dashboard">Dashboard</div>
    </Page>
  );
}
export default view(Dashboard);
