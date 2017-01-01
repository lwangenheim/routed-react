import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import NavBar from './components/NavBar'
import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router {...props}>
      <Route path="/" component={App}>
        <Route path="/about" components={About} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  );

export default Routes;