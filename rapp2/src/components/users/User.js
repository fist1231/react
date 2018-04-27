import React from 'react';
import PropTypes from 'prop-types';

const User = ({ onClick, name, disabled }) => (



  <li className="list-group-item"
    onClick={onClick}
    style={{
      textDecoration: disabled ? 'line-through' : 'none'
    }}
  >
    <strong>{name} - {JSON.stringify(disabled)}</strong>
  </li>


)

User.propTypes = {
   user: PropTypes.object
}

export default User;
