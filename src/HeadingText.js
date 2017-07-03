import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import HomeText from './HomeText';
import WorkText from './WorkText';

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
    if (this.props.page === "home"){
      var page2render = <HomeText theme={this.props.theme}/>
    } else if (this.props.page === "work"){
      var page2render = <WorkText theme={this.props.theme}/>
    };
    return (
      <Motion style={{x: spring((this.state.mounted) ? 1 : 0, {stiffness: 110, damping: 40})}}>
          {({x}) =>
          <div style={{
            opacity: `${x}`,
          }}>
            {page2render}
          </div>
          }
       </Motion>
    );
  }
}
export default HeadingText;
