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
              <GithubEl title={"invitemo"} sub={"React, JavaScript, CSS"} link ={"https://github.com/seanhugh/invitemo"} description="A user focused events tool"/>
              <GithubEl title={"HCI Research"} sub={"Flask, Python, Numpy"} link ={"https://github.com/seanhugh/Mixed_Initiative_Research"} description="Web app that runs a mixed-initiative algebraic calculator."/>
              <GithubEl title={"Data & Islamaphobia"} sub={"R, Tidyverse"} link ={"https://github.com/seanhugh/Data-Islamophobia"} description="Analysis of War and Terrorism's impact on Islamaphobia"/>
              <GithubEl title={"Crowd Surf"} sub={"Flask, Python, HTML"} link ={"https://github.com/seanhugh/Crowd-Surf"} description="The best way to buy and sell tickets. A Flask based website."/>
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
