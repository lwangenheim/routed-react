import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import NavBar from '../../components/NavBar';
import {Routes, Link, IndexLink} from 'react-router';
import About from '../About';

import logo from './logo.svg';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul className="NavBar">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/About" activeClassName="active">About</Link></li>
          <li>About</li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
