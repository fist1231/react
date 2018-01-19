import {
  SELECT_SOLICITATIONS_FILTER, INVALIDATE_SOLICITATIONS_FILTER,
  REQUEST_SOLICITATIONS, RECEIVE_SOLICITATIONS
} from '../actions/solicitationActions'



const solicitationsTable = (state = {
  isFetching: false,
  didInvalidate: false,
  solicitationsTable: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_SOLICITATIONS_FILTER:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_SOLICITATIONS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_SOLICITATIONS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        solicitationsTable: action.solicitationsTable,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const solicitationsByFilter = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_SOLICITATIONS_FILTER:
    case RECEIVE_SOLICITATIONS:
    case REQUEST_SOLICITATIONS:
      return {
        ...state,
        [action.solicitationsFilter]: solicitationsTable(state[action.solicitationsFilter], action)
      }
    default:
      return state
  }
}

export default solicitationsByFilter
