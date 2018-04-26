// import fetch from 'cross-fetch'
// import 'cross-fetch/polyfill';
// import 'whatwg-fetch'

// import { Observable } from 'rxjs/Observable'
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { map } from 'rxjs/operator/map';
import config from '../../config/config.json'


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

export const receiveUsers = (usersFilter="{searchText:'', isOpenOnly:false}", json) => ({
  type: RECEIVE_USERS,
  usersFilter,
  // usersTable: json.data.children.map(child => child.data),
  usersTable: json, //[{id:1001, name:"zhoppa-1001"}],
  receivedAt: Date.now()
})

const buildArray = json => {
  return [{id:1001, name:"u1001"}, {id:1002, name:"u1002"}, {id:1003, name:"u1003"}]
}

/*
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
*/

const fetchUsers = (usersFilter="{searchText:'', isOpenOnly:false}") => dispatch => {
  dispatch(requestUsers(usersFilter))
  // return fetch(`${config.users_address}nress/users`)
  //return Observable.ajax(`${config.users_address}nress/users`)
   // return Observable.ajax(`${config.users_address}nress/users`)
   return Observable.ajax(`${config.users_gateway_address}nress/users`)
    .map(response => {
//      console.log('RESPONSE = ' + response);
//      console.log('response = ' + JSON.stringify(response.response));
      return response.response;
      // map(response, 'users');
    })
    .map(users => {
//      console.log('users = ' + JSON.stringify(users));
      return users;

    })
    .subscribe(users => {
//      console.log(JSON.stringify(users));
      dispatch(receiveUsers(usersFilter, users));
    })
}



const shouldFetchUsers = (state, usersFilter) => {
  const table = state.usersByUsersFilter[usersFilter]
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

export const fetchUsersIfNeeded = usersFilter => (dispatch, getState) => {
  if (shouldFetchUsers(getState(), usersFilter)) {
    return dispatch(fetchUsers(usersFilter))
  }
}
