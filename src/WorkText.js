import React, { Component } from 'react';
import DarkBar from './DarkBar';
import GithubEl from './GithubEl'

class WorkText extends Component {
  render() {
    return (
    <div className={this.props.theme}>
      <div className="workCon container">
        <div className="row justify-content-md-center">
          <div className="col col-md-7">
            <h2>Skills</h2>
            <div className="skillSection">
              <h4>Illustrator</h4>
              <DarkBar percent={.9} />
            </div>
            <div className="skillSection">
              <h4>Python</h4>
              <DarkBar percent={.5} />
            </div>
            <div className="skillSection">
              <h4>React JS</h4>
              <DarkBar percent={.7} />
            </div>
            <div className="skillSection">
              <h4>HTML & CSS</h4>
              <DarkBar percent={.9} />
            </div>
            <div className="skillSection">
              <h4>C</h4>
              <DarkBar percent={.4} />
            </div>
            <div className="skillSection">
              <h4>After Effects / Photoshop</h4>
              <DarkBar percent={.5} />
            </div>
          </div>
          <div className="col col-md-5">
            <h2>GitHub <sm>@seanhugh</sm></h2>
            <div className = "allMahGits">
              <GithubEl title={"Portfolio Website"} sub={"React JS, HTML, CSS"} link ={"https://github.com/seanhugh"} description="A website made from scratch using react JS"/>
              <GithubEl title={"Portfolio Website"} sub={"React JS, HTML, CSS"} link ={"https://github.com/seanhugh"} description="A website made from scratch using react JS"/>
              <GithubEl title={"Portfolio Website"} sub={"React JS, HTML, CSS"} link ={"https://github.com/seanhugh"} description="A website made from scratch using react JS"/>
              <GithubEl title={"Portfolio Website"} sub={"React JS, HTML, CSS"} link ={"https://github.com/seanhugh"} description="A website made from scratch using react JS"/>
              <h5 className="viewMore text-center"><a href="https://github.com/seanhugh">View More</a></h5>
            </div>
          </div>
            </div>
      </div>
    </div>
    );
  }
}
export default WorkText;
