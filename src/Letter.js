import React, { Component } from 'react';

class Letter extends Component {
    statusChange = () => {
        this.props.method(this.props.letter.props.children)
        this.props.scoreMethod(this.props.letter.props.children)
    }

    render() {
        return (
            <span>
            <span onClick={this.statusChange}>{this.props.letter}</span>
            </span>
        )
    }
}

export default Letter;