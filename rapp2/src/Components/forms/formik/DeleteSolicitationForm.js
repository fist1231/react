import React from "react";
import { withFormik } from "formik";
import Yup from "yup";

const DeletSolicitationForm = ({
  solicitation,
  hideModal,
  deleteSolicitation,
  filter
}) => {
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
            Are you sure you want to delete this solicitation?
          </p>

          <div className="container text-left">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6 text-right">
                <label htmlFor="id">Solicitation Id</label>
              </div>
              <div className="col-md-3 col-sm-6 col-6">{values.id}</div>
              <div className="col-md-3 col-sm-6 col-6 text-right">
                <label htmlFor="">Solicitation Number</label>
              </div>
              <div className="col-md-3 col-sm-6 col-6">{values.solNumber}</div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6 text-right">
                <label htmlFor="">Publication Approval</label>
              </div>
              <div className="col-md-3 col-sm-6">{values.pubApproval}</div>
              <div className="col-md-3 col-sm-6 text-right">
                <label htmlFor="">Fiscal Year</label>
              </div>
              <div className="col-md-3 col-sm-6">{values.year}</div>

            </div>

            <div className="row">
            <div className="col-md-3 col-sm-6 text-right">
              <label htmlFor="">Release Date</label>
            </div>
            <div className="col-md-3 col-sm-6">{values.releaseDate}</div>
            <div className="col-md-3 col-sm-6 text-right">
                            <label htmlFor="">Review Date</label>
                          </div>
                          <div className="col-md-3 col-sm-6">{values.reviewDate}</div>

            </div>



            <div className="row">
          <div className="col-md-3 col-sm-6 text-right">
              <label htmlFor="">Selection Date</label>
            </div>
            <div className="col-md-3 col-sm-6">{values.selectionDate}</div>

              <div className="col-md-3 col-sm-6 text-right">
                <label htmlFor="">Close Date</label>
              </div>
              <div className="col-md-3 col-sm-6">{values.closeDate}</div>
            </div>

            <div className="row">
              <div className="col-md-3 col-sm-6 text-right">
                <label htmlFor="">Omnibus Number</label>
              </div>
              <div className="col-md-3 col-sm-6">{values.omnibus}</div>
              <div className="col-md-3 col-sm-6 text-right">
                <label htmlFor="">Announcement Type</label>
              </div>
              <div className="col-md-3 col-sm-6">{values.announcementType}</div>
            </div>

            <div className="row">
              <div className="col-md-3 col-sm-6 text-right">
                <label htmlFor="">Container Type</label>
              </div>
              <div className="col-md-3 col-sm-6">{values.containerType}</div>
              <div className="col-md-3 col-sm-6 text-right">
                <label htmlFor="">Authorized By</label>
              </div>
              <div className="col-md-3 col-sm-6">{values.authorizedBy}</div>
            </div>

            <div className="row">
              <div className="col-md-3 col-sm-6 text-right">
                <label htmlFor="">Solicitation Title</label>
              </div>
              <div className="col-md-9 col-sm-6">{values.title}</div>
            </div>

            <div className="row">
              <div className="col-md-3 col-sm-6 text-right">
                <label htmlFor="">Withdrawal Reason</label>
              </div>
              <div className="col-md-3 col-sm-6">{values.withdrawalReason}</div>
              <div className="col-md-3 col-sm-6 text-right">
                <label htmlFor="">Withdrawal Date</label>
              </div>
              <div className="col-md-3">{values.withdrawalDate}</div>
            </div>

            <div className="row">
              <div className="col-md-3 col-sm-6 text-right">
                <label htmlFor="">Withdrawn By</label>
              </div>
              <div className="col-md-9 col-sm-6">{values.withdrawnBy}</div>
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
    console.log(
      "...........submitted modal with filter: " + JSON.stringify(filter)
    );
    deleteSolicitation(values, filter);
    hideModal();
    // e.preventDefault();
  };

  const DeleteSolicitation = withFormik({
    mapPropsToValues: props => ({
      _id: solicitation._id,
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
    validationSchema: Yup.object().shape({}),
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
