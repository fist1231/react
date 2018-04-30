import React from "react";
import { withFormik } from "formik";
import Yup from "yup";
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import AutoCompleteField from '../html/AutoCompleteField';
import AutoComplete from 'material-ui/AutoComplete';
import {IconButton} from "material-ui";
import ActionDateRange from 'material-ui/svg-icons/action/date-range';
import { announcementTypeItems, containerTypeItems, omnibusAutocomplete } from './FormHelper'
import SelectField from 'material-ui/SelectField';
import { DateField } from '../../../components/forms/html/DateField'

const AddSolicitationForm = ({ hideModal, addSolicitation, filter }) => {

  const styles = {
    block: {
      maxWidth: 250,
    },
    toggle: {
      marginBottom: 16,
      position: 'relative',      
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
      isSubmitting
    } = props;

    const _handleToggle = (event, isInputChecked) => {
      // console.log('~~~~~~~~~~~~~ selectChoice='+isInputChecked);
      setFieldValue('pubApproval', isInputChecked?1:0);
    };

    // const _handleYearChange = (event, value) => {
    //   // console.log('~~~~~~~~~~~~~ _handleYearChange='+value);
    //   setFieldValue('year', value);
    // };

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
      setFieldValue('announcementType', value);
    };

    const _handleCTypeChange = (event, index, value) => {
      setFieldValue('containerType', value);
    };


    return (
    <MuiThemeProvider>
      <form onSubmit={handleSubmit}>
        <div className="modal-body">
          <div className="row">

            {/* ########################Column #1 ########################### */}
            <div className="col">
              <div className="container-fluid text-left">

                <div className="form-group">
                  <TextField
                        hintText="Title"
                        floatingLabelText="Solicitation Title *"
                        name="title"
                        className=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        errorText={errors.title && touched.title && <div>{errors.title}</div>}
                    />
                </div>

                <div className="form-group">
                  <TextField
                        hintText="Number"
                        floatingLabelText="Solicitation Number *"
                        name="solNumber"
                        className=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.solNumber}
                        errorText={errors.solNumber && touched.solNumber && <div>{errors.solNumber}</div>}
                    />
                </div>

                <div className="form-group">
                  <SelectField
                    value={values.announcementType}
                    onChange={_handleATypeChange}
                    floatingLabelText="Announcement Type *"
                    floatingLabelStyle={{}}
                    errorText={errors.announcementType && touched.announcementType && <div>{errors.announcementType}</div>}
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

                <div className="form-group">
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
                      errorText={errors.containerType && touched.containerType && <div>{errors.containerType}</div>}
                    >
                      {containerTypeItems}
                    </SelectField>
                </div>

                <div className="form-group">
                  <DateField
                    hintText="Fiscal Year"
                    formatDate={() => moment(`${values.year}-01.01`).format('YYYY')}
                    name="year"
                    floatingLabelText="Fiscal Year *"
                    className=""
                    onBlur={handleBlur}
                    value={values.year?moment(`${values.year}-01.01`).toDate():undefined}
                    errorText={errors.year && touched.year && <div>{errors.year}</div>}
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
                    name="year"
                    floatingLabelText="Fiscal Year *"
                    className=""
                    onChange={_handleYearChange}
                    onBlur={handleBlur}
                    // value={values.year}
                    value={values.year?moment(`${values.year}-01.01`).toDate():undefined}
                    errorText={errors.year && touched.year && <div>{errors.year}</div>}
                    autoOk={false}
                  />
 */}
                </div>

              </div>
            </div>

            {/* ########################Column #2 ########################### */}

            <div className="col">
              <div className="container-fluid text-left">

                <div className="form-group">
                  <DateField
                    hintText="Release Date" container="inline"
                    formatDate={() => moment(`${values.releaseDate}`).format('MM/DD/YYYY')}
                    name="releaseDate"
                    floatingLabelText="Release Date *"
                    className=""
                    onChange={(e, val) => _handleDateChange(e, val, "releaseDate")}
                    onBlur={handleBlur}
                    value={values.releaseDate?moment(`${values.releaseDate}`).toDate():undefined}
                    errorText={errors.releaseDate && touched.releaseDate && <div>{errors.releaseDate}</div>}
                    onClearClick={e => setFieldValue("releaseDate", undefined)}
                    setFieldValue={setFieldValue}
                  />

  {/*
                  <DatePicker
                    hintText="Release Date" container="inline"
                    formatDate={() => moment(`${values.releaseDate}`).format('MM/DD/YYYY')}
                    name="releaseDate"
                    floatingLabelText="Release Date *"
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

                <div className="form-group">
                  <DateField
                    hintText="Close Date *" container="inline"
                    formatDate={() => moment(`${values.closeDate}`).format('MM/DD/YYYY')}
                    name="closeDate"
                    floatingLabelText="Close Date *"
                    className=""
                    onChange={(e, val) => _handleDateChange(e, val, "closeDate")}
                    onBlur={handleBlur}
                    value={values.closeDate?moment(`${values.closeDate}`).toDate():undefined}
                    errorText={errors.closeDate && touched.closeDate && <div>{errors.closeDate}</div>}
                    onClearClick={e => setFieldValue("closeDate", undefined)}
                    setFieldValue={setFieldValue}
                  />

{/*
                  <DatePicker
                    hintText="Close Date *" container="inline"
                    formatDate={() => moment(`${values.closeDate}`).format('MM/DD/YYYY')}
                    name="closeDate"
                    floatingLabelText="Close Date *"
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

                <div className="form-group">
                  <DateField
                    hintText="Review Date"
                    formatDate={() => moment(`${values.reviewDate}`).format('MM/DD/YYYY')}
                    name="reviewDate"
                    floatingLabelText="Review Date"
                    className=""
                    onBlur={handleBlur}
                    value={values.reviewDate?moment(`${values.reviewDate}`).toDate():undefined}
                    errorText={errors.reviewDate && touched.reviewDate && <div>{errors.reviewDate}</div>}
                    onClearClick={e => setFieldValue("reviewDate", undefined)}
                    setFieldValue={setFieldValue}
                  />
  {/*
                    <div className="row mt-3">
                      <div className="col-md-9">
                        <DatePicker
                          hintText="Review Date"
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
                      </div>
                      <div className="col-md-1">
                        <i className="fa fa-times" onClick={e => setFieldValue('reviewDate', undefined)} style={{position:'absolute', bottom:'12px'}} />
                      </div>
                  </div>
  */}
                </div>

                <div className="form-group">
                  <DateField
                    hintText="Selection Date" container="inline"
                    formatDate={() => moment(`${values.selectionDate}`).format('MM/DD/YYYY')}
                    name="selectionDate"
                    floatingLabelText="Selection Date"
                    className=""
                    onChange={(e, val) => _handleDateChange(e, val, "selectionDate")}
                    onBlur={handleBlur}
                    value={values.selectionDate?moment(`${values.selectionDate}`).toDate():undefined}
                    errorText={errors.selectionDate && touched.selectionDate && <div>{errors.selectionDate}</div>}
                    onClearClick={e => setFieldValue("selectionDate", undefined)}
                    setFieldValue={setFieldValue}
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

                <div className="form-group">
                  <Toggle
                    label="Publication Approval"
                    labelPosition="right"
                    name="pubApproval"
                    // defaultToggled={values.pubApproval===1}
                    // toggled={values.pubApproval===1}
                    toggled={(values.pubApproval==1)?true:false}
                    onToggle={_handleToggle}
                    className=""
                    onChange={handleChange}
                    // onChange={console.log('ello r' + event.target.value)}
                    // onChange={(event) => {console.log('ello r: '+ event.target.value); this.setState(name: event.target.value);}}
                    onBlur={handleBlur}
                    style={styles.toggle}
                    errorText={errors.pubApproval && touched.pubApproval && <div>{errors.pubApproval}</div>}
                    // valueLink={values.pubApproval}
                  />
                </div>

              </div>
            </div>

            {/* ########################Column #3 ########################### */}

            <div className="col">
              <div className="container-fluid text-left">

                <div className="form-group">
                    <AutoComplete
                      dataSource={omnibusAutocomplete}
                      filter={AutoComplete.caseInsensitiveFilter}
                      hintText="Omnibus"
                      floatingLabelText="Omnibus Number"
                      name="omnibus"
                      className=""
                      onChange={handleChange}
                      onUpdateInput={(searchText, dataSource, params) => _handleAutoUpdateChange(searchText, dataSource, params, "omnibus")}
                      onBlur={handleBlur}
                      value={values.omnibus}
                      searchText={values.omnibus}
                      errorText={ errors.omnibus && touched.omnibus && <div>{errors.omnibus}</div> }
                    />
                </div>

                <div className="form-group">
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

                <div className="form-group">
                  <TextField
                        hintText="Reason"
                        floatingLabelText="Withdrawal Reason"
                        name="withdrawalReason"
                        className=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.withdrawalReason}
                    />
                </div>

                <div className="form-group">
                  <DateField
                    hintText="Withdrawal Date" container="inline"
                    formatDate={() => moment(`${values.withdrawalDate}`).format('MM/DD/YYYY')}
                    name="withdrawalDate"
                    floatingLabelText="Withdrawal Date"
                    className=""
                    onChange={(e, val) => _handleDateChange(e, val, "withdrawalDate")}
                    onBlur={handleBlur}
                    value={values.withdrawalDate?moment(`${values.withdrawalDate}`).toDate():undefined}
                    errorText={errors.withdrawalDate && touched.withdrawalDate && <div>{errors.withdrawalDate}</div>}
                    onClearClick={e => setFieldValue("withdrawalDate", undefined)}
                    setFieldValue={setFieldValue}
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

                <div className="form-group">
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
            </div>

          </div>
        </div>


