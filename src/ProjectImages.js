import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import github_circle from './github_circle.svg';
import ProjectEl from './ProjectEl';
import portfolio from './images/portfolio.png';
// import ProjectWindow from './ProjectWindow';

class ProjectImages extends Component {
  constructor(props) {
    super(props);
    this.state = {window: false,
                  id:"0"};
  }
  clicked(ids){
    this.setState({
      window:true,
      id:ids
    });
  }

  goAway(){
    this.setState({
      window:false,
    });
  }
  render() {
    return (
      <div>
      <div className="projectHolder" >
        <div className="row">
          <div className = "col-md-3">
                  <ProjectEl img={portfolio} hoverTitle="My Portfolio Project" hoverSub="My sub explaining this project a little"
                    windowText="My sub explaining this project a little. My sub explaining this project a little."
                    windowCodes="HTML,CSS,JavaScript, React JS"
                    id="1"
                    clicked={this.clicked.bind(this)}/>
          </div>
          <div className = "col-md-3">
          <ProjectEl img={portfolio} hoverTitle="My Portfolio Project" hoverSub="My sub explaining this project a little"
            windowText="My sub explaining this project a little. My sub explaining this project a little."
            windowCodes="HTML,CSS,JavaScript, React JS"
            id="2"
            clicked={this.clicked.bind(this)}/>
          </div>
          <div className = "col-md-3">
          <ProjectEl img={portfolio} hoverTitle="My Portfolio Project" hoverSub="My sub explaining this project a little"
            windowText="My sub explaining this project a little. My sub explaining this project a little."
            windowCodes="HTML,CSS,JavaScript, React JS"
            id="2"
            clicked={this.clicked.bind(this)}/>
          </div>
          <div className = "col-md-3">
          <ProjectEl img={portfolio} hoverTitle="My Portfolio Project" hoverSub="My sub explaining this project a little"
            windowText="My sub explaining this project a little. My sub explaining this project a little."
            windowCodes="HTML,CSS,JavaScript, React JS"
            id="2"
            clicked={this.clicked.bind(this)}/>
          </div>
        </div>
        <div className="row">
          <div className = "col-md-3">
          <ProjectEl img={portfolio} hoverTitle="My Portfolio Project" hoverSub="My sub explaining this project a little"
            windowText="My sub explaining this project a little. My sub explaining this project a little."
            windowCodes="HTML,CSS,JavaScript, React JS"
            id="2"
            clicked={this.clicked.bind(this)}/>
          </div>
          <div className = "col-md-3">
          <ProjectEl img={portfolio} hoverTitle="My Portfolio Project" hoverSub="My sub explaining this project a little"
            windowText="My sub explaining this project a little. My sub explaining this project a little."
            windowCodes="HTML,CSS,JavaScript, React JS"
            id="2"
            clicked={this.clicked.bind(this)}/>
          </div>
          <div className = "col-md-3">
          <ProjectEl img={portfolio} hoverTitle="My Portfolio Project" hoverSub="My sub explaining this project a little"
            windowText="My sub explaining this project a little. My sub explaining this project a little."
            windowCodes="HTML,CSS,JavaScript, React JS"
            id="2"
            clicked={this.clicked.bind(this)}/>
          </div>
          <div className = "col-md-3">
          <ProjectEl img={portfolio} hoverTitle="My Portfolio Project" hoverSub="My sub explaining this project a little"
            windowText="My sub explaining this project a little. My sub explaining this project a little."
            windowCodes="HTML,CSS,JavaScript, React JS"
            id="2"
            clicked={this.clicked.bind(this)}/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default ProjectImages;
