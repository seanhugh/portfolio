import React, { Component } from 'react';


class HomeText extends Component {
  render() {
    return (
      <div className="containerd">
        <div className = "containerdHelp">
          <h1 className="text-center">Hello.</h1>
          <p className="text-center myIntro">My Name is <em>Sean Hughes</em>, and I am a computer science student at Harvard University.<br />
          I like to <em>code</em>, do <em>Graphic Design</em> and <em>Create</em>.</p>
          <p className="text-center myIntro">*This Website is made entirely in React JS</p>
        </div>
      </div>
    );
  }
}
export default HomeText;
