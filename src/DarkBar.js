import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

class DarkBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  componentDidMount(){
    var self = this;
    setTimeout(function(){
       self.setState({
         open: true,
       });
     }, 50);
  }

  render() {
    var pixels = (this.props.percent * 560);
    return (
      <Motion style={{x: spring((this.state.open) ? pixels : 0, {stiffness: 100, damping: 30})}}>
          {({x}) =>
            <div className="darkBar">
              <div className="darkBarCover" style={{width: `${x}px`}}/>
            </div>
          }
       </Motion>
    );
  }
}
export default DarkBar;
