import React, { Component } from 'react';
// LOGO
import penguin2 from './penguinGIF.gif';

import Opening from "./Opening";
import ButtonT from "./ButtonT";
import Header from "./Header";
import ClassImages from './ClassImages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        theme: "dark",
        open:false,
        fadeOut:false,
        nextColor: "#E2E7E8",
        color: {
          "cheer": "#E2E7E8",
          "dark": "#ffffff"
        },
        };
  };
  onClick(theme1){
    var self=this;
    this.setState({
      fadeOut: true,
      nextColor: self.state.color[theme1]
    });
    setTimeout(function(){
       self.setState({
         theme: theme1,
         open: (theme1 === "cheer") ? true : false,
         fadeOut: false,
       });
     }, 200);
  }

  render() {
    return (
      <div>
        <Opening />
        <Header nextColor={this.state.nextColor} fadeOut={this.state.fadeOut} theme={this.state.theme}/>
        <ButtonT theme={this.state.theme} onClick={this.onClick.bind(this)}/>
      </div>

    );
  }
}

export default App;
