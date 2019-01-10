import React, { Component } from 'react';
import './App.css';
import Letters from './Letters';
import Solution from './Solution';
import Score from './Score';
import EndGame from './EndGame';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "cat",
        hint: "it's a tall animal"
      },
      score: 100
    }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  statusChange = (letter) => {
    let newStatus = { ...this.state.letterStatus }
    newStatus[letter] = true
    // if()
    this.setState({ letterStatus: newStatus })
  }

  updateScore = (letter) => {
    let wrongWord = this.state.score - 10
    let secretWord = this.state.solution.word.toUpperCase().split('')
    let found = secretWord.find(f => f === letter)
    if (!found && this.state.score > 0) {
      this.setState({ score: wrongWord })
    }
  }
  endGame = () => {
    let secretWord = this.state.solution.word.toUpperCase().split('')
    let endGame = secretWord.every(f => this.state.letterStatus[f])
    if (endGame) {
      return (
        <div>
          <img src="data:image/png;base64,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"></img>
          Congratulations! You won!!!
        </div>
      )
    }
  }





  render() {
    return (
      <div>
        <Score score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus}
          solution={this.state.solution} />
        <Letters letterStatus={this.state.letterStatus}
          statusChange={this.statusChange} endGame={this.endGame}
          scoreMethod={this.updateScore} />
        <EndGame score={this.state.score} endGame={this.endGame} />
      </div>
    );
  }
}

export default App;
