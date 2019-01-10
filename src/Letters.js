import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
   

    render() {
        return (
            <div>
                <div>Available Letters:</div>
                <span onClick={this.st}>{Object.keys(this.props.letterStatus).map(m => <Letter 
                scoreMethod={this.props.scoreMethod}
                endGame={this.props.endGame}
                 method={this.props.statusChange}
                    letter={this.props.letterStatus[m] === true ?
                        (<span className="true">{m}</span>) :
                        (<span className="false">{m}</span>)
                    }
                />)}
                </span>
            </div>
        )
    }
}

export default Letters;