import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import github_circle from './github_circle.svg';


class GithubEl extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  mouseOver() {
    this.setState({hover: true});
    console.log("Mouse over");
  }

  mouseOut() {
      this.setState({hover: false});
      console.log("Mouse Out");

  }

  clicked(){
    window.open(this.props.link, '_blank')
  }

  render() {
    return (
      <div className="githubHolder" onClick={this.clicked.bind(this)} onMouseOver= {this.mouseOver.bind(this)} onMouseOut= {this.mouseOut.bind(this)}>
        <Motion style={{y: spring((this.state.hover) ? 80 : 0, {stiffness: 160, damping: 20})}}>
            {({y}) =>
            <div style={{
              WebkitTransform: `translate3d(${y}px, 0, 0)`,
              transform: `translate3d(${y}px, 0, 0)`,
            }}>
              <div className = "gitBlock" />
              <img src={github_circle} />
              <div className = "row">
                <div className = "col-md-6">
                  <h4>{this.props.title}</h4>
                </div>
                <div className = "col-md-6">
                  <p>{this.props.sub}</p>
                </div>
              </div>
              <div className = "row2">
                <div className = "col-md-12">
                  <h5>{this.props.description}</h5>
                </div>
              </div>
            </div>
          }
        </Motion>
      </div>
    );
  }
}
export default GithubEl;
