import React, { Component } from 'react';
import ScoresDiv from "./components/ScoresDiv";
import Square from "./components/Square";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      images: Array(12).fill(false),
      clickResult: "Click an image to begin!",
      currentScore: 0,
      topScore: 0,
    }
  }

  renderImage() {
    const randomArray = [0,1,2,3,4,5,6,7,8,9,10,11]
    
    const newArray = shuffle(randomArray)

    const imageUrl = ["BugsBunny.jpeg", "Garfield.png", "JerryMouse.png", "LisaSimpsons.jpeg", "MickeyMouse.jpeg", "MinnieMouse.png", "Patrick.png", "Pikachu.png", "PopEye.png", "StewieFamilyGuy.jpeg", "Tweety.png", "Winnie.jpeg"];
    return (
      <div>
        {newArray.map(number => (
           <Square 
           onClick = {() => this.handleClick(number)}
           image = {imageUrl[number]}
         />
        ))}
      </div>
    )
  }

  handleClick(i) {
    let images = this.state.images;
    let currentScore = this.state.currentScore;
    let topScore = this.state.topScore;

    if (images[i]) {
      images = Array(12).fill(false);
      this.setState({
        clickResult: "You guessed incorrectly!",
        currentScore: 0,
        images: images,
      })
    } else {
      topScore = topScore + 1;
      currentScore = currentScore + 1;
      images[i] = true;
      if (currentScore >= topScore) {
        this.setState({
          images: images,
          clickResult: "You guessed correctly!",
          currentScore: currentScore,
          topScore: topScore,
        })
      } else {
        this.setState({
          images: images,
          clickResult: "You guessed correctly!",
          currentScore: currentScore,
        })
      }
      
    }
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Clicky Game</h2>
          </div>
          <div className="col-md-4">
            <h2>{this.state.clickResult}</h2>
          </div>
          <div className="col-md-4">
            <h2>Score: {this.state.currentScore} | Top Score: {this.state.topScore}</h2>
          </div>
        </div>
        <div className="jumbotron">
          <h1>Clicky Game!</h1>
          <h3>Click on an image to earn points, but don't click on any more than once!</h3>
        </div>
        <div className="row">
          {this.renderImage()}
        </div>
      </div>
    )
  }

}

export default App;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}