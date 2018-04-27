import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import config from '../../config/config.json'

export const REQUEST_SOLICITATIONS = 'REQUEST_SOLICITATIONS'
export const RECEIVE_SOLICITATIONS = 'RECEIVE_SOLICITATIONS'

export const REQUEST_UPDATE_SOLICITATION = 'REQUEST_UPDATE_SOLICITATION'
export const RECEIVE_UPDATE_SOLICITATION = 'RECEIVE_UPDATE_SOLICITATION'

export const REQUEST_ADD_SOLICITATION = 'REQUEST_ADD_SOLICITATION'
export const RECEIVE_ADD_SOLICITATION = 'RECEIVE_ADD_SOLICITATION'

export const REQUEST_DELETE_SOLICITATION = 'REQUEST_DELETE_SOLICITATION'
export const RECEIVE_DELETE_SOLICITATION = 'RECEIVE_DELETE_SOLICITATION'

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

export const requestUpdateSolicitation = (solicitation, solicitationsFilter) => ({
  type: REQUEST_UPDATE_SOLICITATION,
  solicitationsFilter,
  solicitation,
  result: undefined,
  error: undefined,
  receivedAt: undefined
})

export const receiveUpdateSolicitation = (solicitation="{}", solicitationsFilter, json) => ({
  type: RECEIVE_UPDATE_SOLICITATION,
  solicitationsFilter,
  solicitation,
  result: json, //[{solicitation_id:1001, ...}]
  error: json?undefined:"error-1",
  receivedAt: Date.now()
})

export const requestAddSolicitation = (solicitation, solicitationsFilter) => ({
  type: REQUEST_ADD_SOLICITATION,
  solicitationsFilter,
  solicitation,
  result: undefined,
  error: undefined,
  receivedAt: undefined
})

export const receiveAddSolicitation = (solicitation="{}", solicitationsFilter, json) => ({
  type: RECEIVE_ADD_SOLICITATION,
  solicitationsFilter,
  solicitation,
  result: json, //[{solicitation_id:1001, ...}]
  error: json?undefined:"error-1",
  receivedAt: Date.now()
})

export const requestDeleteSolicitation = (solicitation, solicitationsFilter) => ({
  type: REQUEST_DELETE_SOLICITATION,
  solicitationsFilter,
  solicitation,
  result: undefined,
  error: undefined,
  receivedAt: undefined
})

