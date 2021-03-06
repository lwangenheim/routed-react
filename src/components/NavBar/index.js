import React, { PropTypes, Component } from 'react'; 
import classnames from 'classnames' ; 

import './style.css'; 

export default class About extends Component { 
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() { 
    const { className, ...props } = this.props; 
    return (
        <div className={classnames('NavBar', className)} {...props}>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
      );
  }
}
