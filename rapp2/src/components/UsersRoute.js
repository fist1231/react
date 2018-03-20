import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UsersList from '../containers/UsersList'
import UsersTable from '../containers/UsersTable'

const UsersRoute = () => (
  <Switch>
    <Route exact path='/users' component={ UsersList }/>
    <Route path='/users/:id' component={User}/>
    <Route exact path='/usersTable' component={ UsersTable }/>
  </Switch>
)


export default UsersRoute
