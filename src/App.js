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
        open:false};
  }

  onClick(theme1){
    this.setState({
      theme: theme1,
      open: (theme1 === "cheer") ? true : false
    });
  }

  render() {
    return (
      <div>
        <Opening />
        <Header theme={this.state.theme}/>
        <ButtonT theme={this.state.theme} onClick={this.onClick.bind(this)}/>
      </div>

    );
  }
}

export default App;
