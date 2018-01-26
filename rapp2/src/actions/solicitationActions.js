import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import config from '../../config/config.json'

export const REQUEST_SOLICITATIONS = 'REQUEST_SOLICITATIONS'
export const RECEIVE_SOLICITATIONS = 'RECEIVE_SOLICITATIONS'

export const SELECT_SOLICITATIONS_FILTER = 'SELECT_SOLICITATIONS_FILTER'
export const INVALIDATE_SOLICITATIONS_FILTER = 'INVALIDATE_SOLICITATIONS_FILTER'

export const selectSolicitationsFilter = usolicitationsFilter => ({
  type: SELECT_SOLICITATIONS_FILTER,
  solicitationsFilter
})

export const invalidateSolicitationsFilter = solicitationsFilter => ({
  type: INVALIDATE_SOLICITATIONS_FILTER,
  solicitationsFilter
})


export const requestSolicitations = (solicitationsFilter) => ({
  type: REQUEST_SOLICITATIONS,
  solicitationsTable: [],
  receivedAt: undefined
})

export const receiveSolicitations = (solicitationsFilter, json) => ({
  type: RECEIVE_SOLICITATIONS,
  solicitationsFilter,
  solicitationsTable: json, //[{id:1001, name:"zhoppa-1001"}],
  receivedAt: Date.now()
})

const fetchSolicitations = solicitationsFilter => dispatch => {
  dispatch(requestSolicitations(solicitationsFilter))
  // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //return Observable.ajax('http://192.168.1.208:30334/nress/solicitations')

//  fetch('http://192.168.56.1:30334/graphql', {
  fetch(`${config.server_address}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: '{ solicitations { id, acronym, title } }' }),
  })
  // .then(res => res.json())
  // .then(res => console.log(res.data));
    .then(res => {
      const jsn = res.json();

      // console.log('res.json() = ' + jsn);
      return jsn;
    })
    .then(res => {
      // console.log('res JSON = ' + JSON.stringify(res));
      // console.log('res.data = ' + JSON.stringify(res.data.solicitations));
      dispatch(receiveSolicitations(solicitationsFilter, res.data.solicitations));
    });

/*
  return Observable.ajax('http://192.168.56.1:30334/nress/solicitations')
    .map(response => {
      console.log('RESPONSE = ' + response);
      console.log('response = ' + JSON.stringify(response.response));
      return response.response;
    })
    .map(solicitations => {
      console.log('solicitations = ' + JSON.stringify(solicitations));
      return solicitations;

    })
    .subscribe(solicitations => {
      console.log(JSON.stringify(solicitations));
      dispatch(receiveSolicitations(solicitationsFilter, solicitations));
    })
*/
}

const shouldFetchSolicitations = (state, solicitationsFilter) => {
  const table = state.solicitationsByFilter[solicitationsFilter]
  if (!table) {
    return true
  }
  if (table.isFetching) {
    return false
  }
  return table.didInvalidate
}

export const fetchSolicitationsIfNeeded = solicitationsFilter => (dispatch, getState) => {
  if (shouldFetchSolicitations(getState(), solicitationsFilter)) {
    return dispatch(fetchSolicitations(solicitationsFilter))
  }
}
