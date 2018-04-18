import React from "react";
import { withFormik } from "formik";
import Yup from "yup";
import { withRouter, Redirect } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const LoginForm = ( { history,  hideModal, authenticate }) => {

  const styles = {
    block: {
      maxWidth: 250,
    },
    toggle: {
      marginBottom: 16,
    },
    thumbOff: {
      backgroundColor: '#ffcccc',
    },
    trackOff: {
      backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
      backgroundColor: 'red',
    },
    trackSwitched: {
      backgroundColor: '#ff9d9d',
    },
    labelStyle: {
      color: 'red',
    },
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
    <MuiThemeProvider>
      <form onSubmit={handleSubmit}>
        <div className="modal-body">
          <div className="row">
            <div className="col">
              <div className="container-fluid text-left">
                <div className="form-group">
                  <TextField
                        hintText="nress"
                        floatingLabelText="Username"
                        name="username"
                        className=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        errorText={errors.username && touched.username && <div>{errors.username}</div>}
                    />
                </div>
                <div className="form-group">
                  <TextField
                        hintText="nress"
                        floatingLabelText="Password"
                        name="pwd"
                        type="password"
                        className=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.pwd}
                        errorText={errors.pwd && touched.pwd && <div>{errors.pwd}</div>}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="btnContainer">
            <button
              type="reset"
              className="btn btn-secondary"
              icon="fa-close"
              onClick={() => hideModal()}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary "
              icon="fa-close"
              disabled={isSubmitting}
            >
              Log In
            </button>
          </div>
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

    if(values.username == 'nress' && values.pwd == 'nress') {

      authenticate(values.username, values.pwd);


      // localStorage.setItem('loggedIn', true);
      // localStorage.setItem('username', 'Nress');
      // history.push("/");
      // hideModal();
    } else {
      setErrors({ username: 'Invalid Username or Password', pwd: 'Invalid Username or Password' });
    }
    // e.preventDefault();
  };

  const Login = withFormik({
    mapPropsToValues: props => ({
      username: '',
      pwd: ''
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
    displayName: "SolicitationEdit"// helps with React DevTools
  })(innerForm);

  return <Login />;
};

export default withRouter(LoginForm);
