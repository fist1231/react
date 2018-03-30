import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { browserHistory } from 'react-router';
import {TabMenu} from 'primereact/components/tabmenu/TabMenu';
import { BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router';


const items= (history) => ([
            {label: '', icon: 'fa-home', command:()=>{ history.push('/'); }},
            {label: 'Users', command:()=>{ history.push('/users'); }},
            {label: 'Users Table', command:()=>{ history.push('/usersTable'); }},
            {label: 'Solicitations', command:()=>{ history.push('/solicitations'); }},
            {label: 'Review Proposals', command:()=>{ history.push('/reviewProposals'); }}
        ]);

const Cmp1 = ({ title, history }) => (
  <div>
    <TabMenu model={items(history)} style={{cursor:'default'}} />
  </div>
);

const Nav = () => (
        <nav>
        <div className="container-fluid">
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

          {/*<Menubar model={items}/>*/}
          <div>
            <Route path="/" render={(props) => <Cmp1 {...props} title="Navigate elsewhere" />} />
          </div>
      </div>
</nav>
)



export default Nav;
