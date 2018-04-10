import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { editProposal, hideModal } from '../../actions/modal/modalActions'
import ModalX from './ModalX';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

import { withFormik } from 'formik';
import Yup from 'yup';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .65);
`;

const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  overflow: auto;
  text-align: center;
  overflow-scrolling: touch;
  padding: 4px;
  cursor: pointer;

  &:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    margin-left: -.05em;
    content: '';
  }
`;

const Dialog = styled.div`
  position: relative;
  outline: 0;
  width: 100%;
  background: white;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  max-width: 520px;
  cursor: default;
`;


const Header = styled.div`
  padding: 16px 8px 8px 8px
`;

const Body = styled.div`
  padding-bottom: 16px
`;

const onOverlayClick = () => {
  hideModal();
};

const onDialogClick = (event) => {
  event.stopPropagation();
};

const EditProposalModal = ({ proposal, oprops, dispatch }) => {

  const reviewProposal = oprops.proposal;

  const handleConfirm = (isConfirmed) => () => {
    // hideModal();
    onConfirm(isConfirmed);
  };

  const handleSubmit = (e, dispatch, values) => {
    console.log('submitted modal with values: ' + JSON.stringify(values, null, 2));
    dispatch(hideModal());
    // e.preventDefault();
  }

  const doSubmit = (values) => {
    console.log('...........submitted modal with values: ' + JSON.stringify(values, null, 2));
    dispatch(hideModal());
    // e.preventDefault();
  }


/////////////////////////////////////////////////////////////////////////////////


const MyInnerForm = props => {
  const{
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
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
            {errors.pnumber &&
              touched.pnumber && <div>{errors.pnumber}</div>}

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
            {errors.seq &&
              touched.seq && <div>{errors.seq}</div>}

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
            {errors.pstate &&
              touched.pstate && <div>{errors.pstate}</div>}

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
            {errors.fname &&
              touched.fname && <div>{errors.fname}</div>}

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
            {errors.lname &&
              touched.lname && <div>{errors.lname}</div>}

        </div>
          </div>
          </div>
<div class="modal-footer"><div class="btnContainer">


        <button
          type="reset"
          className="btn btn-secondary"
          icon="fa-close"
          onClick={() => dispatch(hideModal())}
        >
          Cancel
        </button>
        <button className="btn btn-primary " icon="fa-close" disabled={isSubmitting}>
          Save
        </button>
        </div>
        </div>

    </form>
  );
};


const EnhancedForm = withFormik({
  mapPropsToValues: props => ({id: reviewProposal.ASSIGNED_RESPONSE_ID, pnumber: reviewProposal.RESPONSE_NUMBER, seq: reviewProposal.RESPONSE_SEQ_NUMBER, pstate:reviewProposal.PSTATE, fname: reviewProposal.FIRST_NAME, lname: reviewProposal.LAST_NAME }),
  validationSchema: Yup.object().shape({
    id: Yup.string().required('Id is required!'),
    pnumber: Yup.string().required('Proposal Number is required!'),
    seq: Yup.string().required('Proposal Sequence Number is required!'),
    pstate: Yup.string().required('Proposal Status is required!'),
    fname: Yup.string().required('First Name is required!'),
    lname: Yup.string().required('Last Name is required!'),
  }),
  handleSubmit: (values, { setSubmitting }, dispatch) => {
    // console.log('^^^^^^^^^^^dispatch='+dispatch);

    doSubmit(values);
    setSubmitting(false);
  // {
  //   setTimeout(() => {
  //     alert(JSON.stringify(values, null, 2));
  //     setSubmitting(false);
  //   }, 1000);
  },
  displayName: 'ProposalEdit', // helps with React DevTools
})(MyInnerForm);



/////////////////////////////////////////////////////////////////////////////////


  return (
      <div>
        <Overlay />
        <Content onClick={() => dispatch(hideModal())}>
          <Dialog onClick={onDialogClick}>
            <div className="modal-header">
                <h3 className="modal-title">Edit Proposal {reviewProposal.RESPONSE_NUMBER}-{reviewProposal.RESPONSE_SEQ_NUMBER}</h3>
            </div>


{/*
              <form onSubmit={e => handleSubmit(e, dispatch)}>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Id</label>
                      <div className="col-sm-10">
                        <input id="id" className="form-control" defaultValue={reviewProposal.ASSIGNED_RESPONSE_ID} size="20" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Number</label>
                      <div className="col-sm-10">
                        <input
                          id="pnumber"
                          className="form-control"
                          defaultValue={reviewProposal.RESPONSE_NUMBER}
                          size="20"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-auto mr-auto col-form-label">Seq #</label>
                      <div className="col-sm-10">
                        <input id="seq" className="form-control" defaultValue={reviewProposal.RESPONSE_SEQ_NUMBER} size="10" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-auto mr-auto col-form-label">Status</label>
                      <div className="col-sm-10">
                        <input id="pstate" className="form-control" defaultValue={reviewProposal.PSTATE} size="10" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-auto mr-auto col-form-label">First Name</label>
                      <div className="col-sm-10">
                        <input id="fname" className="form-control" defaultValue={reviewProposal.FIRST_NAME} size="10" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-auto mr-auto col-form-label">Last Name</label>
                      <div className="col-sm-10">
                        <input id="lname" className="form-control" defaultValue={reviewProposal.LAST_NAME} size="10" />
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
                      onClick={() => dispatch(hideModal())}
                    >
                      Cancel
                    </button>
                    <button className="btn btn-primary " icon="fa-close">
                      Save
                    </button>
                  </div>
                </div>
              </form>
*/}

              <EnhancedForm />


          </Dialog>
        </Content>
      </div>
  );
};



export default withRouter(connect(
  (state, ownProps) => ({
    proposal: {"ASSIGNED_RESPONSE_ID": "1234567", "RESPONSE_NUMBER": "Number 1", "RESPONSE_SEQ_NUMBER": "Sequ-1", "STATE": "Critical"},
    oprops: ownProps
  })
)(EditProposalModal))
