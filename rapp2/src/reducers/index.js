import { combineReducers } from 'redux'
import users from './users'
import user from './user'
import usersFilter from './usersFilter'
import selectedUsersFilter from './selectedUsersFilter'
import usersByUsersFilter from './usersByUsersFilter'
import foundSolicitationsFilter from './foundSolicitationsFilter'
//import cbSolicitationsFilter from './cbSolicitationsFilter'
import solicitationsByFilter from './solicitationsByFilter'
import solicitation from './solicitation'
// import usersLst from './table'
//import foundReviewProposalsFilter from './reviewProposals/foundReviewProposalsFilter'
//import reviewProposalsByFilter from './reviewProposals/reviewProposalsByFilter'
import searchFilter from './reviewProposals/searchFilter'
import reviewProposals from './reviewProposals/reviewProposals'
import previewDetails from './reviewProposals/previewDetails'
import reviewProposalDetails from './reviewProposals/reviewProposalDetails'
import modal from './modal/modal'
import auth from './auth'

const usersApp = combineReducers({
  users,
  user,
  usersFilter,
  selectedUsersFilter,
  usersByUsersFilter,
  foundSolicitationsFilter,
//  cbSolicitationsFilter,
  solicitationsByFilter,
  solicitation,
  //foundReviewProposalsFilter,
  //reviewProposalsByFilter
  searchFilter,
  reviewProposals,
  reviewProposalDetails,
  previewDetails,
  modal,
  auth
})

export default usersApp
