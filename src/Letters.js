import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    render() {
        return (
            <div>
                <Letter />
                <div>Available Letters:</div>
                <span>{Object.keys(this.props.letterStatus).map(m => <Letter
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