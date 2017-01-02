import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, IndexLink, browserHistory } from 'react-router';

//import Routes from './routes';
//import NavBar from './components/NavBar';
import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';


import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
       <IndexRoute component={Home} />
       <Route path="about" components={About} />
       <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
