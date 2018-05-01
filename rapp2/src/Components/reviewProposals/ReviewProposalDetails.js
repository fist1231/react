import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const ReviewProposalDetails = ({ proposal, isLoading }) => (
  <div className="container-fluid">
    {isLoading ? (
      <h2>Loading...</h2>
    ) : (
      <div>
        <div className="col-md-8 offset-md-2 mt-5">
          <div className="card propDetail">
            <h5 className="card-header">Review Proposal Details</h5>
            <div className="card-body ">
              <div className="container">
                <table className="table table-borderd table-striped">
                  <thead />
                  <tbody>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>Proposal Number</label>
                      </td>
                      <td className="col-md-8">
                        {proposal.RESPONSE_NUMBER}
                        {proposal.RESPONSE_SEQ_NUMBER}
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>Generated</label>
                      </td>
                      <td className="col-md-8">
                        {proposal.GENERATED_STATUS}
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>Panel Acronym</label>
                      </td>
                      <td className="col-md-8">
                        {proposal.ACRONYM}
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>User Id</label>
                      </td>
                      <td className="col-md-8">
                        {proposal.NSPIRES_USER_ID}
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>PI Name</label>
                      </td>
                      <td className="col-md-8">
                        {proposal.LAST_NAME}, {proposal.FIRST_NAME}
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>Proposal status</label>
                      </td>
                      <td className="col-md-8">{proposal.PSTATE}</td>
                    </tr>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>Evaluation Id</label>
                      </td>
                      <td className="col-md-8">
                        {proposal.EVALUATION_FORM_ID}
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>Evaluation</label>
                      </td>
                      <td className="col-md-8">
                        {proposal.QUESTIONNAIRE}
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>Evaluation Status</label>
                      </td>
                      <td className="col-md-8">
                        {proposal.EVALUATION_STATUS}
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>Grade</label>
                      </td>
                      <td className="col-md-8">
                        {proposal.GRADE}
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>Primary Reviewer</label>
                      </td>
                      <td className="col-md-8">
                        {proposal.p_first_name} {proposal.p_last_name}
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>Secondary Reviewer</label>
                      </td>
                      <td className="col-md-8">
                        {proposal.s_first_name} {proposal.s_last_name}
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col-md-4">
                        <label>Non-Panelist</label>
                      </td>
                      <td className="col-md-8">
                        {proposal.np_first_name} {proposal.np_last_name}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 text-center">
          <Link to="/reviewProposals">
            <i className="fa fa-chevron-left" aria-hidden="true" /> Back to list
          </Link>
        </div>
      </div>
    </div>
  </div>
);

ReviewProposalDetails.propTypes = {
   proposal: PropTypes.object,
   searchFilter: PropTypes.object
}

export default ReviewProposalDetails;
