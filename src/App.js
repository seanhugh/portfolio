import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import MyMenuButton from './MyMenuButton';
// LOGO
import penguin2 from './penguinGIF.gif';

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
          "cheer": "#EEFFFF",
          "dark": "#ffffff"
        },
        };
  };

  onClick(theme1, time){
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
     }, time);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={ ()  => <Header page="home" nextColor={this.state.nextColor} fadeOut={this.state.fadeOut} theme={this.state.theme}/>
             }/>
          <Route exact path="/coding" render={ ()  => <Header page="work" nextColor={this.state.nextColor} fadeOut={this.state.fadeOut} theme={this.state.theme}/>
             }/>
          <ButtonT theme={this.state.theme} onClick={this.onClick.bind(this)}/>
          <MyMenuButton theme={this.state.theme} clickFun={this.onClick.bind(this, this.state.theme, 50)}/>
        </div>
      </Router>

    );
  }
}

export default App

//          <Route exact path="/projects" render={ ()  => <Header page="projects" nextColor={this.state.nextColor} fadeOut={this.state.fadeOut} theme={this.state.theme}/>
//             }/>
