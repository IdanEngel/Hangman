import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {

    render() {
        let secretWord = this.props.solution.word.toUpperCase().split('')
        let solutions = '_ '
        return (
            <div>
                <div> {secretWord.map(m => <Letter
                    letter={this.props.letterStatus[m] === true
                        ? <span>{m}</span> :
                        (<span >{solutions}</span>)} />)} </div>
                <em>{this.props.solution.hint}</em>
            </div>

        )
    }
}

export default Solution;