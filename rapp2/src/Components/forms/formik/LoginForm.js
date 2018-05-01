import React from "react";
import { withFormik } from "formik";
import Yup from "yup";
import { withRouter, Redirect } from "react-router-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import TextField from "material-ui/TextField";
import {
  brown500,
  cyan500,
  lime500,
  teal600,
  pink300
} from "material-ui/styles/colors";

const muiTheme = getMuiTheme({
  textField: {
    textColor: "#000",
    hintColor: "#736d6d",
    floatingLabelColor: "#6d6d6d",
    // disabledTextColor: palette.disabledColor,
    errorColor: "#f44336",
    focusColor: "#2d5a96",
    // backgroundColor: pink300,
    borderColor: "#6d6d6d",
    fontSize: "1em",
  }
});

const LoginForm = ({ history, hideModal, authenticate }) => {
  const styles = {
    floatingLabelStyle: {
      fontSize: "1.06em",
      fontWeight: "400"
    },
    errorStyle: {
      color: "#f4433"
    },
    errorText: {
      color: "#f4433"
    }
  };

  const innerForm = (props, hdMod) => {
    const {
      values,
      errors,
      touched,
      setFieldValue,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
      // history
      setErrors
    } = props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="container text-left">
              <h2>Member Login</h2>
              <div className="container loginInputContainer">
                <div className="inputWrapper">
                  <TextField
                    hintText="nress"
                    floatingLabelText="Username"
                    name="username"
                    className="floatInput"
                    onChange={handleChange}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    onBlur={handleBlur}
                    value={values.username}
                    errorText={
                      errors.username &&
                      touched.username && <div>{errors.username}</div>
                    }
                  />
                </div>
                <div className="inputWrapper">
                  <TextField
                    hintText="nress"
                    floatingLabelText="Password"
                    name="pwd"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    value={values.pwd}
                    errorText={
                      errors.pwd && touched.pwd && <div>{errors.pwd}</div>
                    }
                  />
                </div>
              </div>

              <div className="container">
                <button
                  className="btn btn-primary btn-block mb-3"
                  icon="fa-close"
                  disabled={isSubmitting}
                >
                  Log In
                </button>
                <button
                  type="reset"
                  className="btn btn-secondary btn-block"
                  icon="fa-close"
                  onClick={() => hideModal()}
                >
                  Cancel
                </button>
                <p className="small mt-1 text-right">
                  <span className="staticLink">
                    forgot your username/password?
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="modal-footer loginPopFooter text-center">
            <p className="small mt-1 w-100">
              <span className="staticLink">Create a New Account.</span>
            </p>
          </div>
        </form>
      </MuiThemeProvider>
    );
  };

  const doSubmit = (values, hideModal, setErrors) => {
    // const { history } = props
    console.log(
      "...........submitted modal with values: " +
        JSON.stringify(values, null, 2)
    );

    if (values.username == "nress" && values.pwd == "nress") {
      authenticate(values.username, values.pwd);

      // localStorage.setItem('loggedIn', true);
      // localStorage.setItem('username', 'Nress');
      // history.push("/");
      // hideModal();
    } else {
      setErrors({
        username: "Invalid Username or Password",
        pwd: "Invalid Username or Password"
      });
    }
    // e.preventDefault();
  };

  const Login = withFormik({
    mapPropsToValues: props => ({
      username: "",
      pwd: ""
    }),
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required!"),
      pwd: Yup.string().required("Password is required!")
    }),
    handleSubmit: (values, { setSubmitting, setErrors }) => {
      doSubmit(values, hideModal, setErrors);
      setSubmitting(false);
      // {
      //   setTimeout(() => {
      //     alert(JSON.stringify(values, null, 2));
      //     setSubmitting(false);
      //   }, 1000);
    },
    // handleChange: (values, { setSubmitting }) => {
    //   console.log('^^^^^^^^^^^values='+values);
    // },
    displayName: "SolicitationEdit" // helps with React DevTools
  })(innerForm);

  return <Login />;
};

export default withRouter(LoginForm);