{/*
    const {
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting
    } = props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="modal-body">
          <div className="container-fluid text-left">
            <div className="form-group">
              <label htmlFor="id">Solicitation Id</label>

              <input
                type="text"
                name="id"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.id}
                size="20"
              />
              {errors.id && touched.id && <div>{errors.id}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="solNumber">Solicitation Number</label>

              <input
                type="text"
                name="solNumber"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.solNumber}
                size="20"
              />
              {errors.solNumber && touched.solNumber && <div>{errors.solNumber}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="pubApproval">Publication Approval</label>

              <input
                type="text"
                name="pubApproval"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pubApproval}
                size="10"
              />
              {errors.pubApproval && touched.pubApproval && <div>{errors.pubApproval}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="year">Fiscal Year</label>

              <input
                type="text"
                name="year"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.year}
                size="10"
              />
              {errors.year && touched.year && <div>{errors.year}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="omnibus">Omnibus Number</label>

              <input
                type="text"
                name="omnibus"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.omnibus}
                size="20"
              />
              {errors.omnibus && touched.omnibus && <div>{errors.omnibus}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="title">Solicitation Title</label>

              <input
                type="text"
                className="form-control"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                size="20"
              />
              {errors.title && touched.title && <div>{errors.title}</div>}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="reviewDate">Review Date</label>

            <input
              type="text"
              className="form-control"
              name="reviewDate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.reviewDate}
              size="20"
            />
            {errors.reviewDate && touched.reviewDate && <div>{errors.reviewDate}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="selectionDate">Selection Date</label>

            <input
              type="text"
              className="form-control"
              name="selectionDate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.selectionDate}
              size="20"
            />
            {errors.selectionDate && touched.selectionDate && <div>{errors.selectionDate}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="releaseDate">Release Date</label>

            <input
              type="text"
              className="form-control"
              name="releaseDate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.releaseDate}
              size="20"
            />
            {errors.releaseDate && touched.releaseDate && <div>{errors.releaseDate}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="closeDate">Close Date</label>

            <input
              type="text"
              className="form-control"
              name="closeDate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.closeDate}
              size="20"
            />
            {errors.closeDate && touched.closeDate && <div>{errors.closeDate}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="announcementType">Announcement Type</label>

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
          </div>
          <div className="form-group">
            <label htmlFor="containerType">Container Type</label>

            <input
              type="text"
              className="form-control"
              name="containerType"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.containerType}
              size="20"
            />
            {errors.containerType && touched.containerType && <div>{errors.containerType}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="authorizedBy">Authorized By</label>

            <input
              type="text"
              className="form-control"
              name="authorizedBy"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.authorizedBy}
              size="20"
            />
            {errors.authorizedBy && touched.authorizedBy && <div>{errors.authorizedBy}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="withdrawalReason">Withdrawal Reason</label>

            <input
              type="text"
              className="form-control"
              name="withdrawalReason"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.withdrawalReason}
              size="20"
            />
            {errors.withdrawalReason && touched.withdrawalReason && <div>{errors.withdrawalReason}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="withdrawalDate">Withdrawal Date</label>

            <input
              type="text"
              className="form-control"
              name="withdrawalDate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.withdrawalDate}
              size="20"
            />
            {errors.withdrawalDate && touched.withdrawalDate && <div>{errors.withdrawalDate}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="withdrawnBy">Withdrawn By</label>

            <input
              type="text"
              className="form-control"
              name="withdrawnBy"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.withdrawnBy}
              size="20"
            />
            {errors.withdrawnBy && touched.withdrawnBy && <div>{errors.withdrawnBy}</div>}
          </div>
        </div>
*/}
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
              Create
            </button>
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
    values.year = parseInt(moment(`${values.year}-01.01`).format('YYYY'));
    console.log(
      "...........updated modal values: " +
        JSON.stringify(values, null, 2)
    );
    addSolicitation(values, filter);
    hideModal();
    // e.preventDefault();
  };

  const AddSolicitation = withFormik({
    mapPropsToValues: props => ({
      solNumber: '',
      pubApproval: 0,
      year: undefined,
      omnibus: '',
      title: '',
      reviewDate: undefined,
      selectionDate: undefined,
      releaseDate: undefined,
      closeDate: undefined,
      announcementType: '',
      containerType: '',
      authorizedBy: '',
      withdrawalReason: '',
      withdrawalDate: undefined,
      withdrawnBy: ''
    }),
    validationSchema: Yup.object().shape({
      solNumber: Yup.string().required("Solicitation Number is required!"),
      pubApproval: Yup.number().required("Publication Approval is required!").positive("Publication Approval is wrong!").integer("Publication Approval is bad!"),
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
    displayName: "SolicitationAdd" // helps with React DevTools
  })(innerForm);

  return <AddSolicitation />;
};

export default AddSolicitationForm;
