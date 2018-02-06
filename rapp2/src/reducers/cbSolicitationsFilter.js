import {
  CB_SOLICITATIONS_FILTER
} from '../actions/solicitationActions'


const cbSolicitationsFilter = (state = false, action) => {
  switch (action.type) {
    case CB_SOLICITATIONS_FILTER: {
      console.log('============== returning: ' + JSON.stringify(action.solicitationsFilter))
      return action.solicitationsFilter
    }
    default:
      return state
  }
}

export default cbSolicitationsFilter
