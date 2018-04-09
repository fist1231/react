import { combineReducers } from 'redux'
import users from './users'
import usersFilter from './usersFilter'
import selectedUsersFilter from './selectedUsersFilter'
import usersByUsersFilter from './usersByUsersFilter'
import foundSolicitationsFilter from './foundSolicitationsFilter'
//import cbSolicitationsFilter from './cbSolicitationsFilter'
import solicitationsByFilter from './solicitationsByFilter'
// import usersLst from './table'
//import foundReviewProposalsFilter from './reviewProposals/foundReviewProposalsFilter'
//import reviewProposalsByFilter from './reviewProposals/reviewProposalsByFilter'
import searchFilter from './reviewProposals/searchFilter'
import reviewProposals from './reviewProposals/reviewProposals'
import modal from './modal/modal'

const usersApp = combineReducers({
  users,
  usersFilter,
  selectedUsersFilter,
  usersByUsersFilter,
  foundSolicitationsFilter,
//  cbSolicitationsFilter,
  solicitationsByFilter,
  //foundReviewProposalsFilter,
  //reviewProposalsByFilter
  searchFilter,
  reviewProposals,
  modal
})

export default usersApp
