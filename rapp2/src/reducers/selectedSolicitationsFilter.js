import {
  SELECT_SOLICITATIONS_FILTER, INVALIDATE_SOLICITATIONS_FILTER,
  REQUEST_SOLICITATIONS, RECEIVE_SOLICITATIONS
} from '../actions/solicitationActions'


const selectedSolicitationsFilter = (state = {searchText: '', isChecked: false}, action) => {
  switch (action.type) {
    case SELECT_SOLICITATIONS_FILTER: {
      console.log('============== returning: ' + JSON.stringify(action.solicitationsFilter))
      return action.solicitationsFilter
    }
    default:
      return state
  }
}

export default selectedSolicitationsFilter
