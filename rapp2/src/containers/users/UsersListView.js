import React, { Component } from 'react';
import { connect } from 'react-redux'
import { disableUser, initUsers } from '../../actions'
import Users from '../../components/users/Users'
import { withRouter } from 'react-router-dom'

//import $ from 'jquery';


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
  onUserClick: disableUser,
  // onButtonClick: initUsers
}



class UsersListView extends Component {

  // constructor() {
  //   super();
  //   this.state = { users: [] }
  // }

  // getUsers() {
  //   $.ajax({
  //     url: 'http://192.168.1.208:30333/nress/users',
  //     // url: 'http://ubt-master.nress.io:30333/nress/users',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       this.setState({users: data}, function() {
  //         console.log(this.state);
  //       });
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.log(err);
  //     }
  //   });
  // }

  // componentWillMount(){
    // this.getUsers();
    // dispatch(setVisibilityFilter('SHOW_ALL'))
  // }

  componentDidMount() {
    // fetch("http://192.168.1.208:30333/nress/users")
    //   .then(res => res.json())
    //   .then(uss => {
    //     console.log('===================> ' + uss);
    //     this.setState({ uss });
    //     dispatch(initUsers(uss));
    //
    //   })

  }

  render() {
    return (
      <div/>
    );
  }

}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Users));
