import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import config from '../../config/config.json'

export const REQUEST_REVIEW_PROPOSALS = 'REQUEST_REVIEW_PROPOSALS'
export const RECEIVE_REVIEW_PROPOSALS = 'RECEIVE_REVIEW_PROPOSALS'

export const SEARCH_REVIEW_PROPOSALS_FILTER = 'SEARCH_REVIEW_PROPOSALS_FILTER'
export const CB_REVIEW_PROPOSALS_FILTER = 'CB_REVIEW_PROPOSALS_FILTER'
export const INVALIDATE_REVIEW_PROPOSALS_FILTER = 'INVALIDATE_REVIEW_PROPOSALS_FILTER'

export const searchReviewProposalsFilter = reviewProposalsFilter => ({
  type: SEARCH_REVIEW_PROPOSALS_FILTER,
  reviewProposalsFilter
})

export const invalidateReviewProposalsFilter = reviewProposalsFilter => ({
  type: INVALIDATE_REVIEW_PROPOSALS_FILTER,
  reviewProposalsFilter
})


export const requestReviewProposals = reviewProposalsFilter => ({
  type: REQUEST_REVIEW_PROPOSALS,
  reviewProposalsFilter,
  reviewProposalsTable: [],
  receivedAt: undefined
})

export const receiveReviewProposals = (reviewProposalsFilter, json) => ({
  type: RECEIVE_REVIEW_PROPOSALS,
  reviewProposalsFilter,
  reviewProposalsTable: json, //[{id:1001, name:"zhoppa-1001"}],
  receivedAt: Date.now()
})

const fetchReviewProposals = reviewProposalsFilter => dispatch => {
  dispatch(requestReviewProposals(reviewProposalsFilter))
  // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //return Observable.ajax('http://192.168.1.208:30334/nress/solicitations')

//  fetch('http://192.168.56.1:30334/graphql', {
//  console.log('------------------ reviewProposalsFilter.searchText = ' + `{ reviewProposalsById (filter: "${reviewProposalsFilter.searchText}") { id, acronym, title } }`);

/*

  fetch(`${config.server_address}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    //body: JSON.stringify({ query: `{ reviewProposalsById (filter: "${reviewProposalsFilter.searchText}") { id, acronym, title } }` }),
    body: JSON.stringify({ query: '{ reviewProposals { id, acronym, title } }' }),
  })
  // .then(res => res.json())
   //.then(res => console.log(res.data));
    .then(res => {
      const jsn = res.json();
      // console.log('res.json() = ' + jsn);
      return jsn;
    })
    .then(res => {
      // console.log('res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.reviewProposalsById));
      return res.data.reviewProposals;
//      return res.data.reviewProposalsById;
    })
    .then(res => {
      // console.log('res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.reviewProposalsById));
      console.log('*********************** = ' + res );
      dispatch(receiveReviewProposals(reviewProposalsFilter, res));
      return res;
    });
*/
return dispatch(getGraphQLResult(reviewProposalsFilter));

//return dispatch(getObservableResult(reviewProposalsFilter));

/*
  return Observable.ajax('http://192.168.56.1:30334/nress/solicitations')
    .map(response => {
      console.log('RESPONSE = ' + response);
      console.log('response = ' + JSON.stringify(response.response));
      return response.response;
    })
    .map(reviewProposals => {
      console.log('reviewProposals = ' + JSON.stringify(reviewProposals));
      return reviewProposals;

    })
    .subscribe(reviewProposals => {
      console.log(JSON.stringify(reviewProposals));
      dispatch(receiveReviewProposals(reviewProposalsFilter, reviewProposals));
    })
*/
}


const getGraphQLResult = reviewProposalsFilter => dispatch => {
  fetch(`${config.review_proposals_address}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `{ reviewProposalsById (filter: "${reviewProposalsFilter.searchText}") { ASSIGNED_RESPONSE_ID, FIRST_NAME, LAST_NAME, RESPONSE_NUMBER, RESPONSE_SEQ_NUMBER, PSTATE } }` }),
    //body: JSON.stringify({ query: '{ solicitations { id, acronym, title } }' }),
  })
  // .then(res => res.json())
   //.then(res => console.log(res.data));
    .then(res => {
      const jsn = res.json();
      // console.log('res.json() = ' + jsn);
      return jsn;
    })
    .then(res => {
      //console.log('res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
//      return res.data.reviewProposals;
      return res.data.reviewProposalsById;
    })
    .then(res => {
      // console.log('res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
      //console.log('*********************** = ' + res );
      dispatch(receiveReviewProposals(reviewProposalsFilter, res));
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
    .map(reviewProposals => {
      //console.log('reviewProposals = ' + JSON.stringify(reviewProposals));
      return reviewProposals;
    })
    .subscribe(reviewProposals => {
      //console.log(JSON.stringify(reviewProposals));
      dispatch(receiveReviewProposals(reviewProposalsFilter, reviewProposals));
    })
}


const shouldFetchReviewProposals = (state, reviewProposalsFilter) => {
  const table = state.searchFilter[reviewProposalsFilter]
  //console.log('%%%%%%%%%%%%%%% table=' + JSON.stringify(table))
  return true
  if (!table) {
    return true
  }
  if (table.isFetching) {
    return false
  }
  return table.didInvalidate
}

export const fetchReviewProposalsIfNeeded = reviewProposalsFilter => (dispatch, getState) => {
  if (shouldFetchReviewProposals(getState(), reviewProposalsFilter)) {
    console.log('fetching reviewProposals')
    return dispatch(fetchReviewProposals(reviewProposalsFilter))
  }
}
