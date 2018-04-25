import {
  REQUEST_UPDATE_SOLICITATION, RECEIVE_UPDATE_SOLICITATION
} from '../actions/solicitationActions'


const solicitation = (state = {
  isUpdating: false,
  solicitation: undefined,
  error: undefined
}, action) => {
  switch (action.type) {
    case REQUEST_UPDATE_SOLICITATION:
      return {
        ...state,
        isUpdating: true
      }
    case RECEIVE_UPDATE_SOLICITATION:
      return {
        ...state,
        isUpdating: false,
        solicitation: action.result,
        error: action.error,
        lastUpdated: action.receivedAt,
        solicitationsTable: state.solicitationsTable
      }
    default:
      return state
  }
}


export default solicitation
