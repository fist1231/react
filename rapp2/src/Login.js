import React, { Component } from "react";
import { Route, Redirect, withRouter, Link } from "react-router-dom";
// import PrivateRoute, { fakeAuth } from './PrivateRoute';
import { connect } from "react-redux";
import { setAuthOn, setAuthOff } from "./actions/authActions";
import App from "./App";

import LoginModal from "./containers/modal/LoginModal";

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
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      stepNum: "1",
      uname: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true, stepNum: "1" });
    console.log("000000000 openModal = " + this.state.modalIsOpen);
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false, stepNum: "1", uname: "" });
  }

  componentDidMount() {
    const { dispatch, auth } = this.props;
  }

  // state = {
  //   redirectToReferrer: false
  // };

  login = () => {
    const { dispatch, auth, history } = this.props;
    const authen = { loggedIn: "true", username: "Local" };
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("username", "Local");

    dispatch(setAuthOn());
    history.push("/");

    // this.openModal;

    // fakeAuth.authenticate(() => {
    //    this.setState({ redirectToReferrer: true });
    //    dispatch(setAuthOn());
    //    history.push("/");
    //   // return <Redirect to={{ pathname: "/AppPrivate" }} />
    // });
  };


  authenticate = (username, pwd) => {
    console.log("######### authenticate: " + username + "; " + pwd);

    const { dispatch, auth, history } = this.props;
    const authen = { loggedIn: "true", username: username };
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("username", username);

    dispatch(setAuthOn());
    history.push("/");
    this.closeModal;

    // fakeAuth.authenticate(() => {
    //    this.setState({ redirectToReferrer: true });
    //    dispatch(setAuthOn());
    //    history.push("/");
    //   // return <Redirect to={{ pathname: "/AppPrivate" }} />
    // });
  };

  nextStep = (username) => {
    console.log("######### nextStep: " + username );
    const { dispatch, auth, history } = this.props;
    this.setState({ modalIsOpen: true, stepNum: "2", uname: username });
  };

  previousStep = (username) => {
    console.log("######### previousStep: " + username );
    const { dispatch, auth, history } = this.props;
    this.setState({ modalIsOpen: true, stepNum: "1", uname: username });
  };

  logout = () => {
    const { dispatch, auth, history } = this.props;
    const authen = { loggedIn: "false", username: "" };
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("username", "");
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
    const { dispatch, auth } = this.props;

    // console.log('_________login auth? ' + JSON.stringify(auth));
    // console.log('!!!!!!!!!!!!! loggedIn = ' + loggedIn?loggedIn:'undeffin');

    {
      /*
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
*/
    }

    return (
      <div>
        {!(localStorage.getItem("loggedIn") === "true") ? (
          <div className="row loginContainer float-right mt-3">
            {/* <p>You must log in to view the page at {from.pathname}</p> */}
            <ul className="loginLinks">
              <li>
                <a onClick={this.openModal}>Log in</a>
              </li>
              <li>Sign up</li>
              <li>
                <div className="expandSearch">
<form>
                  <input
                    type="search"
                    placeholder="Search"
                    className="searchPub"
                  />
                  </form>
                </div>
              </li>
            </ul>

            {/*  <button className="btn btn-secondary btn-lg" onClick={this.openModal}>Log in</button>*/}
          </div>
        ) : (
          <div className="row loginContainer float-right">
            <ul className="loginLinks">
              <li>
                <Link to="/" onClick={this.logout}>
                  Logout
                </Link>
              </li>
              <li>
                <div className="expandSearch">
<form>
                  <input
                    type="search"
                    placeholder="Search"
                    className="searchPub"
                  />
                  </form>
                </div>
              </li>
            </ul>
          </div>
        )}

        <LoginModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          closeModal={this.closeModal}
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          authenticate={this.authenticate}
          stepNum={this.state.stepNum}
          uName={this.state.uname}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  return {
    auth
  };
};

export default withRouter(connect(mapStateToProps)(Login));
