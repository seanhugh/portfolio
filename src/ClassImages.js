import React, { Component } from 'react';

// Pages
import Dark from './dark'
import Cheer from './cheer'
import FadeTo from './FadeTo'

class ClassImages extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false,
                  theme: "dark",};
  }

  componentWillReceiveProps(nextProps){
    var self = this;
      if (nextProps.theme !== this.state.theme){
      self.setState({
        open: false,
        theme: nextProps.theme,
      });
      setTimeout(function(){
         self.setState({
           open: true,
           theme: nextProps.theme,
         });
       }, 50);
     }
  };

  render() {
    if (this.state.theme === "dark"){
      return (<Dark fadeOut={this.props.fadeOut}/>);
    }
    else if (this.state.theme === "cheer"){
      return (<Cheer open={this.state.open}/>);
    }
  }
}

export default ClassImages;
