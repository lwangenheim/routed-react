import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink } from 'react-router';

import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router {...props}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" components={About} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  );

export default Routes;
