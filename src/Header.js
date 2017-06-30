import React, { Component } from 'react';
import ClassImages from './ClassImages';

class Header extends Component {

  render() {
    const textFade = this.props.fadeOut ? "containerd textfade" : "containerd"
    const coverFadeIn = this.props.fadeOut ? "textfadeInCover textfadeIn" : "textfadeInCover"
    const fadeInColor = this.props.nextColor
    return (
      <div className={this.props.theme}>
          <div className="covering"></div>
          <div className={textFade}>
            <div className = "containerdHelp">
              <h1 className="text-center">Hello.</h1>
              <p className="text-center myIntro">My Name is <em>Sean Hughes</em>, and I am a computer science student at Harvard University.<br />
              I like to <em>code</em>, do <em>Graphic Design</em> and <em>Create</em>.</p>
            </div>
          </div>
          <ClassImages fadeOut={this.props.fadeOut} theme={this.props.theme} />
          <div style={{backgroundColor: fadeInColor}} className={coverFadeIn}></div>
      </div>
    );
  }
}
export default Header;
