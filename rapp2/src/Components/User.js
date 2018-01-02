import React from 'react';
import PropTypes from 'prop-types';

const User = ({ onClick, completed, text }) => (
  <li className="User"
    onClick={onClick}
    style={{
      textDecoration: disabled ? 'line-through' : 'none'
    }}
  >
    <strong>{name}</strong>
  </li>
)

User.propTypes = {
   user: PropTypes.object
}

export default User;
