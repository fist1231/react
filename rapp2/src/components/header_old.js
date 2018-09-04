import React from 'react'
// import ico from '../../public/favicon.ico'
import {TabMenu} from 'primereact/components/tabmenu/TabMenu';
import {Menubar} from 'primereact/components/menubar/Menubar';
import {InputText} from 'primereact/components/inputtext/InputText';
import {Button} from 'primereact/components/button/Button';
import './header.css'
import Login from '../Login'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MenuAppBar from './MenuAppBar'

const items=[
            {label: 'Accounts', icon: 'fal fa-user'},
            {label: 'Organization', icon: 'fas fa-building'},
            {label: 'Proposals/NOI', icon: 'fal fa-table'},
            {label: 'Reviews', icon: 'fas fa-eye'},
            {label: 'Selections', icon: 'fas fa-check'}
        ];

const Header = (props) => (
  <div>
  {/*
      <Menubar model={items}>
          <InputText placeholder="Search" type="text"/>
          <Button label="Logout" icon="fa-sign-out" style={{marginLeft:4}}/>
      </Menubar>
*/}
  <div className="nspiresHeader">
    <div className="container-fluid">

      <MenuAppBar />

      <div className="row">

        <div className="col nspiresLogoContainer">
            <a className="navbar-brand" href="#"></a>
        </div>
        <div className="col ">
        <div className="">
          <Login />
</div>
          </div>
        <div className="col col-auto">
          <div className="nasaLogo float-right">
          </div>

        </div>
      </div>
    </div>
  </div>

      {/*<div className="mt-1 text-center">
      <div className="text-center">
      <div className="text-right float-right">
        <img src={ico} style={{marginRight:22}} />
      </div>
        <h2 className="App-title">Nspires Refresh Demo</h2>
        <p className="App-intro">
          Live Data (Mongo and Oracle)
        </p>
      </div>
    </div>*/}


  </div>
)

export default Header
