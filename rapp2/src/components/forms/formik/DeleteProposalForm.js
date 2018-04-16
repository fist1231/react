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
              <label htmlFor="id">Proposal Number: </label>
              <label htmlFor="id">{values.pnumber}</label>
            </div>
            <div className="form-group">
              <label htmlFor="id">Sequence Number: </label>
              <label htmlFor="id">{values.seq}</label>
            </div>
            <div className="form-group">
              <label htmlFor="id">State: </label>
              <label htmlFor="id">{values.pstate}</label>
            </div>
            <div className="form-group">
              <label htmlFor="id">First Name: </label>
              <label htmlFor="id">{values.fname}</label>
            </div>
            <div className="form-group">
              <label htmlFor="id">Last Name</label>
              <label htmlFor="id">{values.lname}</label>
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
            >Cancel</button>
            <button
              className="btn btn-primary "
              icon="fa-close"
              disabled={isSubmitting}
            >Delete</button>
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

  const DeleteProposal = withFormik({
    mapPropsToValues: props => ({
      id: proposal.ASSIGNED_RESPONSE_ID,
      pnumber: proposal.RESPONSE_NUMBER,
      seq: proposal.RESPONSE_SEQ_NUMBER,
      pstate: proposal.PSTATE,
      fname: proposal.FIRST_NAME,
      lname: proposal.LAST_NAME
    }),
    handleSubmit: (values, { setSubmitting }) => {
      doSubmit(values, hideModal);
      setSubmitting(false);
    },
    displayName: "ProposalDelete" // helps with React DevTools
  })(innerForm);

  return <DeleteProposal />;
};

export default EditProposalForm;
