import { combineReducers } from 'redux'
import users from './users'
import usersFilter from './usersFilter'
import selectedUsersFilter from './selectedUsersFilter'
import usersByUsersFilter from './usersByUsersFilter'

const usersApp = combineReducers({
  users,
  usersFilter,
  selectedUsersFilter,
  usersByUsersFilter
})

export default usersApp
