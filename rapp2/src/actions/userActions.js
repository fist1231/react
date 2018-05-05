// import fetch from 'cross-fetch'
// import 'cross-fetch/polyfill';
// import 'whatwg-fetch'

// import { Observable } from 'rxjs/Observable'
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { map } from 'rxjs/operator/map';
import config from '../../config/config.json'
import axios from 'axios';


export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SELECT_USERS_FILTER = 'SELECT_USERS_FILTER'
export const INVALIDATE_USERS_FILTER = 'INVALIDATE_USERS_FILTER'

export const REQUEST_UPDATE_USER = 'REQUEST_UPDATE_USER'
export const RECEIVE_UPDATE_USER = 'RECEIVE_UPDATE_USER'


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


export const requestUpdateUser = (user, usersFilter) => ({
  type: REQUEST_UPDATE_USER,
  usersFilter,
  user,
  result: undefined,
  error: undefined,
  receivedAt: undefined
})

export const receiveUpdateUser = (user="{}", usersFilter, json) => ({
  type: RECEIVE_UPDATE_USER,
  usersFilter,
  user,
  result: json,
  error: json?undefined:"error-user1",
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

const fetchUsers = (usersFilter) => dispatch => {
  dispatch(requestUsers(usersFilter))
  // return fetch(`${config.users_address}nress/users`)
  //return Observable.ajax(`${config.users_address}nress/users`)
   // return Observable.ajax(`${config.users_address}nress/users`)
   // return Observable.ajax(`${config.users_gateway_address}nress/users`)
   var searchTerm = usersFilter.searchText?"/"+usersFilter.searchText:"";
   return Observable.ajax(`${config.gateway_address}nress/search${searchTerm}`)
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

const updateObservableUser = (user, usersFilter) => dispatch => {
  console.log('------------- updateObservableUser user='+ JSON.stringify(user));
  const usr = {
    _id: user._id,
    NSPIRES_USER_ID: user.id,
    FIRST_NAME: user.firstName,
    LAST_NAME: user.lastName,
    USERNAME: user.username,
    REGISTRATION_DATE: user.registrationlDate
  }
  console.log('------------- updateObservableUser usr='+ JSON.stringify(usr));

// async function updateObservableUser(user, usersFilter, dispatch) {
   // var searchTerm = usersFilter.searchText?"/"+usersFilter.searchText:"";
   axios.put(`${config.gateway_address}nress/users/${user._id}`, { user: usr })
    .then(function (response) {
      console.log('----------- here comes response ------------');
      console.log(response);
      dispatch(receiveUpdateUser(user));
      dispatch(fetchUsers(usersFilter));

    })
    .catch(function (error) {
      console.log(error);
    });
}



const updateUser = (user, usersFilter) => dispatch => {
  dispatch(requestUpdateUser(user))
  return dispatch(updateObservableUser(user, usersFilter));
}

export const updateUserData = (user, usersFilter) => (dispatch) => {
  console.log('xxxxxxx => starting updateUserData; usersFilter='+JSON.stringify(usersFilter))
  return dispatch(updateUser(user, usersFilter))
}
