import React from "react";
import { withFormik } from "formik";
import Yup from "yup";

const EditProposalForm = ({ proposal, hideModal }) => {
  const innerForm = (props, hdMod) => {
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
              <label htmlFor="id">Id</label>

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
              <label htmlFor="id">Proposal Number</label>

              <input
                type="text"
                name="pnumber"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pnumber}
                size="20"
              />
              {errors.pnumber && touched.pnumber && <div>{errors.pnumber}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="id">Sequence Number</label>

              <input
                type="text"
                name="seq"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.seq}
                size="10"
              />
              {errors.seq && touched.seq && <div>{errors.seq}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="id">State</label>

              <input
                type="text"
                name="pstate"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pstate}
                size="10"
              />
              {errors.pstate && touched.pstate && <div>{errors.pstate}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="id">First Name</label>

              <input
                type="text"
                name="fname"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fname}
                size="20"
              />
              {errors.fname && touched.fname && <div>{errors.fname}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="id">Last Name</label>

              <input
                type="text"
                className="form-control"
                name="lname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lname}
                size="20"
              />
              {errors.lname && touched.lname && <div>{errors.lname}</div>}
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
              Save
            </button>
          </div>
        </div>
      </form>
    );
  };

  const doSubmit = (values, hideModal) => {
    console.log(
      "...........submitted modal with values: " +
        JSON.stringify(values, null, 2)
    );
    hideModal();
    // e.preventDefault();
  };

  const EditProposal = withFormik({
    mapPropsToValues: props => ({
      id: proposal.ASSIGNED_RESPONSE_ID,
      pnumber: proposal.RESPONSE_NUMBER,
      seq: proposal.RESPONSE_SEQ_NUMBER,
      pstate: proposal.PSTATE,
      fname: proposal.FIRST_NAME,
      lname: proposal.LAST_NAME
    }),
    validationSchema: Yup.object().shape({
      id: Yup.string().required("Id is required!"),
      pnumber: Yup.string().required("Proposal Number is required!"),
      seq: Yup.string().required("Proposal Sequence Number is required!"),
      pstate: Yup.string().required("Proposal Status is required!"),
      fname: Yup.string().required("First Name is required!"),
      lname: Yup.string().required("Last Name is required!")
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
    displayName: "ProposalEdit" // helps with React DevTools
  })(innerForm);

  return <EditProposal />;
};

export default EditProposalForm;
