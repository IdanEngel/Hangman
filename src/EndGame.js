import React, { Component } from 'react';

class EndGame extends Component {
    endGame = () => {
        this.props.endGame(this.props.letter)
    }
    
    render() {

        return (
            <div>
                {this.props.score === 0 ? <div>Game Over!</div> : null}
                <div>
                {this.props.endGame()}
                </div>
            </div>
        )
    }
}


export default EndGame;