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
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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


const EditSolicitationForm = ({
  solicitation,
  hideModal,
  updateSolicitation,
  filter
}) => {
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

    // const _handleYearChange = (event, value) => {
    //   // console.log('~~~~~~~~~~~~~ _handleYearChange='+value);
    //   setFieldValue('year', value);
    // };
    //
    // const _handleDateChange = (event, value, field) => {
    //   // console.log('~~~~~~~~~~~~~ _handleDateChange='+value);
    //   // console.log('~~~~~~~~~~~~~ _handleDateChange field='+field);
    //   setFieldValue(field, value);
    // };

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

    const _handleWithdrawalReasonChange = (value) => {
      setFieldValue("withdrawalReason", value);
    }


    var tb_modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']                                         // remove formatting button
      ],
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="container text-left modalForm">
              <div className="row">
                <div className="col-sm-3">
                  <div className="inputWrapper">
                    <TextField
                      hintText="Number"
                      floatingLabelText="Solicitation Number *"
                      name="solNumber"
                      className=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      floatingLabelStyle={styles.floatingLabelStyle}
                      value={values.solNumber}
                      errorText={
                        errors.solNumber &&
                        touched.solNumber && <div>{errors.solNumber}</div>
                      }
                    />
                  </div>
                  <div className="inputWrapper">
                    <Toggle
                      label="Publication Approval"
                      labelPosition="right"
                      name="pubApproval"
                      // defaultToggled={values.pubApproval===1}
                      // toggled={values.pubApproval===1}
                      toggled={values.pubApproval == 1 ? true : false}
                      onToggle={_handleToggle}
                      className="toggleUi"
                      onChange={handleChange}
                      // onChange={console.log('ello r' + event.target.value)}
                      // onChange={(event) => {console.log('ello r: '+ event.target.value); this.setState(name: event.target.value);}}
                      onBlur={handleBlur}
                      style={styles.toggle}
                      errorText={
                        errors.pubApproval &&
                        touched.pubApproval && <div>{errors.pubApproval}</div>
                      }
                      // valueLink={values.pubApproval}
                    />
                  </div>
                  <div className="inputWrapper">
                    <DateField
                      hintText="Fiscal Year"
                      formatDate={() =>
                        moment(`${values.year}-01.01`).format("YYYY")
                      }
                      name="year"
                      floatingLabelText="Fiscal Year *"
                      className=""
                      onBlur={handleBlur}
                      floatingLabelStyle={styles.floatingLabelStyle}
                      value={
                        values.year
                          ? moment(`${values.year}-01.01`).toDate()
                          : undefined
                      }
                      errorText={
                        errors.year && touched.year && <div>{errors.year}</div>
                      }
                      onClearClick={e => setFieldValue("year", undefined)}
                      setFieldValue={setFieldValue}
                      autoOk={false}
                      openToYearSelection={true}
                      container="inline"
                    />

                    {/*
                  <DatePicker
                    hintText="Fiscal Year" openToYearSelection={true} container="inline"
                    formatDate={() => moment(`${values.year}-01.01`).format('YYYY')}
                    autoOk={false}
                    floatingLabelText="Fiscal Year"
                    name="year"
                    className=""
                    onChange={_handleYearChange}
                    onBlur={handleBlur}
                    // value={values.year}
                    value={values.year?moment(`${values.year}-01.01`).toDate():undefined}
                    errorText={errors.year && touched.year && <div>{errors.year}</div>}
                  />
 */}
                  </div>
                  <div className="inputWrapper">
                    <AutoComplete
                      dataSource={omnibusAutocomplete}
                      filter={AutoComplete.caseInsensitiveFilter}
                      hintText="Omnibus"
                      floatingLabelText="Omnibus Number"
                      name="omnibus"
                      className=""
                      onChange={handleChange}
                      onUpdateInput={(searchText, dataSource, params) =>
                        _handleAutoUpdateChange(
                          searchText,
                          dataSource,
                          params,
                          "omnibus"
                        )
                      }
                      onBlur={handleBlur}
                      floatingLabelStyle={styles.floatingLabelStyle}
                      value={values.omnibus}
                      searchText={values.omnibus}
                      errorText={
                        errors.omnibus &&
                        touched.omnibus && <div>{errors.omnibus}</div>
                      }
                    />
                  </div>
                  <div className="inputWrapper">

                    <TextField
                      hintText="Title"
                      floatingLabelText="Solicitation Title *"
                      name="title"
                      className=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      floatingLabelStyle={styles.floatingLabelStyle}
                      value={values.title}
                      errorText={
                        errors.title &&
                        touched.title && <div>{errors.title}</div>
                      }
                    />

                  </div>
                  <div className="inputWrapper">
                    <DateField
                      hintText="Review Date"
                      formatDate={() =>
                        moment(`${values.reviewDate}`).format("MM/DD/YYYY")
                      }
                      name="reviewDate"
                      floatingLabelText="Review Date"
                      className=""
                      onBlur={handleBlur}
                      floatingLabelStyle={styles.floatingLabelStyle}
                      value={
                        values.reviewDate
                          ? moment(`${values.reviewDate}`).toDate()
                          : undefined
                      }
                      errorText={
                        errors.reviewDate &&
                        touched.reviewDate && <div>{errors.reviewDate}</div>
                      }
                      onClearClick={e => setFieldValue("reviewDate", undefined)}
                      setFieldValue={setFieldValue}
                      container="inline"
                    />

                    {/*
                  <DatePicker
                    hintText="Review Date" container="inline"
                    formatDate={() => moment(`${values.reviewDate}`).format('MM/DD/YYYY')}
                    name="reviewDate"
                    floatingLabelText="Review Date"
                    className=""
                    onChange={(e, val) => _handleDateChange(e, val, "reviewDate")}
                    // onChange={_handleYearChange}
                    onBlur={handleBlur}
                    // value={values.year}
                    value={values.reviewDate?moment(`${values.reviewDate}`).toDate():undefined}
                  />
 */}
                  </div>
                  <div className="inputWrapper">
                    <DateField
                      hintText="Selection Date"
                      formatDate={() =>
                        moment(`${values.selectionDate}`).format("MM/DD/YYYY")
                      }
                      name="selectionDate"
                      floatingLabelText="Selection Date"
                      className=""
                      onChange={(e, val) =>
                        _handleDateChange(e, val, "selectionDate")
                      }
                      onBlur={handleBlur}
                      floatingLabelStyle={styles.floatingLabelStyle}
                      value={
                        values.selectionDate
                          ? moment(`${values.selectionDate}`).toDate()
                          : undefined
                      }
                      errorText={
                        errors.selectionDate &&
                        touched.selectionDate && (
                          <div>{errors.selectionDate}</div>
                        )
                      }
                      onClearClick={e =>
                        setFieldValue("selectionDate", undefined)
                      }
                      setFieldValue={setFieldValue}
                      container="inline"
                    />

                    {/*
                  <DatePicker
                    hintText="Selection Date" container="inline"
                    formatDate={() => moment(`${values.selectionDate}`).format('MM/DD/YYYY')}
                    name="selectionDate"
                    floatingLabelText="Selection Date"
                    className=""
                    onChange={(e, val) => _handleDateChange(e, val, "selectionDate")}
                    // onChange={_handleYearChange}
                    onBlur={handleBlur}
                    // value={values.year}
                    value={values.selectionDate?moment(`${values.selectionDate}`).toDate():undefined}
                    errorText={errors.selectionDate && touched.selectionDate && <div>{errors.selectionDate}</div>}
                  />
 */}
                  </div>
                  <div className="inputWrapper">
                    <DateField
                      hintText="Release Date"
                      formatDate={() =>
                        moment(`${values.releaseDate}`).format("MM/DD/YYYY")
                      }
                      name="releaseDate"
                      floatingLabelText="Release Date *"
                      className=""
                      onChange={(e, val) =>
                        _handleDateChange(e, val, "releaseDate")
                      }
                      onBlur={handleBlur}
                      floatingLabelStyle={styles.floatingLabelStyle}
                      value={
                        values.releaseDate
                          ? moment(`${values.releaseDate}`).toDate()
                          : undefined
                      }
                      errorText={
                        errors.releaseDate &&
                        touched.releaseDate && <div>{errors.releaseDate}</div>
                      }
                      onClearClick={e =>
                        setFieldValue("releaseDate", undefined)
                      }
                      setFieldValue={setFieldValue}
                      container="inline"
                    />

                    {/*
                  <DatePicker
                    hintText="Release Date" container="inline"
                    formatDate={() => moment(`${values.releaseDate}`).format('MM/DD/YYYY')}
                    name="releaseDate"
                    floatingLabelText="Release Date"
                    className=""
                    onChange={(e, val) => _handleDateChange(e, val, "releaseDate")}
                    // onChange={_handleYearChange}
                    onBlur={handleBlur}
                    // value={values.year}
                    value={values.releaseDate?moment(`${values.releaseDate}`).toDate():undefined}
                    errorText={errors.releaseDate && touched.releaseDate && <div>{errors.releaseDate}</div>}
                  />
 */}
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="inputWrapper">
                    <DateField
                      hintText="Close Date"
                      formatDate={() =>
                        moment(`${values.closeDate}`).format("MM/DD/YYYY")
                      }
                      name="closeDate"
                      floatingLabelText="Close Date *"
                      className=""
                      onChange={(e, val) =>
                        _handleDateChange(e, val, "closeDate")
                      }
                      onBlur={handleBlur}
                      floatingLabelStyle={styles.floatingLabelStyle}
                      value={
                        values.closeDate
                          ? moment(`${values.closeDate}`).toDate()
                          : undefined
                      }
                      errorText={
                        errors.closeDate &&
                        touched.closeDate && <div>{errors.closeDate}</div>
                      }
                      onClearClick={e => setFieldValue("closeDate", undefined)}
                      setFieldValue={setFieldValue}
                      container="inline"
                    />

                    {/*
                  <DatePicker
                    hintText="Close Date" container="inline"
                    formatDate={() => moment(`${values.closeDate}`).format('MM/DD/YYYY')}
                    name="closeDate"
                    floatingLabelText="Close Date"
                    className=""
                    onChange={(e, val) => _handleDateChange(e, val, "closeDate")}
                    // onChange={_handleYearChange}
                    onBlur={handleBlur}
                    // value={values.year}
                    value={values.closeDate?moment(`${values.closeDate}`).toDate():undefined}
                    errorText={errors.closeDate && touched.closeDate && <div>{errors.closeDate}</div>}
                  />
 */}
                  </div>
                  <div className="inputWrapper">
                    <SelectField
                      value={values.announcementType}
                      onChange={_handleATypeChange}
                      floatingLabelText="Announcement Type *"
                      floatingLabelStyle={{}}
                      errorText={
                        errors.announcementType &&
                        touched.announcementType && (
                          <div>{errors.announcementType}</div>
                        )
                      }
                    >
                      {announcementTypeItems}
                    </SelectField>
                    {/*
                  <input
                    type="text"
                    className="form-control"
                    name="announcementType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.announcementType}
                    size="20"
                  />
                  {errors.announcementType && touched.announcementType && <div>{errors.announcementType}</div>}
*/}
                  </div>
                  <div className="inputWrapper">
                    {/*
                  <TextField
                        hintText="Container Type"
                        floatingLabelText="Container Type"
                        name="containerType"
                        className=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.containerType}
                        errorText={errors.containerType && touched.containerType && <div>{errors.containerType}</div>}
                    />
*/}

                    <SelectField
                      value={values.containerType}
                      onChange={_handleCTypeChange}
                      floatingLabelText="Container Type *"
                      floatingLabelStyle={{}}
                      errorText={
                        errors.containerType &&
                        touched.containerType && (
                          <div>{errors.containerType}</div>
                        )
                      }
                    >
                      {containerTypeItems}
                    </SelectField>
                  </div>
                  <div className="inputWrapper">
                    <TextField
                      hintText="Authorized By"
                      floatingLabelText="Authorized By"
                      name="authorizedBy"
                      className=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.authorizedBy}
                    />
                  </div>
                  <div className="inputWrapper">
                    <DateField
                      hintText="Withdrawal Date"
                      formatDate={() =>
                        moment(`${values.withdrawalDate}`).format("MM/DD/YYYY")
                      }
                      name="withdrawalDate"
                      floatingLabelText="Withdrawal Date"
                      className=""
                      onChange={(e, val) =>
                        _handleDateChange(e, val, "withdrawalDate")
                      }
                      onBlur={handleBlur}
                      value={
                        values.withdrawalDate
                          ? moment(`${values.withdrawalDate}`).toDate()
                          : undefined
                      }
                      errorText={
                        errors.withdrawalDate &&
                        touched.withdrawalDate && (
                          <div>{errors.withdrawalDate}</div>
                        )
                      }
                      onClearClick={e =>
                        setFieldValue("withdrawalDate", undefined)
                      }
                      setFieldValue={setFieldValue}
                      container="inline"
                    />

                    {/*
                  <DatePicker
                    hintText="Withdrawal Date" container="inline"
                    formatDate={() => moment(`${values.withdrawalDate}`).format('MM/DD/YYYY')}
                    name="withdrawalDate"
                    floatingLabelText="Withdrawal Date"
                    className=""
                    onChange={(e, val) => _handleDateChange(e, val, "withdrawalDate")}
                    // onChange={_handleYearChange}
                    onBlur={handleBlur}
                    // value={values.year}
                    value={values.withdrawalDate?moment(`${values.withdrawalDate}`).toDate():undefined}
                    errorText={errors.withdrawalDate && touched.withdrawalDate && <div>{errors.withdrawalDate}</div>}
                  />
 */}
                  </div>
                  <div className="inputWrapper">
                    <TextField
                      hintText="Withdrawn By"
                      floatingLabelText="Withdrawn By"
                      name="withdrawnBy"
                      className=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.withdrawnBy}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="col-md-6 col-form-label">Reason for Withdrawal</label>

                      <ReactQuill
                        name="withdrawalReason"
                        value={values.withdrawalReason}
                        theme="snow"
                        onChange={_handleWithdrawalReasonChange}
                        style={{height: '300px'}}
                        errorText={
                          errors.withdrawalReason &&
                          touched.withdrawalReason && <div>{errors.withdrawalReason}</div>
                        }
                        modules={EditSolicitationForm.modules}
                        // formats={EditSolicitationForm.formats}
                      />

                    {/* <TextField
                      hintText="Reason"
                      floatingLabelText="Withdrawal Reason"
                      name="withdrawalReason"
                      className=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.withdrawalReason}
                    /> */}


                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {" "}
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <button
                    type="reset"
                    className="btn btn-secondary w-100"
                    onClick={() => hideModal()}
                  ><i className="fa fa-ban" aria-hidden="true" />
                    Cancel
                  </button>
                </div>{" "}
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
          </div>
        </form>
      </MuiThemeProvider>
    );
  };

  const doSubmit = (values, hideModal) => {
    console.log(
      "...........submitted modal with values: " +
        JSON.stringify(values, null, 2)
    );
    console.log(
      "+++++++ doSubmit EditSolicitationForm filter = " + JSON.stringify(filter)
    );
    values.year = parseInt(moment(`${values.year}-01.01`).format("YYYY"));
    console.log(
      "...........updated modal values: " + JSON.stringify(values, null, 2)
    );
    updateSolicitation(values, filter);
    hideModal();
    // e.preventDefault();
  };

  const EditSolicitation = withFormik({
    mapPropsToValues: props => ({
      _id: solicitation._id,
      id: solicitation.SOLICITATION_ID,
      solNumber: solicitation.SOLICITATION_NUMBER,
      pubApproval: solicitation.PUBLICATION_APPROVAL,
      year: solicitation.FISCAL_YEAR ? solicitation.FISCAL_YEAR : undefined,
      omnibus: solicitation.OMNIBUS_NUMBER ? solicitation.OMNIBUS_NUMBER : "",
      title: decodeURI(solicitation.TITLE),
      reviewDate: solicitation.REVIEW_DATE
        ? solicitation.REVIEW_DATE
        : undefined,
      selectionDate: solicitation.SELECTION_DATE
        ? solicitation.SELECTION_DATE
        : undefined,
      releaseDate: solicitation.RELEASE_DATE
        ? solicitation.RELEASE_DATE
        : undefined,
      closeDate: solicitation.CLOSE_DATE ? solicitation.CLOSE_DATE : undefined,
      announcementType: solicitation.ANNOUNCEMENT_TYPE,
      containerType: solicitation.CONTAINER_TYPE,
      authorizedBy: solicitation.AUTHORIZED_BY
        ? solicitation.AUTHORIZED_BY
        : "",
      withdrawalReason: solicitation.WITHDRAWAL_REASON
        ? decodeURI(solicitation.WITHDRAWAL_REASON)
        : "",
      withdrawalDate: solicitation.WITHDRAWAL_DATE
        ? solicitation.WITHDRAWAL_DATE
        : undefined,
      withdrawnBy: solicitation.WITHDRAWN_BY ? solicitation.WITHDRAWN_BY : ""
    }),
    validationSchema: Yup.object().shape({
      solNumber: Yup.string().required("Solicitation Number is required!"),
      pubApproval: Yup.number()
        .required("Publication Approval is required!")
        .positive("Publication Approval is wrong!")
        .integer("Publication Approval is bad!"),
      year: Yup.string().required("Fiscal Year is required!"),
      title: Yup.string().required("Title is required!"),
      closeDate: Yup.string().required("Close Date is required!"),
      releaseDate: Yup.string().required("Release Date is required!"),
      announcementType: Yup.string().required("Announcement Type is required!"),
      containerType: Yup.string().required("Container Type is required!")
    }),
    handleSubmit: (values, { setSubmitting }) => {
      // console.log('^^^^^^^^^^^dispatch='+dispatch);

      doSubmit(values, hideModal);
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

  return <EditSolicitation />;
};

EditSolicitationForm.modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
  ]

}

EditSolicitationForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "direction"
];

export default EditSolicitationForm;
