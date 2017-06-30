import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { slide as Menu } from 'react-burger-menu'

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
          "cheer": "#E2E7E8",
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
    console.log(this.state.theme);
    return (
      <Router>
        <div>
          <Route exact path="/" render={ ()  => <Header nextColor={this.state.nextColor} fadeOut={this.state.fadeOut} theme={this.state.theme}/>
             }/>

          <ButtonT theme={this.state.theme} onClick={this.onClick.bind(this)}/>

          <Menu pageWrapId={ "page-wrap" } isOpen={ false }>
            <Link to="/" onClick={this.onClick.bind(this, this.state.theme, 50)}>Home</Link>
            <Link to="/work">My Work</Link>
            <Link to="/contact">Contact</Link>
          </Menu>
        </div>
      </Router>

    );
  }
}

export default App
