import {
  INVALIDATE_REVIEW_PROPOSAL_DETAILS,
  REQUEST_REVIEW_PROPOSAL_DETAILS, RECEIVE_REVIEW_PROPOSAL_DETAILS,
  requestReviewProposalDetails
} from '../../actions/reviewProposalDetailsActions'

const reviewProposalDetailsData = (state = {
  isFetching: false,
  didInvalidate: false,
  proposal: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_REVIEW_PROPOSAL_DETAILS:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_REVIEW_PROPOSAL_DETAILS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_REVIEW_PROPOSAL_DETAILS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        proposal: action.proposal,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const reviewProposalDetails = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_REVIEW_PROPOSAL_DETAILS:
    case RECEIVE_REVIEW_PROPOSAL_DETAILS:
    case REQUEST_REVIEW_PROPOSAL_DETAILS:
      return {
        ...state,
        [action.reviewProposalId]: reviewProposalDetailsData(state[action.reviewProposalId], action)
      }
    default:
      return state
  }
}

export default reviewProposalDetails
