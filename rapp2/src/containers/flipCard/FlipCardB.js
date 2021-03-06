import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCardFlip from 'react-card-flip';

const flipStyle= {
  height: '200px',

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
          <h3><i class="fa fa-power-off" aria-hidden="true"></i> Getting Started</h3>
          <p>Individuals and the organizations with which they are affiliated must be registered in NSPIRES.</p>
          {/*<button onClick={this.handleClick}>Click to flip</button>-->*/}
        </div>

        <div style={flipStyle} key="back" onMouseLeave={this.handleClick}>
          This is the back of the card.
            {/*<button onClick={this.handleClick}>Click to flip</button>-->*/}
        </div>
      </ReactCardFlip>
    )
  }
}
export default FlipCardB;
