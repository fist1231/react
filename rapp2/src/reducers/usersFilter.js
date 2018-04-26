import {
  SELECT_USERS_FILTER
} from '../actions/tableActions'


const usersFilter = (state = {searchText:'', isOpenOnly:false}, action) => {
  switch (action.type) {
    case SELECT_USERS_FILTER:
    console.log('============== returning: ' + JSON.stringify(action.usersFilter))
      return action.usersFilter
    default:
      return state
  }
}

export default usersFilter
