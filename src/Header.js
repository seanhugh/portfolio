import React, { Component } from 'react';
import ClassImages from './ClassImages';

class Header extends Component {
  render() {
    return (
      <div className={this.props.theme}>
          <div className="containerd">
            <div className = "containerdHelp">
              <h1 className="text-center">Hello.</h1>
              <p className="text-center myIntro">My Name is <em>Sean Hughes</em>, and I am a computer science student at Harvard University.<br />
              I like to <em>code</em>, do <em>Graphic Design</em> and <em>Create</em>.</p>
            </div>
          </div>
          <ClassImages open={this.props.open} theme={this.props.theme} />
      </div>
    );
  }
}
export default Header;
