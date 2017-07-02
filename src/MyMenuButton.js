import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './hamburger.css'
import {
  Link
} from 'react-router-dom';
// Penguins
import darkpenguin from './darkpenguin.svg';

class MyMenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  setClass(){
    this.setState({
      open: !this.state.open
    });
    this.props.clickFun();
  }

  render() {
    console.log(this.state.open);
    const burgClass = (this.state.open) ? "pushed" : "";
    return (
      <div>
      <Motion style={{y: spring((this.state.open) ? 0 : -300)}}>
          {({y}) =>
            <div id="navBack" style={{
              WebkitTransform: `translate3d(${y}px, 0 , 0)`,
              transform: `translate3d(${y}px, 0, 0)`,
            }}>
              <div className = "menuContainer">
              <li><Link to="/" onClick={this.setClass.bind(this)}>Home</Link></li>
             <li><Link to="/work" onClick={this.setClass.bind(this)}>My Work</Link></li>
             <li><Link to="/contact" onClick={this.setClass.bind(this)}>Contact me</Link></li>
              </div>
            </div>
          }
       </Motion>
        <div id="nav-container" className={burgClass} onClick={this.setClass.bind(this)}>
          <div className="toggle-icon">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    );
  }
}
export default MyMenuButton;
