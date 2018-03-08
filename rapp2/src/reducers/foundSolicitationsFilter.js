import {
  SEARCH_SOLICITATIONS_FILTER
} from '../actions/solicitationActions'


const foundSolicitationsFilter = (state = {searchText:'', isOpenOnly:false}, action) => {
  switch (action.type) {
    case SEARCH_SOLICITATIONS_FILTER: {
      console.log('============== returning: ' + JSON.stringify(action.solicitationsFilter))
      return action.solicitationsFilter
    }
    default:
      return state
  }
}

export default foundSolicitationsFilter
