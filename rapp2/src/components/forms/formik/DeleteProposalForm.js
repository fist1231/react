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
        <p className="alert alert-danger text-left ">
            Are you sure you want to delete this proposal?
          </p>
          <div className="container text-left">
            <table className="table table-striped">
              <thead />
              <tbody>
                <tr>
                  <td width="40%">
                    <label htmlFor="id">Proposal Number: </label>
                  </td>
                  <td>{values.pnumber}</td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="id">Sequence Number: </label>
                  </td>
                  <td>{values.seq}</td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="id">State: </label>
                  </td>
                  <td>{values.pstate}</td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="id">First Name: </label>
                  </td>
                  <td>{values.fname}</td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="id">Last Name</label>
                  </td>
                  <td>{values.lname}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal-footer">
          <div className="container">
            <div className="row">
            <div className="col-md-6">
            <button
              type="reset"
              className="btn btn-secondary w-100"
              icon="fa-close"
              onClick={() => hideModal()}
            ><i className="fa fa-ban" aria-hidden="true"></i>
              Cancel
            </button>
            </div>
            <div className="col-md-6">
            <button
              className="btn btn-primary w-100"

              disabled={isSubmitting}
            >
            <i className="fa fa-times" aria-hidden="true"></i>
              Delete
            </button>
            </div>
            </div>
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
