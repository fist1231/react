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
import NoMatch from './NoMatch';

import { Switch, Route } from 'react-router-dom'

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

const App = () => (
  <div>
    {console.log('~~~~~~~~~~~~ in da App ~~~~~~~~~~~~')}
    <div className="pageWrapper">
      <Header />
      <MainNav />
      <Main />
    </div>
    <Footer />
    <ModalRoot />
  </div>
)

export default App;
