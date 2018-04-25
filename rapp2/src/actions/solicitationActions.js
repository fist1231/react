import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import config from '../../config/config.json'

export const REQUEST_SOLICITATIONS = 'REQUEST_SOLICITATIONS'
export const RECEIVE_SOLICITATIONS = 'RECEIVE_SOLICITATIONS'

export const REQUEST_UPDATE_SOLICITATION = 'REQUEST_UPDATE_SOLICITATION'
export const RECEIVE_UPDATE_SOLICITATION = 'RECEIVE_UPDATE_SOLICITATION'


export const SEARCH_SOLICITATIONS_FILTER = 'SEARCH_SOLICITATIONS_FILTER'
export const CB_SOLICITATIONS_FILTER = 'CB_SOLICITATIONS_FILTER'
export const INVALIDATE_SOLICITATIONS_FILTER = 'INVALIDATE_SOLICITATIONS_FILTER'

export const searchSolicitationsFilter = solicitationsFilter => ({
  type: SEARCH_SOLICITATIONS_FILTER,
  solicitationsFilter
})

export const invalidateSolicitationsFilter = solicitationsFilter => ({
  type: INVALIDATE_SOLICITATIONS_FILTER,
  solicitationsFilter
})


export const requestSolicitations = (solicitationsFilter) => ({
  type: REQUEST_SOLICITATIONS,
  solicitationsFilter,
  solicitationsTable: [],
  receivedAt: undefined
})

export const receiveSolicitations = (solicitationsFilter="{searchText:'a', isOpenOnly:false}", json) => ({
  type: RECEIVE_SOLICITATIONS,
  solicitationsFilter,
  solicitationsTable: json, //[{id:1001, name:"zhoppa-1001"}],
  receivedAt: Date.now()
})

export const requestUpdateSolicitation = (solicitation) => ({
  type: REQUEST_UPDATE_SOLICITATION,
  solicitation,
  result: undefined,
  receivedAt: undefined
})

export const receiveUpdateSolicitation = (solicitation="{}", json) => ({
  type: RECEIVE_UPDATE_SOLICITATION,
  solicitation,
  result: json, //[{solicitation_id:1001, ...}]
  receivedAt: Date.now()
})

const fetchSolicitations = (solicitationsFilter={searchText:'a', isOpenOnly:false}) => dispatch => {
  dispatch(requestSolicitations(solicitationsFilter))
  // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //return Observable.ajax('http://192.168.1.208:30334/nress/solicitations')

//  fetch('http://192.168.56.1:30334/graphql', {
//  console.log('------------------ solicitationsFilter.searchText = ' + `{ solicitationsById (filter: "${solicitationsFilter.searchText}") { id, acronym, title } }`);

/*

  fetch(`${config.solicitations_address}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    //body: JSON.stringify({ query: `{ solicitationsById (filter: "${solicitationsFilter.searchText}") { id, acronym, title } }` }),
    body: JSON.stringify({ query: '{ solicitations { id, acronym, title } }' }),
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
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
      return res.data.solicitations;
//      return res.data.solicitationsById;
    })
    .then(res => {
      // console.log('res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
      console.log('*********************** = ' + res );
      dispatch(receiveSolicitations(solicitationsFilter, res));
      return res;
    });
*/
return dispatch(getGraphQLResult(solicitationsFilter));

//return dispatch(getObservableResult(solicitationsFilter));

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


const getGraphQLResult = solicitationsFilter => dispatch => {
  fetch(`${config.solicitations_address}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `{ solicitationsById (filter: "${solicitationsFilter.searchText}") { SOLICITATION_ID, SOLICITATION_NUMBER, PUBLICATION_APPROVAL, FISCAL_YEAR, OMNIBUS_NUMBER, TITLE, REVIEW_DATE, SELECTION_DATE, RELEASE_DATE, CLOSE_DATE, ANNOUNCEMENT_TYPE, CONTAINER_TYPE, AUTHORIZED_BY, WITHDRAWAL_REASON, WITHDRAWAL_DATE, WITHDRAWN_BY } }` }),
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
      // console.log('res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
//      return res.data.solicitations;
      return res.data.solicitationsById;
    })
    .then(res => {
      // console.log('res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
      console.log('*********************** = ' + res );
      dispatch(receiveSolicitations(solicitationsFilter, res));
      return res;
    });

}

const getObservableResult = solicitationsFilter => dispatch => {
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
}


const shouldFetchSolicitations = (state, solicitationsFilter) => {
  const table = state.solicitationsByFilter[solicitationsFilter]
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

export const fetchSolicitationsIfNeeded = solicitationsFilter => (dispatch, getState) => {
  if (shouldFetchSolicitations(getState(), solicitationsFilter)) {
    console.log('fetching solicitations')
    return dispatch(fetchSolicitations(solicitationsFilter))
  }
}

const updateGraphQLSolicitation = solicitation => dispatch => {
  fetch(`${config.solicitations_address}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ query: `{ solicitationsById (filter: "${solicitationsFilter.searchText}") { SOLICITATION_ID, SOLICITATION_NUMBER, PUBLICATION_APPROVAL, FISCAL_YEAR, OMNIBUS_NUMBER, TITLE, REVIEW_DATE, SELECTION_DATE, RELEASE_DATE, CLOSE_DATE, ANNOUNCEMENT_TYPE, CONTAINER_TYPE, AUTHORIZED_BY, WITHDRAWAL_REASON, WITHDRAWAL_DATE, WITHDRAWN_BY } }` }),

    body: JSON.stringify({ query: `{ mutation ( solId: "${solicitation._id}", title: : "${solicitation.TITLE}")
        {
         solId
         title
        }
        =>
        {
          "data": {
            {
              "solId": "${solicitation._id}",
              "title": "${solicitation.TITLE}"
            }
          }
        }`
    }),
  })
    .then(res => {
      const jsn = res.json();
      // console.log('res.json() = ' + jsn);
      return jsn;
    })
    .then(res => {
      // console.log('res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
//      return res.data.solicitations;
      return res.data.solicitationsById;
    })
    .then(res => {
      // console.log('res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
      console.log('*********************** = ' + res );
      dispatch(receiveSolicitations(solicitationsFilter, res));
      return res;
    });

}


const updateSolicitation = (solicitation) => dispatch => {
  dispatch(requestUpdateSolicitation(solicitation))
  return dispatch(updateGraphQLSolicitation(solicitation));
}

export const updateSolicitationData = solicitation => (dispatch) => {
  console.log('xxxxxxx => starting updateSolicitationData')
  return dispatch(updateSolicitation(solicitation))
}
