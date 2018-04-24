import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCardFlip from 'react-card-flip';
import { withRouter } from 'react-router-dom';

const flipStyle= {
  height: '160px',
}

class FlipCardA extends Component {

  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
  }

  handleClick(e) {
    // e.preventDefault();
    // this.setState({ isFlipped: !this.state.isFlipped });
    this.props.history.push('/solcitations');
  }

  handleMouseEvent(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }


  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>

        <div style={flipStyle} key="front" onMouseEnter={this.handleMouseEvent}>
          <h3><i class="fa fa-file-text-o" aria-hidden="true"></i> Solicitations</h3>
          {/*<button onClick={this.handleClick}>Click to flip</button>-->*/}
          <p>Search for and view open, closed, past, and future NASA research announcements. </p>

        </div>

        <div style={flipStyle} key="back" className="backFlip" onMouseLeave={this.handleMouseEvent} onClick={this.handleClick}>
        <p>Search for and view open, closed, past, and future NASA research announcements. The full text of the solicitation announcements can be viewed and downloaded.</p>
        <a href="#">Learn More</a>
            {/*<button onClick={this.handleClick}>Click to flip</button>-->*/}
        </div>

      </ReactCardFlip>
    )
  }
}
export default withRouter(FlipCardA);
