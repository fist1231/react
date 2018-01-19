import { combineReducers } from 'redux'
import users from './users'
import usersFilter from './usersFilter'
import selectedUsersFilter from './selectedUsersFilter'
import usersByUsersFilter from './usersByUsersFilter'
import selectedSolicitationsFilter from './selectedSolicitationsFilter'
import solicitationsByFilter from './solicitationsByFilter'
// import usersLst from './table'

const usersApp = combineReducers({
  users,
  usersFilter,
  selectedUsersFilter,
  usersByUsersFilter,
  selectedSolicitationsFilter,
  solicitationsByFilter,
  // usersLst
})

export default usersApp
