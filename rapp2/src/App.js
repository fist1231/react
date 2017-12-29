import React, { Component } from 'react';
import './App.css';
import Users from './Components/Users'
import $ from 'jquery';
import Img from 'react-image'
import ico from '../public/favicon.ico'

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
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
  }

  componentDidMount(){
    // this.getUsers();
  }


  render() {
    const myComponent = () => <Img src="public/favicon.ico" />

    return (
      <div className="App">
        <h1 className="App-title">Users List</h1>
        <p className="App-intro">
          Users from Mongo DB
        </p>
        <img src={ico} />
        <Users users={this.state.users} />
        {myComponent()}
      </div>
    );
  }
}

export default App;
