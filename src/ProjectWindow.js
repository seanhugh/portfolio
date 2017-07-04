import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import SampleIm from './images/sampleIm.png'

class ProjectWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {part1: false,
    part2: false};
  }

  componentWillReceiveProps(nextProps){
    var self = this;
      if (nextProps.open === true){
        setTimeout(function(){
           self.setState({
             part1:true,
             part2: false,
           });
         }, 100);
      setTimeout(function(){
         self.setState({
           part1:true,
           part2: true,
         });
       }, 500);
     }
  };

  render() {
    const myClass = (this.props.open) ? "ProjectWindow isActive" : "ProjectWindow";
    const myClass2 = (this.props.open) ? "ImageWindow isActive" : "ImageWindow";
    return (
      <div>
        <div onClick = {this.props.goAway} className={myClass} />
        <Motion className={myClass2} style={{y: spring((this.state.part1) ? 1000 : 0, {stiffness:200, damping: 24})}}>
            {({y}) =>
            <Motion style={{x: spring((this.state.part2) ? 600 : 5, {stiffness:200, damping: 24})}}>
                {({x}) =>
              <div className = "ImageHolder" style={{
                width: `${y}px`,
                height: `${x}px`,
              }}>
                <img src={SampleIm} />
              </div>
            }
            </Motion>
            }
            </Motion>
      </div>
    );
  }
}
export default ProjectWindow;
