import {
  REQUEST_UPDATE_USER, RECEIVE_UPDATE_USER
} from '../actions/userActions'


const user = (state = {
  isUpdating: false,
  user: undefined,
  error: undefined
}, action) => {
  switch (action.type) {
    case REQUEST_UPDATE_USER:
      return {
        ...state,
        isUpdating: true
      }
    case RECEIVE_UPDATE_USER:
      return {
        ...state,
        isUpdating: false,
        user: action.result,
        error: action.error,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}


export default user
