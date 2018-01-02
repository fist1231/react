import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    return (
      <li className="User">
        <strong>{this.props.user.name}</strong>
      </li>
    );
  }
}

User.propTypes = {
   user: PropTypes.object
}

export default User;
