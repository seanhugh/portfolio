import React, { Component } from 'react';

// Penguins
import darkpenguin from './darkpenguin.svg';
import dark from './dark.svg';
import cheer from './cheer.png';

class ButtonT extends Component {
  render() {
    return (
      <div className = {this.props.theme}>
        <div className = "buttonContainer">
          <img src={dark} className="buttonSection" alt="dark" onClick={() => (this.props.theme !== "dark") ? this.props.onClick("dark") : console.log("nope")}/>
          <img src={cheer} className="buttonSection" alt="cheer" onClick={() => (this.props.theme !== "cheer") ? this.props.onClick("cheer") : console.log("nope")}/>
        </div>
      </div>
    );
  }
}
export default ButtonT;
