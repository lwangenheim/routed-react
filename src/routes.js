import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink } from 'react-router';

import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';

var destination = document.querySelector("#container");

const Routes = (props) => (
    <Router {...props}>
      <Route path="/" component={App}>
        <IndexRoute component={App}/>
        <Route path="Home" components={Home} />
        <Route path="about" components={About} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>,
    destination
  );

export default Routes;
