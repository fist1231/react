import { combineReducers } from 'redux'
import users from './users'
import usersFilter from './usersFilter'
import selectedUsersFilter from './selectedUsersFilter'
import usersByUsersFilter from './usersByUsersFilter'
import foundSolicitationsFilter from './foundSolicitationsFilter'
//import cbSolicitationsFilter from './cbSolicitationsFilter'
import solicitationsByFilter from './solicitationsByFilter'
// import usersLst from './table'

const usersApp = combineReducers({
  users,
  usersFilter,
  selectedUsersFilter,
  usersByUsersFilter,
  foundSolicitationsFilter,
//  cbSolicitationsFilter,
  solicitationsByFilter,
  // usersLst
})

export default usersApp
