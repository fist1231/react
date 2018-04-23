import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import config from '../../config/config.json'

export const REQUEST_REVIEW_PROPOSAL_DETAILS = 'REQUEST_REVIEW_PROPOSAL_DETAILS'
export const RECEIVE_REVIEW_PROPOSAL_DETAILS = 'RECEIVE_REVIEW_PROPOSAL_DETAILS'

export const GET_REVIEW_PROPOSAL_DETAILS = 'GET_REVIEW_PROPOSAL_DETAILS'
export const INVALIDATE_REVIEW_PROPOSAL_DETAILS = 'INVALIDATE_REVIEW_PROPOSAL_DETAILS'


export const getReviewProposalDetails = reviewProposalId => ({
  type: GET_REVIEW_PROPOSAL_DETAILS,
  reviewProposalId
})

export const invalidateReviewProposalDetails = reviewProposalId => ({
  type: INVALIDATE_REVIEW_PROPOSAL_DETAILS,
  reviewProposalId
})


export const requestReviewProposalDetails = reviewProposalId => ({
  type: REQUEST_REVIEW_PROPOSAL_DETAILS,
  reviewProposalId,
  proposal: undefined,
  receivedAt: undefined
})

export const receiveReviewProposalDetails = (reviewProposalId, json) => ({
  type: RECEIVE_REVIEW_PROPOSAL_DETAILS,
  reviewProposalId,
  proposal: json, //[{id:1001, name:"alles-1001"}],
  receivedAt: Date.now()
})


const fetchReviewProposalDetails = reviewProposalId => dispatch => {
  dispatch(requestReviewProposalDetails(reviewProposalId))
  return dispatch(getGraphQLResult(reviewProposalId));
}


const getGraphQLResult = reviewProposalId => dispatch => {
  console.log('************ getGraphQLResult reviewProposalId=' + reviewProposalId);
  fetch(`${config.review_proposals_address}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `{ reviewProposalById (id: "${reviewProposalId}") { ASSIGNED_RESPONSE_ID, FIRST_NAME, LAST_NAME, RESPONSE_NUMBER, RESPONSE_SEQ_NUMBER, PSTATE } }` }),
  })
    .then(res => {
      const jsn = res.json();
      // console.log('************ getGraphQLResult jsn=' + JSON.stringify(jsn));
      return jsn;
    })
    .then(res => {
      return res.data.reviewProposalById;
    })
    .then(res => {
      dispatch(receiveReviewProposalDetails(reviewProposalId, res));
      return res;
    });

}

const getObservableResult = reviewProposalsFilter => dispatch => {
  return Observable.ajax('http://localhost:3335/nress/reviewProposals')
    .map(response => {
      //console.log('RESPONSE = ' + response);
      //console.log('response = ' + JSON.stringify(response.response));
      return response.response;
    })
    .map(proposal => {
      //console.log('reviewProposals = ' + JSON.stringify(reviewProposals));
      return proposal;
    })
    .subscribe(proposal => {
      //console.log(JSON.stringify(reviewProposals));
      dispatch(receiveReviewProposalDetailss(reviewProposalDetails, proposal));
    })
}


const shouldFetchReviewProposalDetails = (state, reviewProposalId) => {
  const proposal = state.searchFilter[reviewProposalId]
  // console.log('%%%%%%%%%%%%%%% shouldFetchReviewProposalDetails state=' + JSON.stringify(state))
  return true
  if (!proposal) {
    return true
  }
  if (proposal.isFetching) {
    return false
  }
  return proposal.didInvalidate
}

export const fetchReviewProposalDetailsIfNeeded = reviewProposalId => (dispatch, getState) => {
  if (shouldFetchReviewProposalDetails(getState(), reviewProposalId)) {
    console.log('fetching reviewProposal Details')
    return dispatch(fetchReviewProposalDetails(reviewProposalId))
  }
}
