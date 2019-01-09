import React, { Component } from 'react';
import './App.css';
import Letters from './Letters';
import Solution from './Solution';
import Score from './Score';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus : this.generateLetterStatuses(),
      solution: {
        word: "giraffe",
        hint: "it's a tall animal"
      },
      score: 0
    }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
    return (
      <div>
        <Score score={this.state.score}/>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
        <Letters letterStatus={this.state.letterStatus}/>

      </div>
    );
  }
}

export default App;
