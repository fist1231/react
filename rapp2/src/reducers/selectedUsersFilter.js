// import { combineReducers } from 'redux'
import {
  SELECT_USERS_FILTER, INVALIDATE_USERS_FILTER,
  REQUEST_USERS, RECEIVE_USERS
} from '../actions/userActions'
// import usersLst from './table'


const selectedUsersFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SELECT_USERS_FILTER: {
      console.log('============== returning: ' + action.usersFilter)
      return action.usersFilter
    }
    default:
      return state
  }
}

export default selectedUsersFilter
