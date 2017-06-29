import React, { Component } from 'react';
import penguin2 from './penguinGIF.gif';

class Opening extends Component {
  render() {
    return (
      <div className="hideMe bigWhite">
        <img src={penguin2} className="signup-response loading-logo center-block" alt="Sup" />
        <h2 className = "signup-response text-center hidName">Hughes Design</h2>
      </div>
    );
  }
}
export default Opening;
