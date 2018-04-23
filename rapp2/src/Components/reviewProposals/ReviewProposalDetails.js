import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const ReviewProposalDetails = ({ proposal, isLoading }) => (
  <div>
    {isLoading ? (
      <h2>Loading...</h2>
    ) : (
      <div>
        <div className="row">
          <div className="col">
            <h1>Review Proposal Details</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">Proposal Number</div>
          <div className="col-md-6 offset-md-3">{proposal.RESPONSE_NUMBER}{proposal.RESPONSE_SEQ_NUMBER}</div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">PI Name</div>
          <div className="col-md-6 offset-md-3">{proposal.LAST_NAME}, {proposal.FIRST_NAME}</div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">Proposal status</div>
          <div className="col-md-6 offset-md-3">{proposal.PSTATE}</div>
        </div>
      </div>
    )}

    <div className="row">
      <div className="col-md-6 offset-md-3">
        <Link to='/reviewProposals'>Back to list</Link>
      </div>
    </div>
  </div>
);

ReviewProposalDetails.propTypes = {
   proposal: PropTypes.object,
   searchFilter: PropTypes.object
}

export default ReviewProposalDetails;
