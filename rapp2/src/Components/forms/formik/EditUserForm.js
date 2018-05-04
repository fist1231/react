import React from "react";
import { withFormik } from "formik";
import Yup from "yup";
import moment from "moment";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";
import DatePicker from "material-ui/DatePicker";
import AutoCompleteField from "../html/AutoCompleteField";
import AutoComplete from "material-ui/AutoComplete";
import {
  announcementTypeItems,
  containerTypeItems,
  omnibusAutocomplete
} from "./FormHelper";
import SelectField from "material-ui/SelectField";
import { DateField } from "../../../components/forms/html/DateField";

const muiTheme = getMuiTheme({
  textField: {
    textColor: "#000",
    hintColor: "#736d6d",
    floatingLabelColor: "#6d6d6d",
    // disabledTextColor: palette.disabledColor,
    errorColor: "#f44336",
    focusColor: "#2d5a96",
    // backgroundColor: pink300,
    borderColor: "#6d6d6d"
  }
});

const EditUserForm = ({user, filter, updateUser}) => {
  const styles = {
    floatingLabelStyle: {
      fontSize: "1em",
      fontWeight: "400"
    },
    block: {
      maxWidth: 250
    },
    toggle: {
      paddingTop: 30
    },
    thumbOff: {
      backgroundColor: "#ffcccc"
    },
    trackOff: {
      backgroundColor: "#ff9d9d"
    },
    thumbSwitched: {
      backgroundColor: "red"
    },
    trackSwitched: {
      backgroundColor: "#ff9d9d"
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
      isSubmitting
    } = props;

    const _handleToggle = (event, isInputChecked) => {
      // console.log('~~~~~~~~~~~~~ selectChoice='+isInputChecked);
      setFieldValue("pubApproval", isInputChecked ? 1 : 0);
    };

    const _handleAutoUpdateChange = (searchText, dataSource, params, field) => {
      // console.log('~~~~~~~~~~~~~ _handleAutoUpdateChange searchText='+searchText);
      // console.log('~~~~~~~~~~~~~ _handleAutoUpdateChange dataSource='+dataSource);
      // console.log('~~~~~~~~~~~~~ _handleAutoUpdateChange params='+JSON.stringify(params));
      // console.log('~~~~~~~~~~~~~ _handleAutoUpdateChange field='+field);
      setFieldValue(field, searchText);
    };

    const _handleATypeChange = (event, index, value) => {
      setFieldValue("announcementType", value);
    };

    const _handleCTypeChange = (event, index, value) => {
      setFieldValue("containerType", value);
    };

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered dataTable">
            <thead>
              <tr>
                <th scope="col" width="20%">Label</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="rowLabel">Full name:</td>
                <td>{user.SALUTATION} {user.FIRST_NAME} {user.MIDDLE_INITIAL} {user.LAST_NAME} {user.SUFFIX}</td>
              </tr>
              <tr>
                <td className="rowLabel">First Name: *</td>
                <td>
                  <TextField
                    hintText="First Name"
                    name="firstName"
                    className=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    errorText={
                      errors.firstName &&
                      touched.firstName && <div>{errors.firstName}</div>
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="rowLabel">Last name: *</td>
                <td>
                  <TextField
                    hintText="Last Name"
                    name="lastName"
                    className=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    errorText={
                      errors.lastName &&
                      touched.lastName && <div>{errors.lastName}</div>
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="rowLabel">Username: *</td>
                <td>
                  <TextField
                    hintText="Username"
                    name="username"
                    className=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    errorText={
                      errors.username &&
                      touched.username && <div>{errors.username}</div>
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="rowLabel">ID:</td>
                <td>{user._id}</td>
              </tr>
              <tr>
                <td className="rowLabel">User ID:</td>
                <td>{user.NSPIRES_USER_ID}</td>
              </tr>
              <tr>
                <td className="rowLabel">Created by:</td>
                <td>{user.CREATION_PATH}</td>
              </tr>
              <tr>
                <td className="rowLabel">Activated on:</td>
                <td>{user.ACTIVATIONTIME}</td>
              </tr>
              <tr>
                <td className="rowLabel">Challenge question:</td>
                <td>{user.CHALLENGE_QUESTION}</td>
              </tr>
              <tr>
                <td className="rowLabel">Sysefus id:</td>
                <td>{user.SYSEFUS_ID}</td>
              </tr>
              <tr>
                <td className="rowLabel">Demographics data id:</td>
                <td>{user.DEM_DATA_ID}</td>
              </tr>
            </tbody>
          </table>

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <button
                  className="btn btn-primary w-100"
                  disabled={isSubmitting}
                ><i className="fa fa-floppy-o" aria-hidden="true" />
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </MuiThemeProvider>
    );
  };

  const doSubmit = (values, hideModal) => {
    console.log(
      "...........submitted user with values: " +
        JSON.stringify(values, null, 2)
    );
    console.log(
      "+++++++ doSubmit EditUserForm filter = " + JSON.stringify(filter)
    );
    values.year = parseInt(moment(`${values.year}-01.01`).format("YYYY"));
    console.log(
      "...........updated user values: " + JSON.stringify(values, null, 2)
    );
    updateUser(values, filter);
    // e.preventDefault();
  };

  const EditUser = withFormik({
    mapPropsToValues: props => ({
      _id: user._id,
      id: user.NSPIRES_USER_ID,
      firstName: user.FIRST_NAME,
      lastName: user.LAST_NAME,
      username: user.USERNAME,
      registrationlDate: user.REGISTRATION_DATE
        ? user.REGISTRATION_DATE
        : undefined
    }),
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First Name is required!"),
      lastName: Yup.string().required("Last Name is required!"),
      username: Yup.string().required("Username is required!")
    }),
    handleSubmit: (values, { setSubmitting }) => {
      // console.log('^^^^^^^^^^^dispatch='+dispatch);

      doSubmit(values);
      setSubmitting(false);
    },
    displayName: "UserEdit" // helps with React DevTools
  })(innerForm);

  return <EditUser />;
};

export default EditUserForm;
