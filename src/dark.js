import React, { Component } from 'react';

// Penguins
import darkpenguin from './darkpenguin.svg';

class Dark extends Component {
  render() {
    return (
      <div className="covering">
      <img src={darkpenguin} className="App-logo" alt="Sup" />
      </div>
    );
  }
}
export default Dark;