export const receiveDeleteSolicitation = (solicitation="{}", solicitationsFilter, json) => ({
  type: RECEIVE_DELETE_SOLICITATION,
  solicitationsFilter,
  solicitation,
  result: json, //[{solicitation_id:1001, ...}]
  error: json?undefined:"error-2",
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
    body: JSON.stringify({ query: `{ solicitationsById (filter: "${solicitationsFilter.searchText}") { _id, SOLICITATION_ID, SOLICITATION_NUMBER, PUBLICATION_APPROVAL, FISCAL_YEAR, OMNIBUS_NUMBER, TITLE, REVIEW_DATE, SELECTION_DATE, RELEASE_DATE, CLOSE_DATE, ANNOUNCEMENT_TYPE, CONTAINER_TYPE, AUTHORIZED_BY, WITHDRAWAL_REASON, WITHDRAWAL_DATE, WITHDRAWN_BY } }` }),
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
      // console.log('*********************** = ' + res );
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

const updateGraphQLSolicitation = (solicitation, solicitationsFilter) => dispatch => {
  // console.log('++++++++++ updateGraphQLSolicitation solicitation = ' + JSON.stringify(solicitation));
  fetch(`${config.solicitations_address}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ query: `{ solicitationsById (filter: "${solicitationsFilter.searchText}") { SOLICITATION_ID, SOLICITATION_NUMBER, PUBLICATION_APPROVAL, FISCAL_YEAR, OMNIBUS_NUMBER, TITLE, REVIEW_DATE, SELECTION_DATE, RELEASE_DATE, CLOSE_DATE, ANNOUNCEMENT_TYPE, CONTAINER_TYPE, AUTHORIZED_BY, WITHDRAWAL_REASON, WITHDRAWAL_DATE, WITHDRAWN_BY } }` }),

    body: JSON.stringify({ query: `mutation { updateSolicitation (
         _id: "${solicitation._id}",
         SOLICITATION_ID: "${solicitation.id}",
         SOLICITATION_NUMBER: "${solicitation.solNumber}",
         PUBLICATION_APPROVAL: ${solicitation.pubApproval},
         FISCAL_YEAR: ${solicitation.year},
         OMNIBUS_NUMBER: "${solicitation.omnibus}",
         TITLE: "${solicitation.title}",
         REVIEW_DATE: ${solicitation.reviewDate?"\""+solicitation.reviewDate+"\"":null},
         SELECTION_DATE: ${solicitation.selectionDate?"\""+solicitation.selectionDate+"\"":null},
         RELEASE_DATE: "${solicitation.releaseDate}",
         CLOSE_DATE: "${solicitation.closeDate}",
         ANNOUNCEMENT_TYPE: "${solicitation.announcementType}",
         CONTAINER_TYPE: "${solicitation.containerType}",
         AUTHORIZED_BY: "${solicitation.authorizedBy}",
         WITHDRAWAL_REASON: "${solicitation.withdrawalReason}",
         WITHDRAWAL_DATE: ${solicitation.withdrawalDate?"\""+solicitation.withdrawalDate+"\"":null},
         WITHDRAWN_BY: "${solicitation.withdrawnBy}"
       )
            {
              _id,
              SOLICITATION_ID,
              SOLICITATION_NUMBER,
              PUBLICATION_APPROVAL,
              FISCAL_YEAR,
              OMNIBUS_NUMBER,
              TITLE,
              REVIEW_DATE,
              SELECTION_DATE,
              RELEASE_DATE,
              CLOSE_DATE,
              ANNOUNCEMENT_TYPE,
              CONTAINER_TYPE,
              AUTHORIZED_BY,
              WITHDRAWAL_REASON,
              WITHDRAWAL_DATE,
              WITHDRAWN_BY
            }
        }`
    }),
  })
    .then(res => {
      const jsn = res.json();
      console.log('++++++++++ updateGraphQLSolicitation res.json() = ' + JSON.stringify(jsn));
      return jsn;
    })
    .then(res => {
      console.log('++++++++++ updateGraphQLSolicitation res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
//      return res.data.solicitations;
      return res.data.updateSolicitation;
    })
    .then(res => {
      // console.log('res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
      console.log('*********************** = ' + JSON.stringify(res) );
      dispatch(receiveUpdateSolicitation(solicitation, res));

      // dispatch(getGraphQLResult(solicitationsFilter)); // Re-fetch list of solicitations after update
      console.log('*********************** updateGraphQLSolicitation filter = ' + JSON.stringify(solicitationsFilter) );
      dispatch(fetchSolicitationsIfNeeded(solicitationsFilter)); // Re-fetch list of solicitations after update
      return res;
    });

}


const updateSolicitation = (solicitation, solicitationsFilter) => dispatch => {
  dispatch(requestUpdateSolicitation(solicitation))
  return dispatch(updateGraphQLSolicitation(solicitation, solicitationsFilter));
}

export const updateSolicitationData = (solicitation, solicitationsFilter) => (dispatch) => {
  console.log('xxxxxxx => starting updateSolicitationData; solicitationsFilter='+JSON.stringify(solicitationsFilter))
  return dispatch(updateSolicitation(solicitation, solicitationsFilter))
}


const addGraphQLSolicitation = (solicitation, solicitationsFilter) => dispatch => {
  console.log('++++++++++ addGraphQLSolicitation solicitation = ' + JSON.stringify(solicitation));

  var reviewDate = solicitation.reviewDate?solicitation.reviewDate:null;

  fetch(`${config.solicitations_address}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ query: `{ solicitationsById (filter: "${solicitationsFilter.searchText}") { SOLICITATION_ID, SOLICITATION_NUMBER, PUBLICATION_APPROVAL, FISCAL_YEAR, OMNIBUS_NUMBER, TITLE, REVIEW_DATE, SELECTION_DATE, RELEASE_DATE, CLOSE_DATE, ANNOUNCEMENT_TYPE, CONTAINER_TYPE, AUTHORIZED_BY, WITHDRAWAL_REASON, WITHDRAWAL_DATE, WITHDRAWN_BY } }` }),

    body: JSON.stringify({ query: `mutation { addSolicitation (
      SOLICITATION_ID: "",
      SOLICITATION_NUMBER: "${solicitation.solNumber}",
      PUBLICATION_APPROVAL: ${solicitation.pubApproval},
      FISCAL_YEAR: ${solicitation.year},
      OMNIBUS_NUMBER: "${solicitation.omnibus}",
      TITLE: "${solicitation.title}",
      REVIEW_DATE: ${solicitation.reviewDate?"\""+solicitation.reviewDate+"\"":null},
      SELECTION_DATE: ${solicitation.selectionDate?"\""+solicitation.selectionDate+"\"":null},
      RELEASE_DATE: "${solicitation.releaseDate}",
      CLOSE_DATE: "${solicitation.closeDate}",
      ANNOUNCEMENT_TYPE: "${solicitation.announcementType}",
      CONTAINER_TYPE: "${solicitation.containerType}",
      AUTHORIZED_BY: "${solicitation.authorizedBy}",
      WITHDRAWAL_REASON: "${solicitation.withdrawalReason}",
      WITHDRAWAL_DATE: ${solicitation.withdrawalDate?"\""+solicitation.withdrawalDate+"\"":null},
      WITHDRAWN_BY: "${solicitation.withdrawnBy}"
    )
            {
              SOLICITATION_ID,
              SOLICITATION_NUMBER,
              PUBLICATION_APPROVAL,
              FISCAL_YEAR,
              OMNIBUS_NUMBER,
              TITLE,
              REVIEW_DATE,
              SELECTION_DATE,
              RELEASE_DATE,
              CLOSE_DATE,
              ANNOUNCEMENT_TYPE,
              CONTAINER_TYPE,
              AUTHORIZED_BY,
              WITHDRAWAL_REASON,
              WITHDRAWAL_DATE,
              WITHDRAWN_BY
            }
        }`
    }),
  })
    .then(res => {
      const jsn = res.json();
       console.log('++++++++++ addGraphQLSolicitation res.json() = ' + JSON.stringify(jsn));
      return jsn;
    })
    .then(res => {
       console.log('++++++++++ addGraphQLSolicitation res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
//      return res.data.solicitations;
      return res.data.addSolicitation;
    })
    .then(res => {
      // console.log('res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
      console.log('*********************** = ' + JSON.stringify(res) );
      dispatch(receiveAddSolicitation(solicitation, res));

      // dispatch(getGraphQLResult(solicitationsFilter)); // Re-fetch list of solicitations after update
      console.log('*********************** addGraphQLSolicitation filter = ' + JSON.stringify(solicitationsFilter) );
      dispatch(fetchSolicitationsIfNeeded(solicitationsFilter)); // Re-fetch list of solicitations after update
      return res;
    });

}

