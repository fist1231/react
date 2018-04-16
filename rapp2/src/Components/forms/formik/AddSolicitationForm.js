import React from "react";
import { withFormik } from "formik";
import Yup from "yup";

const AddSolicitationForm = ({ hideModal }) => {
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

  const AddSolicitation = withFormik({
    mapPropsToValues: props => ({
      id: '',
      solNumber: '',
      pubApproval: '',
      year: '',
      omnibus: '',
      title: '',
      reviewDate: '',
      selectionDate: '',
      releaseDate: '',
      closeDate: '',
      announcementType: '',
      containerType: '',
      authorizedBy: '',
      withdrawalReason: '',
      withdrawalDate: '',
      withdrawnBy: ''
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
    displayName: "SolicitationAdd" // helps with React DevTools
  })(innerForm);

  return <AddSolicitation />;
};

export default AddSolicitationForm;
