import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { NavLink as RRNavLink, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
//import { browserHistory } from 'react-router';
//import {TabMenu} from 'primereact/components/tabmenu/TabMenu';
//import { BrowserRouter as Router } from 'react-router-dom'
//import { Redirect } from 'react-router';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './mainNav.css'


{/*
const items= (history) => ([
            {label: '', icon: 'fa-home', command:()=>{ history.push('/'); }},
            {label: 'Users', command:()=>{ history.push('/users'); }},
            {label: 'Users Table', command:()=>{ history.push('/usersTable'); }},
            {label: 'Solicitations', command:()=>{ history.push('/solicitations'); }},
            {label: 'Review Proposals', command:()=>{ history.push('/reviewProposals'); }}
        ]);


        const items= (history) => ([
                    {label: '', icon: 'fa-home', command:()=>{ history.push('/'); }},
                    {label: 'Users', command:(event)=>{ ((onclick) => {selIt = event.item; console.log(onclick);history.push('/users');})() }},
                    {label: 'Users Table', command:(event)=>{ console.log(event.item); selIt = _.find(items(history), 'label', event.item.label); history.push('/usersTable'); }},
                    {label: 'Solicitations', command:(event)=> {history.push('/solicitations'); selIt = _.find(items(history), 'label', event.item.label); } },
                    {label: 'Review Proposals', command:(event)=>{ selIt = event.item;window.location.hash="/"; }}
                ]);
*/}


const MainNav = (propsy, location) => (
        <div className="container-fluid mainNavContainer">
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

              <Menubar model={items}/>
        */}
    <div className="row">
  <div className="col-md-12">
          <Nav tabs className="mainNav">
            <NavItem>
              <NavLink activeclassname='active' tag={RRNavLink} to="/" exact>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeclassname='active' tag={RRNavLink} to="/usersTable">Users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeclassname='active' tag={RRNavLink} to="/solicitations">Solicitations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeclassname='active' tag={RRNavLink} to="/reviewProposals">Review Proposals</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeclassname='active' disabled href="#">Selections</NavLink>
            </NavItem>
          </Nav>
          </div>

        </div>


</div>
)


export default MainNav
{/*export default withRouter(Nav);*/}
