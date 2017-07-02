import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

class HeadingText extends Component {
  constructor(props) {
    super(props);
    this.state = {mounted: false};
  }

  componentDidMount(){
    this.setState({
      mounted: true
    });
  };


  render() {
    return (
      <Motion style={{x: spring((this.state.mounted) ? 1 : 0, {stiffness: 110, damping: 40})}}>
          {({x}) =>
          <div className="containerd" style={{
            opacity: `${x}`,
          }}>
            <div className = "containerdHelp">
              <h1 className="text-center">Hello.</h1>
              <p className="text-center myIntro">My Name is <em>Sean Hughes</em>, and I am a computer science student at Harvard University.<br />
              I like to <em>code</em>, do <em>Graphic Design</em> and <em>Create</em>.</p>
            </div>
          </div>
          }
       </Motion>
    );
  }
}
export default HeadingText;
