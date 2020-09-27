import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import Header from './components/header/Header';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route exec path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
serviceWorker.unregister();
