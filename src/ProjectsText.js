import React, { Component } from 'react';
import DarkBar from './DarkBar';
import GithubEl from './GithubEl'
import ProjectImages from './ProjectImages'

class WorkText extends Component {
  render() {
    return (
    <div className={this.props.theme}>
      <div className="workCon container">
        <div className="row justify-content-md-center">
          <div className="col col-md-12">
            <h2>Projects</h2>
            <ProjectImages />
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default WorkText;
