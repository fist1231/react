import React, { Component } from 'react';
import { Route, Redirect, withRouter } from "react-router-dom";
// import PrivateRoute, { fakeAuth } from './PrivateRoute';
import { connect } from 'react-redux';
import { setAuthOn, setAuthOff } from './actions/authActions';
import App from './App';


export const fakeAuth = () => {
  // isAuthenticated: false,
  // authenticate(cb) {
  //   this.isAuthenticated = true;
  //   setTimeout(cb, 100); // fake async
  // },
  // signout(cb) {
  //   this.isAuthenticated = false;
  //   setTimeout(cb, 100);
  // }
};

class Login extends Component {

  componentDidMount() {
    const { dispatch, auth } = this.props
  }


  // state = {
  //   redirectToReferrer: false
  // };

  login = () => {
    const { dispatch, auth, history } = this.props
    dispatch(setAuthOn());
    history.push("/");
    // fakeAuth.authenticate(() => {
    //    this.setState({ redirectToReferrer: true });
    //    dispatch(setAuthOn());
    //    history.push("/");
    //   // return <Redirect to={{ pathname: "/AppPrivate" }} />
    // });
  };


  logout = () => {
    const { dispatch, auth, history } = this.props
    dispatch(setAuthOff());
    history.push("/");
    // const { dispatch, loggedIn, history } = this.props
    // fakeAuth.authenticate(() => {
    //    this.setState({ redirectToReferrer: true });
    //    dispatch(setAuthOn());
    //    history.push("/");
    //   // return <Redirect to={{ pathname: "/AppPrivate" }} />
    // });
  };


  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    // const { redirectToReferrer } = this.state;
    const { dispatch, auth } = this.props

    console.log('_________login auth? ' + JSON.stringify(auth));
    // console.log('!!!!!!!!!!!!! loggedIn = ' + loggedIn?loggedIn:'undeffin');

{/*
    if (redirectToReferrer) {

      <Route path="/" render={({location}) => (


    loggedIn ? (
      <App />
    ) : (

        <AppPub />
    )
)}/>


      return <Redirect to={from} />;
    }
*/}

    return (
      <div>
        {!auth.loggedIn ? (
          <div>
            {/* <p>You must log in to view the page at {from.pathname}</p> */}
            <button onClick={this.login}>Log in</button>
        </div>
        ) : (
          <div>
            <p>Welcome!</p>
            <button onClick={this.logout}>Logot</button>
        </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state
  return {
    auth
  }
}

export default withRouter(connect(mapStateToProps)(Login))
