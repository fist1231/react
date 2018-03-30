import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UsersList from '../containers/UsersList'
import UsersTable from '../containers/UsersTable'
import Solicitations from '../components/solicitations/Solicitations'
import ReviewProposals from '../containers/reviewProposals/ReviewProposalsView'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <div>
  <main>
  <div className="container-fluid">
    <Switch>
      <Route path='/users' component={UsersList}/>
      <Route path='/usersTable' component={UsersTable}/>
{/*      <Route path='/solicitations'><Solicitations solicitations={SOLICITATIONS} /></Route> */}
      <Route path='/solicitations'><Solicitations /></Route>
      <Route path='/reviewProposals'><ReviewProposals /></Route>
    </Switch>
    </div>
  </main>
  </div>
)

export default Main
