import React, { Component } from 'react';
import { connect } from 'react-redux'
import { disableUser } from '../actions'
import Users from '../components/Users'

import $ from 'jquery';

const usrs = () => {
  let userz = [];
  console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
  $.ajax({
    // url: 'http://192.168.1.208:30333/nress/users',
    url: 'http://ubt-master.nress.io:30333/nress/users',
    dataType:'json',
    cache: false,
    success: function(data){
      // this.setState({users: data}, function() {
        // console.log(this.state);
        this.userz = data;
      // });
    }.bind(this),
    error: function(xhr, status, err) {
      console.log(err);
    }
  });
  console.log(userz);
  return {users: userz};
}


const getUsers = (users, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return users
    case 'SHOW_DISABLED':
      return users.filter(t => t.disabled)
    case 'SHOW_ACTIVE':
      return users.filter(t => !t.disabled)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  users: getUsers(state.users, state.usersFilter)
})

const mapDispatchToProps = {
  onUserClick: disableUser
}



const aUsersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

class UsersList extends Component {

  getUsers() {
    $.ajax({
      // url: 'http://192.168.1.208:30333/nress/users',
      url: 'http://ubt-master.nress.io:30333/nress/users',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({users: data}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentWillMount(){
    this.getUsers();
    // dispatch(setVisibilityFilter('SHOW_ALL'))
  }


  render() {
    return (
      <div/>
    );
  }

}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
