import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Img from 'react-image'


// import Users from './components/Users'
import Header from './components/Header'
import UsersList from './containers/UsersList'
import { setUsersFilter } from './actions'


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

class App extends Component {

  constructor(){
    super();
    this.state = {
      users:[]
    }
  }

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
    dispatch(setVisibilityFilter('SHOW_ALL'))
  }

  componentDidMount(){
    // this.getUsers();
  }


  render() {
    const myComponent = () => <Img src="img/favicon.ico" />

    return (
      <div className="App">
        <Header />
        <UsersList />
        {myComponent()}
      </div>
    );
  }
}

export default App;
