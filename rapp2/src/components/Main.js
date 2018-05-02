import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UsersList from '../containers/users/UsersListView'
import UsersTable from '../containers/users/UsersTableView'
import Solicitations from '../containers/solicitations/Solicitations'
import ReviewProposals from '../containers/reviewProposals/ReviewProposalsView'
import ReviewProposalDetailsView from '../containers/reviewProposals/ReviewProposalDetailsView';
import HomePriv from './HomePriv'
import NoMatch from '../NoMatch'
import HomeCalendar from '../components/calendar/HomeCalendar'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <div>
  <main>
  <div>
    <Switch>
      <Route path='/' exact component={HomePriv} />
      <Route path='/calendar' component={HomeCalendar}/>
      <Route path='/users' component={UsersList}/>
      <Route path='/usersTable' component={UsersTable}/>
{/*      <Route path='/solicitations'><Solicitations solicitations={SOLICITATIONS} /></Route> */}
      <Route path='/solicitations'><Solicitations /></Route>
      <Route exact path='/reviewProposals'><ReviewProposals /></Route>
      <Route path='/reviewProposals/proposal/:id'><ReviewProposalDetailsView /></Route>
      <Route component={NoMatch} />
    </Switch>
    </div>
  </main>
  </div>
)

export default Main
