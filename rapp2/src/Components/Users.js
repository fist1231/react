import React, { Component } from 'react';
import User from './User'
import PropTypes from 'prop-types';

const Users = ({ users, onUserClick }) => (
  <ul>
    {users.map(user =>
      <User
        key={user.id}
        {...user}
        onClick={() => onUserClick(user.id)}
      />
    )}
  </ul>
)

Users.propTypes = {
  users: PropTypes.array
}

export default Users;
