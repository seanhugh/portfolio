import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

class ProjectEl extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  mouseOver() {
    this.setState({hover: true});
  }

  mouseOut() {
      this.setState({hover: false});
  }

  clicked(){
    this.props.clicked(this.props.id);
  }

  render() {
    const fade= (this.state.window) ? "projectEl elFade" : "projectEl";
    const overLay= (this.state.window) ? "overLay elFade" : "overLay";
    const picArea= (this.state.window) ? "picArea elFade" : "picArea";
    return (
      <div>
        <Motion style={{y: spring((this.state.hover) ? 0 : 256, {stiffness:200, damping: 24})}}>
            {({y}) =>
            <div className={fade} onClick={this.clicked.bind(this)} onMouseOver= {this.mouseOver.bind(this)} onMouseOut= {this.mouseOut.bind(this)}>
              <img src={this.props.img} />
              <div className = "projectsHoverText" style={{
                WebkitTransform: `translate3d(0, ${y}px, 0)`,
                transform: `translate3d(0, ${y}px, 0)`,
              }}>
                <h4>{this.props.hoverTitle}</h4>
                <div className = "line" />
                <p>{this.props.hoverSub}</p>
                <p className="code">Click for More Info</p>
              </div>
            </div>
          }
        </Motion>
        </div>
    );
  }
}
export default ProjectEl;
