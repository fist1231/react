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

const LoginForm = ({ history, hideModal, authenticate, stepNum, previousStep, nextStep, uName }) => {
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
          <div className="modal-body loginModalBody">
            <div className="container text-left">
              <h2><i className="fa fa-user-circle" /> Member Login</h2>

    
              <div className="loginInputContainer">
                {/*console.log('%%%%%%%%%%%%%%% stepNum x = ' + stepNum)*/}
                {(stepNum === "1") ? (
                  <div className="loginInputBox">
                  <div className="userNameDisplay"> 
                    </div>
                    <TextField
                      hintText=""
                      floatingLabelText="Username"
                      name="username"
                      className="floatInput"
                      onChange={handleChange}
                      floatingLabelStyle={styles.floatingLabelStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                      onBlur={handleBlur}
                      value={values.username}
                      ref={input => input && input.focus()}
                      errorText={
                        errors.username &&
                        touched.username && <div>{errors.username}</div>
                      }
                    />
                  <p className="text-right">
                  <span className="staticLink ">
                    <a href="#">Forgot your username?</a>
                  </span>
                </p>
                  </div>

                  ) : (
                  <div className="loginInputBox">
                   <div className="userNameDisplay"> 
                    

                    <a
                      href="#"
                      onClick={() => previousStep()}
                    >
                 <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
{uName}
                    </a>
                   
                    </div>
             
                    <TextField
                      hintText=""
                      floatingLabelText="Enter your password"
                      name="pwd"
                      type="password"
                      className="floatInput"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      floatingLabelStyle={styles.floatingLabelStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                      value={values.pwd}
                      ref={input => input && input.focus()}
                      errorText={
                        errors.pwd && touched.pwd && <div>{errors.pwd}</div>
                      }
                    />
                     <p className="text-right">
                  <span className="staticLink ">
                    Forgot your password?
                  </span>
                </p>
                  </div>
                )}
              </div>

          
                <button
                  className="btn btn-primary btn-block mb-2"
                  icon="fa-close"
                  disabled={isSubmitting}
                >
                  Next
                </button>
                <button
                  type="reset"
                  className="btn btn-secondary btn-block"
                  icon="fa-close"
                  onClick={() => hideModal()}
                >
                  Cancel
                </button>
            
            </div>
          </div>

          <div className="modal-footer loginPopFooter text-center">
            <p className="mt-1 w-100">
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


    // if (values.username === "nress" && stepNum === "1") {
    if (stepNum === "1") {
      //authenticate(values.username, values.pwd);
      nextStep(values.username);

      // localStorage.setItem('loggedIn', true);
      // localStorage.setItem('username', 'Nress');
      // history.push("/");
      // hideModal();
    } else if (values.username === "nress" && values.pwd === "nress" && stepNum === "2") {
      authenticate(uName, values.pwd);
      // nextStep(values.username);
      // console.log('%%%%%%%%%%%%%%% stepNum after = ' + stepNum);

      // localStorage.setItem('loggedIn', true);
      // localStorage.setItem('username', 'Nress');
      // history.push("/");
      // hideModal();
    } else {
      setErrors({
        username: "Invalid Username or Password step",
        pwd: "Invalid Username or Password"
      });
    }
    // e.preventDefault();

  };
  
  let Login;

  if (stepNum === "1") {
    Login = withFormik({
      mapPropsToValues: props => ({
        username: "",
        pwd: ""
      }),
      validationSchema: Yup.object().shape({
        username: Yup.string().required("Username is required!")
//        pwd: Yup.string().required("Password is required!")
      }),
      handleSubmit: (values, { setSubmitting, setErrors }) => {
        if (values.usernamr === "" && stepNum === "2") {
          values.username = uName;
        }
        doSubmit(values, hideModal, setErrors, stepNum);
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
      displayName: "LoginFormUsername" // helps with React DevTools
    })(innerForm);

  } else {
    Login = withFormik({
      mapPropsToValues: props => ({
        username: "",
        pwd: ""
      }),
      validationSchema: Yup.object().shape({
  //      username: Yup.string().required("Username is required!"),
        pwd: Yup.string().required("Password is required!")
      }),
      handleSubmit: (values, { setSubmitting, setErrors }) => {
        if (values.username === "" && stepNum === "2") {
          values.username = uName;
        }
        doSubmit(values, hideModal, setErrors, stepNum);
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
      displayName: "LoginFormUsername" // helps with React DevTools
    })(innerForm);

  }
  return <Login />;
};

export default withRouter(LoginForm);
