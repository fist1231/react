import { combineReducers } from 'redux'
import users from './users'
import usersFilter from './usersFilter'
import selectedUsersFilter from './selectedUsersFilter'
import usersByUsersFilter from './usersByUsersFilter'
// import usersLst from './table'

const usersApp = combineReducers({
  users,
  usersFilter,
  selectedUsersFilter,
  usersByUsersFilter,
  // usersLst
})

export default usersApp
