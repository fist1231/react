import {
  SEARCH_REVIEW_PROPOSALS_FILTER
} from '../../actions/reviewProposalsActions'


const foundReviewProposalsFilter = (state = {searchText:'', isOpenOnly:false}, action) => {
  switch (action.type) {
    case SEARCH_REVIEW_PROPOSALS_FILTER: {
      console.log('============== returning: ' + JSON.stringify(action.reviewProposalsFilter))
      return action.reviewProposalsFilter
    }
    default:
      return state
  }
}

export default foundReviewProposalsFilter
