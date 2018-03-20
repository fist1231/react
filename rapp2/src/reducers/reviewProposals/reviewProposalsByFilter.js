import {
  INVALIDATE_REVIEW_PROPOSALS_FILTER,
  REQUEST_REVIEW_PROPOSALS, RECEIVE_REVIEW_PROPOSALS,
  requestReviewProposals
} from '../../actions/reviewProposalsActions'

import expect, { createSpy, spyOn, isSpy } from 'expect'

const reviewProposalsTable = (state = {
  isFetching: false,
  didInvalidate: false,
  reviewProposalsTable: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_REVIEW_PROPOSALS_FILTER:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_REVIEW_PROPOSALS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_REVIEW_PROPOSALS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        reviewProposalsTable: action.reviewProposalsTable,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const reviewProposalsByFilter = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_REVIEW_PROPOSALS_FILTER:
    case RECEIVE_REVIEW_PROPOSALS:
    case REQUEST_REVIEW_PROPOSALS:
      return {
        ...state,
        [action.reviewProposalsFilter]: reviewProposalsTable(state[action.reviewProposalsFilter], action)
        // [action.reviewProposalsFilter.searchText+'-'+action.reviewProposalsFilter.isOpenOnly]: reviewProposalsTable(state[action.reviewProposalsFilter], action)
      }
    default:
      return state
  }
}

export default reviewProposalsByFilter

expect(
  reviewProposalsByFilter( { }, { } )
).toEqual( { } );

expect(
  reviewProposalsByFilter( { }, requestReviewProposals({searchText:'a', isOpenOnly:false}) )
).toEqual( {[requestReviewProposals({searchText:'a', isOpenOnly:false})]:{"isFetching": true, "didInvalidate": false, "reviewProposalsTable": []}} );

/*
expect(
  reviewProposalsByFilter( { }, requestReviewProposals(['a', false]) )
).toEqual( {"a,false":{"isFetching": true, "didInvalidate": false, "reviewProposalsTable": []}} );
*/
console.log('Review Proposal tests passed');
