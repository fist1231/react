import fetch from 'cross-fetch'
// import 'cross-fetch/polyfill';
// import 'whatwg-fetch'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SELECT_USERS_FILTER = 'SELECT_USERS_FILTER'
export const INVALIDATE_USERS_FILTER = 'INVALIDATE_USERS_FILTER'

export const selectUsersFilter = usersFilter => ({
  type: SELECT_USERS_FILTER,
  usersFilter
})

export const invalidateUsersFilter = usersFilter => ({
  type: INVALIDATE_USERS_FILTER,
  usersFilter
})

export const requestUsers = (usersFilter) => ({
  type: REQUEST_USERS,
  usersFilter,
  usersTable: [],
  receivedAt: undefined
})

export const receiveUsers = (usersFilter, json) => ({
  type: RECEIVE_USERS,
  usersFilter,
  // usersTable: json.data.children.map(child => child.data),
  usersTable: json, //[{id:1001, name:"zhoppa-1001"}],
  receivedAt: Date.now()
})

const buildArray = json => {
  return [{id:101, name:"zhoppa"}, {id:102, name:"zhoppa-2"}, {id:103, name:"zhoppa-3"}]
}

const fetchUsers = usersFilter => dispatch => {
  dispatch(requestUsers(usersFilter))
  // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  return fetch('http://192.168.1.208:30333/nress/users')
    // .then(response => {
    //   console.log(response.text());
    //   // console.log(JSON.stringify(response.json()));
    //   return response;
    // })
    .then(response => response.json())
    // .then(json => console.log(JSON.parse(JSON.stringify(json))))
    .then(json => dispatch(receiveUsers(usersFilter, json)))
    .catch(err => {
      console.log('Fetching failed: ' + err);
    })
}

const shouldFetchUsers = (state, usersFilter) => {
  const table = state.usersByUsersFilter[usersFilter]
  if (!table) {
    return true
  }
  if (table.isFetching) {
    return false
  }
  return table.didInvalidate
}

export const fetchUsersIfNeeded = usersFilter => (dispatch, getState) => {
  if (shouldFetchUsers(getState(), usersFilter)) {
    return dispatch(fetchUsers(usersFilter))
  }
}
