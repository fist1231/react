import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCardFlip from 'react-card-flip';

const flipStyle= {
  border: '1px #000',
  height: '150px'
}

class FlipCardB extends Component {

  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div style={flipStyle} key="front" onMouseEnter={this.handleClick}>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </div>

        <div style={flipStyle} key="back" onMouseLeave={this.handleClick}>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    )
  }
}
export default FlipCardB;
