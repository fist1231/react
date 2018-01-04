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
  usersFilter
})

export const receiveUsers = (usersFilter, json) => ({
  type: RECEIVE_USERS,
  usersFilter,
  // usersTable: json.data.children.map(child => child.data),
  users: Array.from(json),
  receivedAt: Date.now()
})

const fetchUsers = usersFilter => dispatch => {
  dispatch(requestUsers(usersFilter))
  // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  return fetch('http://192.168.1.208:30333/nress/users')
    // .then(response => {
    //   console.log(response.text());
    //   // console.log(JSON.stringify(response.json()));
    //   return response;
    // })
    .then(response => {return response.json()})
    // .then(json => console.log(Array.from(json)))
    .then(json => dispatch(receiveUsers(usersFilter, json)))
    .catch(err => {
      console.error(err);
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
