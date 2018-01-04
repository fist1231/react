import {
  SELECT_USERS_FILTER, INVALIDATE_USERS_FILTER,
  REQUEST_USERS, RECEIVE_USERS
} from '../actions/tableActions'

const usersTable = (state = {
  isFetching: false,
  didInvalidate: false,
  users: []
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
        users: action.users,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export default usersTable
