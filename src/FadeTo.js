import React, { Component } from 'react';

// Penguins
import darkpenguin from './darkpenguin.svg';

class FadeTo extends Component {
  render() {
    return (
      <div className="fadeCover" style={{backgroundColor: this.props.color, opacity: (this.props.go ? 1 : 0)}}>

      </div>
    );
  }
}
export default FadeTo;
