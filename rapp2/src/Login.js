import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import PrivateRoute, { fakeAuth } from './PrivateRoute'
import SecureHome from './components/SecureHome';

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
       this.setState({ redirectToReferrer: true });
      // return <Redirect to={{ pathname: "/AppPrivate" }} />
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/SecureHome" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Login;
