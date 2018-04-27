import React, { Component } from 'react';
import User from './User'
import PropTypes from 'prop-types';
import _ from 'lodash';

var usrs = [];

const fetchUsers = () => {
fetch("http://192.168.1.208:30333/nress/users")
// fetch("http://192.168.56.1:30333/nress/users")
  .then(res => res.json())
  .then(uss => {
    // console.log('wtb ' + uss);
    usrs =  uss;
    // console.log('usrs = ' + JSON.stringify(usrs));
  })
}

const Users = ({ users, onUserClick }) => (
  <div>
  <h1>Users</h1>

  <div className="form-row">
    <div className="form-group col">
    <ul className="list-group">
      {users
        .map(u => {
          // u.disabled = false;
          // console.log("u ===> " + JSON.stringify(u));
          return u;
        })
        .map(u =>
          <User
            key={u.id}
            // {...u}
            {...u}
            {...{disabled: u.disabled}} // adds disabled attribute to User component and parameter to user object
            // {..._.assign({}, u, {disabled: false})} // works too
            // {...
            //   import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
            //    var element = document.createElement('div');
            //      _.assign({}, u, {disabled: false}) // works too
            //    return element;
            //   }).catch(error => 'An error occurred while loading the component')
            // }
            // name={u.name}
            // user = {u}
            onClick={() => {
              // console.log('Clicked $$$$$$$$$$ ' + JSON.stringify(u));
              onUserClick(u.id);
              // onButtonClick(fetchUsers());
            }}
          />
        )
      }
    </ul>
    </div>
    <div className="form-group col"></div>
    </div>

    <button type="button" className="btn btn-primary">Click me</button>
  </div>

)

Users.propTypes = {
  users: PropTypes.array
}

export default Users;
