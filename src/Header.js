import React, { Component } from 'react';
import ClassImages from './ClassImages';
import HeadingText from './HeadingText';

class Header extends Component {

  render() {
    const coverFadeIn = this.props.fadeOut ? "textfadeInCover textfadeIn" : "textfadeInCover"
    const fadeInColor = this.props.nextColor
    return (
      <div className={this.props.theme}>
          <div className="covering"></div>
          <ClassImages fadeOut={this.props.fadeOut} theme={this.props.theme} />
          <div style={{backgroundColor: fadeInColor}} className={coverFadeIn}></div>
          <HeadingText fadeOut = {this.props.fadeOut}/>
      </div>
    );
  }
}
export default Header;