const addSolicitation = (solicitation, solicitationsFilter) => dispatch => {
  dispatch(requestAddSolicitation(solicitation))
  return dispatch(addGraphQLSolicitation(solicitation, solicitationsFilter));
}

export const addSolicitationData = (solicitation, solicitationsFilter) => (dispatch) => {
  console.log('xxxxxxx => starting addSolicitationData')
  return dispatch(addSolicitation(solicitation, solicitationsFilter))
}


const deleteGraphQLSolicitation = (solicitation, solicitationsFilter) => dispatch => {
  console.log('++++++++++ deleteGraphQLSolicitation solicitation = ' + JSON.stringify(solicitation));
  console.log('++++++++++ deleteGraphQLSolicitation solicitationsFilter = ' + JSON.stringify(solicitationsFilter));
  fetch(`${config.solicitations_address}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ query: `{ solicitationsById (filter: "${solicitationsFilter.searchText}") { SOLICITATION_ID, SOLICITATION_NUMBER, PUBLICATION_APPROVAL, FISCAL_YEAR, OMNIBUS_NUMBER, TITLE, REVIEW_DATE, SELECTION_DATE, RELEASE_DATE, CLOSE_DATE, ANNOUNCEMENT_TYPE, CONTAINER_TYPE, AUTHORIZED_BY, WITHDRAWAL_REASON, WITHDRAWAL_DATE, WITHDRAWN_BY } }` }),

    body: JSON.stringify({ query: `mutation { deleteSolicitation ( _id: "${solicitation._id}" )
            {
              id,
              result,
              error
            }
        }`
    }),
  })
    .then(res => {
      const jsn = res.json();
      // console.log('++++++++++ updateGraphQLSolicitation res.json() = ' + JSON.stringify(jsn));
      return jsn;
    })
    .then(res => {
      // console.log('++++++++++ updateGraphQLSolicitation res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
//      return res.data.solicitations;
      return res.data.deleteSolicitation;
    })
    .then(res => {
      // console.log('res JSON = ' + JSON.stringify(res));
      //console.log('res.data = ' + JSON.stringify(res.data.solicitationsById));
      console.log('*********************** = ' + JSON.stringify(res) );
      dispatch(receiveDeleteSolicitation(solicitation, res));

      // dispatch(getGraphQLResult(solicitationsFilter)); // Re-fetch list of solicitations after update
      console.log('*********************** updateGraphQLSolicitation filter = ' + JSON.stringify(solicitationsFilter) );
      dispatch(fetchSolicitationsIfNeeded(solicitationsFilter)); // Re-fetch list of solicitations after update
      return res;
    });

}


const deleteSolicitation = (solicitation, solicitationsFilter) => dispatch => {
  dispatch(requestDeleteSolicitation(solicitation))
  return dispatch(deleteGraphQLSolicitation(solicitation, solicitationsFilter));
}

export const deleteSolicitationData = (solicitation, solicitationsFilter) => (dispatch) => {
  console.log('xxxxxxx => starting deleteSolicitationData; solicitationsFilter='+JSON.stringify(solicitationsFilter))
  return dispatch(deleteSolicitation(solicitation, solicitationsFilter))
}
