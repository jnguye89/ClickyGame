import React, { Component } from 'react';
import ScoresDiv from "./components/ScoresDiv";

class App extends Component {
  state = {
    clickResult: "Click an image to begin!",
    currentScore: 0,
    topScore: 0,
  }

  
  render() {
    return (
      <div className="page-header">
        <div className="container">
          <div className="row">
            <ScoresDiv>
              <h2><a href="/">Clicky Game!</a></h2>
            </ScoresDiv>
            <ScoresDiv>
              <h2>{this.state.clickResult}</h2>
            </ScoresDiv>
            <ScoresDiv>
              <h2>Score: {this.state.currentScore} | Top Score: {this.state.topScore}</h2>
            </ScoresDiv>
          </div>
          <div className="jumbotron">
            <h1>Clicky Game!</h1>
            <h3>Click on an image to earn points, but don't click on any image more than once!</h3>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
