import React, { Component } from 'react';
import './App.css';
//import $ from 'jquery';
import Img from 'react-image'
import MainNav from './components/MainNav'
import Main from './components/Main'

// import Users from './components/Users'
import Header from './components/header'
import Footer from './components/footer'
import UsersList from './containers/users/UsersListView'
import UsersTable from './containers/users/UsersTableView'
import ModalRoot from './components/modals/ModalRoot'
import Home from './components/Home'
import NoMatch from './NoMatch';

import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

const usersState = (state = {users:[]}, action) => {

}

function addUser(state, action) {
    let newArray = array.slice();
    newArray.splice(action.index, 0, action.item);
    return newArray;
}

function deleteUser(state, action) {
    let newArray = array.slice();
    newArray.splice(action.index, 1);
    return newArray;
}

class AppPub extends Component {

  componentDidMount() {
    const { dispatch, loggedIn } = this.props
  }


  render() {
    const { dispatch, loggedIn } = this.props
    const showDrwr = loggedIn?true:false;
    console.log('apppub------------> loggedIn? ' + loggedIn);
    return (
  <div>
    {console.log('~~~~~~~~~~~~ ### in da AppPub ### ~~~~~~~~~~~~')}
    
      <Header showDrawer={showDrwr} />
      { loggedIn ?
        (
          <div>
            <MainNav />
            <Main />
          </div>
        ) : (
          <Home />
        )
      }
    <Footer />
    <ModalRoot />
  </div>
);
}
}

const mapStateToProps = state => {
  const { loggedIn } = state
  return {
    loggedIn
  }
}


export default withRouter(connect(mapStateToProps)(AppPub))
