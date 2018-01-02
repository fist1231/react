import { combineReducers } from 'redux'
import users from './users'
import usersFilter from './usersFilter'

const usersApp = combineReducers({
  users,
  usersFilter
})

export default usersApp
