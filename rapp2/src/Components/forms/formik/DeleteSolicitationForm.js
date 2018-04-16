import React from "react";
import { withFormik } from "formik";
import Yup from "yup";

const DeletSolicitationForm = ({ solicitation, hideModal }) => {
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
              <label htmlFor="id">Solicitation Id</label>
              <span>{values.id}</span>
            </div>
            <div className="form-group">
              <label htmlFor="solNumber">Solicitation Number</label>
              <span>{values.solNumber}</span>
            </div>
            <div className="form-group">
              <label htmlFor="pubApproval">Publication Approval</label>
              <span>{values.pubApproval}</span>
            </div>
            <div className="form-group">
              <label htmlFor="year">Fiscal Year</label>
              <span>{values.year}</span>
            </div>
            <div className="form-group">
              <label htmlFor="omnibus">Omnibus Number</label>
              <span>{values.omnibus}</span>
            </div>
            <div className="form-group">
              <label htmlFor="title">Solicitation Title</label>
              <span>{values.title}</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="reviewDate">Review Date</label>
            <span>{values.reviewDate}</span>
          </div>
          <div className="form-group">
            <label htmlFor="selectionDate">Selection Date</label>
            <span>{values.selectionDate}</span>
          </div>
          <div className="form-group">
            <label htmlFor="releaseDate">Release Date</label>
            <span>{values.releaseDate}</span>
          </div>
          <div className="form-group">
            <label htmlFor="closeDate">Close Date</label>
            <span>{values.closeDate}</span>
          </div>
          <div className="form-group">
            <label htmlFor="announcementType">Announcement Type</label>
            <span>{values.announcementType}</span>
          </div>
          <div className="form-group">
            <label htmlFor="containerType">Container Type</label>
            <span>{values.containerType}</span>
          </div>
          <div className="form-group">
            <label htmlFor="authorizedBy">Authorized By</label>
            <span>{values.authorizedBy}</span>
          </div>
          <div className="form-group">
            <label htmlFor="withdrawalReason">Withdrawal Reason</label>
            <span>{values.withdrawalReason}</span>
          </div>
          <div className="form-group">
            <label htmlFor="withdrawalDate">Withdrawal Date</label>
            <span>{values.withdrawalDate}</span>
          </div>
          <div className="form-group">
            <label htmlFor="withdrawnBy">Withdrawn By</label>
            <span>{values.withdrawnBy}</span>
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
              Delete
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

  const DeleteSolicitation = withFormik({
    mapPropsToValues: props => ({
      id: solicitation.SOLICITATION_ID,
      solNumber: solicitation.SOLICITATION_NUMBER,
      pubApproval: solicitation.PUBLICATION_APPROVAL,
      year: solicitation.FISCAL_YEAR,
      omnibus: solicitation.OMNIBUS_NUMBER,
      title: solicitation.TITLE,
      reviewDate: solicitation.REVIEW_DATE,
      selectionDate: solicitation.SELECTION_DATE,
      releaseDate: solicitation.RELEASE_DATE,
      closeDate: solicitation.CLOSE_DATE,
      announcementType: solicitation.ANNOUNCEMENT_TYPE,
      containerType: solicitation.CONTAINER_TYPE,
      authorizedBy: solicitation.AUTHORIZED_BY,
      withdrawalReason: solicitation.WITHDRAWAL_REASON,
      withdrawalDate: solicitation.WITHDRAWAL_DATE,
      withdrawnBy: solicitation.WITHDRAWN_BY
    }),
    validationSchema: Yup.object().shape({
      id: Yup.string().required("Id is required!"),
      pubApproval: Yup.string().required("Publication Approval is required!"),
      year: Yup.string().required("Fiscal Year is required!"),
      title: Yup.string().required("Title is required!"),
      reviewDate: Yup.string().required("Last Name is required!"),
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
    displayName: "SolicitationDelete" // helps with React DevTools
  })(innerForm);

  return <DeleteSolicitation />;
};

export default DeletSolicitationForm;
