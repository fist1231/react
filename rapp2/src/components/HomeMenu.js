import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { push as Menu } from "react-burger-menu";
import "./HomeMenu.css";

class HomeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange(state) {
    this.setState({
      menuOpen: state.isOpen
    });
  }

  closeMenu() {
    this.setState({
      menuOpen: false
    });
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  componentDidMount() {}

  render() {
    return (
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          left
          noOverlay
          pageWrapId={ this.props.pageWrapId } outerContainerId={ this.props.outerContainerId }
        >
          <Link to='/' onClick={this.login} onClick={() => this.closeMenu()}>Home</Link>
          <Link to='/users' onClick={this.login} onClick={() => this.closeMenu()}>Users</Link>
          <Link to='/usersTable' onClick={this.login} onClick={() => this.closeMenu()}>Users Table</Link>
          <Link to='/solicitations' onClick={this.login} onClick={() => this.closeMenu()}>Solicitations</Link>
          <Link to='/reviewProposals' onClick={this.login} onClick={() => this.closeMenu()}>Review Proposals</Link>
        </Menu>
    );
  }
}

export default HomeMenu;
