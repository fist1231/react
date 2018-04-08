import React from 'react'
import { connect } from 'react-redux'
import { editProposal, hideModal } from '../../actions/modal/modalActions'

const EditProposalModal = ({ proposal, dispatch }) => (
  <div>
    <p>Edit Proposal {proposal.RESPONSE_NUMBER}?</p>
    <button onClick={() => {
      dispatch(editProposal(proposal.id)).then(() => {
        dispatch(hideModal())
      })
    }}>
      Save
    </button>
    <button onClick={() => dispatch(hideModal())}>
      Cancel
    </button>
  </div>
)

export default connect(
  (state, ownProps) => ({
    proposal: state.proposalById[ownProps.proposalId]
  })
)(EditProposalModal)
