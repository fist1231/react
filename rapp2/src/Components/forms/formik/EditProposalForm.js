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
            <div className="form-group row">

            <label
             htmlFor="id"
             className={
               errors.id && touched.id
                 ? "col-sm-5 col-form-label error"
                 : "col-sm-5 col-form-label"
             }
           >
             Id*
           </label>

           <div className="col-sm-7">
             <input
               type="text"
               name="id"
               className={
                 errors.id && touched.id
                   ? "form-control error"
                   : "form-control"
               }
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.id}
               size="20"
             />
             {errors.id &&
               touched.id && (
                 <div className="invalid-feedback">{errors.id}</div>
               )}
           </div>
            </div>
             <div className="form-group row">
             <label
              htmlFor="pnumber"
              className={
                errors.pnumber && touched.pnumber
                  ? "col-sm-5 col-form-label error"
                  : "col-sm-5 col-form-label"
              }
            >
              Proposal Number*
            </label>

            <div className="col-sm-7">
              <input
                type="text"
                name="pnumber"
                className={
                  errors.pnumber && touched.pnumber
                    ? "form-control error"
                    : "form-control"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pnumber}
                size="20"
              />

              {errors.pnumber &&
                touched.pnumber && (
                  <div className="invalid-feedback">{errors.pnumber}</div>
                )}
            </div>
            </div>
            <div className="form-group row">
             <label
               htmlFor="seq"
               className={
                 errors.seq && touched.seq
                   ? "col-sm-5 col-form-label error"
                   : "col-sm-5 col-form-label"
               }
             >
               Sequence Number*
             </label>
             <div className="col-sm-7">
               <input
                 type="text"
                 name="seq"
                 className={
                   errors.seq && touched.seq
                     ? "form-control error"
                     : "form-control"
                 }
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.seq}
                 size="10"
               />

               {errors.seq &&
                 touched.seq && (
                   <div className="invalid-feedback">{errors.seq}</div>
                 )}
             </div>
           </div>
           <div className="form-group row">
             <label
               htmlFor="pstate"
               className={
                 errors.pstate && touched.pstate
                   ? "col-sm-5 col-form-label error"
                   : "col-sm-5 col-form-label"
               }
             >
               State*
             </label>
             <div className="col-sm-7">
               <input
                 type="text"
                 name="pstate"
                 className={
                   errors.pstate && touched.pstate
                     ? "form-control error"
                     : "form-control"
                 }
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.pstate}
                 size="10"
               />
               {errors.pstate &&
                 touched.pstate && (
                   <div className="invalid-feedback">{errors.pstate}</div>
                 )}
             </div>
           </div>
           <div className="form-group row">
           <label
             htmlFor="fname"
             className={
               errors.pname && touched.pname
                 ? "col-sm-5 col-form-label error"
                 : "col-sm-5 col-form-label"
             }
           >First Name*</label>
             <div className="col-sm-7">
               <input
                 type="text"
                 name="fname"
                 className={
                   errors.pname && touched.pname
                     ? "form-control error"
                     : "form-control"
                 }
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.fname}
                 size="20"
               />
               {errors.fname &&
                 touched.fname && (
                   <div className="invalid-feedback">{errors.fname}</div>
                 )}
             </div>
           </div>
            <div className="form-group row">
            <label
                          htmlFor="lname"
                          className={
                            errors.lname && touched.lname
                              ? "col-sm-5 col-form-label error"
                              : "col-sm-5 col-form-label"
                          }
                        >Last Name</label>
            <div className="col-sm-7">
                          <input
                            type="text"
                            className={
                              errors.lname && touched.lname
                                ? "form-control error"
                                : "form-control"
                            }
                            name="lname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lname}
                            size="20"
                          />
                          {errors.lname && touched.lname && <div className="invalid-feedback">{errors.lname}</div>}
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
