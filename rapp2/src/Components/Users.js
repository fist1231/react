import React, { Component } from 'react';
import User from './User'
import PropTypes from 'prop-types';
import _ from 'lodash';

var usrs = [];

const fetchUsers = () => {
fetch("http://192.168.1.208:30333/nress/users")
  .then(res => res.json())
  .then(uss => {
    console.log('wtf ' + uss);
    usrs =  uss;
    console.log('usrs = ' + JSON.stringify(usrs));
  })
}

const Users = ({ users, onUserClick }) => (
  <div>
    <ul>
      {users
        .map(u => {
          // u.disabled = false;
          console.log("u ===> " + JSON.stringify(u));
          return u;
        })
        .map(u =>
          <User
            key={u.id}
            // {...u}
            {...u}
            {...{disabled: u.disabled}} // adds disabled attribute to User component and parameter to user object
            // {..._.assign({}, u, {disabled: false})} // works too
            // name={u.name}
            // user = {u}
            onClick={() => {
              console.log('Clicked $$$$$$$$$$ ' + JSON.stringify(u));
              onUserClick(u.id);
              // onButtonClick(fetchUsers());
            }}
          />
        )
      }
    </ul>
    <button type="button">Click me</button>
  </div>

)

Users.propTypes = {
  users: PropTypes.array
}

export default Users;
