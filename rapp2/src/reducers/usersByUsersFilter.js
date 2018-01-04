// import { combineReducers } from 'redux'
import {
  SELECT_USERS_FILTER, INVALIDATE_USERS_FILTER,
  REQUEST_USERS, RECEIVE_USERS
} from '../actions/tableActions'
// import usersLst from './table'


// const table = (state = {
//   isFetching: false,
//   didInvalidate: false,
//   users: []
// }, action) => {
//   switch (action.type) {
//     case INVALIDATE_USERS_FILTER:
//       return {
//         ...state,
//         didInvalidate: true
//       }
//     case REQUEST_USERS:
//       return {
//         ...state,
//         isFetching: true,
//         didInvalidate: false
//       }
//     case RECEIVE_USERS:
//       return {
//         ...state,
//         isFetching: false,
//         didInvalidate: false,
//         users: action.users,
//         lastUpdated: action.receivedAt
//       }
//     default:
//       return state
//   }
// }

const usersTable = (state = {
  isFetching: false,
  didInvalidate: false,
  usersTable: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_USERS_FILTER:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_USERS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_USERS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        usersTable: action.usersTable,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const usersByUsersFilter = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_USERS_FILTER:
    case RECEIVE_USERS:
    case REQUEST_USERS:
      return {
        ...state,
        [action.usersFilter]: usersTable(state[action.usersFilter], action)
      }
    default:
      return state
  }
}

// const tableReducer = combineReducers({
//   usersByUsersFilter,
//   selectedUsersFilter
// })

export default usersByUsersFilter
