import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import { NavLink as RRNavLink, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { browserHistory } from 'react-router';
import {TabMenu} from 'primereact/components/tabmenu/TabMenu';
import { BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router';

const menuClick = () => {
  console.log('---------- clicked menu item');
  //history.push('/users');
<Redirect to="/users" push />
  return <Redirect push to="/users" />;
}

const items= (history) => ([
            {label: '', icon: 'fa-home', command:()=>{ history.push('/'); }},
            {label: 'Users', command:()=>{ menuClick(); /*history.push('/users');*/ }, usr: "/users"},
            {label: 'Users Table', command:()=>{ history.push('/usersTable'); }},
            {label: 'Solicitations', command:()=>{ history.push('/solicitations'); }},
            {label: 'Review Proposals', command:()=>{ history.push('/reviewProposals'); }}
        ]);

const Cmp1 = ({ title, history, location }) => (
  <div>
    <TabMenu model={items(history)} style={{cursor:'default'}} activeItem={location} />
  </div>
);

const Nav = ({ history }) => (
  <div>
        {/*
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/users'>Users</Link></li>
                  <li><Link to='/usersTable'>Users table</Link></li>
                  <li><Link to='/solicitations'>Solicitations</Link></li>
                  <li><Link to='/reviewProposals'>Review Proposals</Link></li>
                </ul>
                <hr />
              </nav>
          <Menubar model={items}/>*/}
          <div>
            <Route path="/" render={(props) => <Cmp1 {...props} title="Navigate elsewhere" />} />
          </div>
  </div>
)
{/*
Nav.propTypes = {
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }),
};
*/}

export default withRouter(Nav);
