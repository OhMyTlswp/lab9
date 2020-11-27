import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import Header from './components/Header/Header';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/dashboard">
            <Header />
            <Dashboard />
          </Route>
          <Route path="/settings">
            <Header />
            <Settings />
          </Route>
          <Route exec path="/">
            <Header />
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
