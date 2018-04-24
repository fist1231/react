import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCardFlip from 'react-card-flip';

const flipStyle= {
  height: '150px'
}

class FlipCardC extends Component {

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
          <h3><i class="fa fa-question-circle" aria-hidden="true"></i> NSPIRES Help Desk</h3>
          <p>If you need help or have any questions regarding the NSPIRES website, please contact us.</p>
          {/*<button onClick={this.handleClick}>Click to flip</button>-->*/}
        </div>

        <div style={flipStyle} key="back" onMouseLeave={this.handleClick}>
          <p>If you need help or have any questions regarding the NSPIRES website, please contact us.</p>
            {/*<button onClick={this.handleClick}>Click to flip</button>-->*/}
        </div>
      </ReactCardFlip>
    )
  }
}
export default FlipCardC;
