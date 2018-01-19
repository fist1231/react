import {
  SELECT_SOLICITATIONS_FILTER, INVALIDATE_SOLICITATIONS_FILTER,
  REQUEST_SOLICITATIONS, RECEIVE_SOLICITATIONS
} from '../actions/solicitationActions'


const selectedSolicitationsFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SELECT_SOLICITATIONS_FILTER:
      return action.solicitationsFilter
    default:
      return state
  }
}

export default selectedSolicitationsFilter
