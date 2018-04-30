import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const ReviewProposalDetails = ({ proposal, isLoading }) => (
  <div className="container-fluid">
    {isLoading ? (
      <h2>Loading...</h2>
    ) : (
      <div>
<div class="col-md-8 offset-md-2 mt-5">
<div class="card propDetail">
  <h5 class="card-header">Review Proposal Details</h5>
  <div class="card-body ">
<div className="container">
  <table class="table table-borderd table-striped">
    <thead>

    </thead>
    <tbody>
      <tr className="row">
        <td class="col-md-4"><label>Proposal Number</label></td>
        <td class="col-md-8">{proposal.RESPONSE_NUMBER}{proposal.RESPONSE_SEQ_NUMBER}</td>
      </tr>
      <tr className="row">
        <td class="col-md-4"><label>PI Name</label></td>
        <td class="col-md-8">{proposal.LAST_NAME}, {proposal.FIRST_NAME}</td>
      </tr>
    <tr className="row">
          <td class="col-md-4"><label>Proposal status</label></td>
        <td class="col-md-8">{proposal.PSTATE}</td>
      </tr>
    </tbody>
  </table></div>
  </div>

</div>
</div>
</div>



    )}
<div className="container mt-3">
    <div className="row">
      <div className="col-md-12 text-center">
        <Link to='/reviewProposals'><i className="fa fa-chevron-left" aria-hidden="true"></i> Back to list</Link>
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
