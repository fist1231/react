import React from 'react'
import ico from '../../public/favicon.ico'
import {TabMenu} from 'primereact/components/tabmenu/TabMenu';
import {Menubar} from 'primereact/components/menubar/Menubar';
import {InputText} from 'primereact/components/inputtext/InputText';
import {Button} from 'primereact/components/button/Button';
import './header.css'
import Login from '../Login'

const items=[
            {label: 'Accounts', icon: 'fal fa-user'},
            {label: 'Organization', icon: 'fas fa-building'},
            {label: 'Proposals/NOI', icon: 'fal fa-table'},
            {label: 'Reviews', icon: 'fas fa-eye'},
            {label: 'Selections', icon: 'fas fa-check'}
        ];

const Header = () => (
  <div>
  {/*
      <Menubar model={items}>
          <InputText placeholder="Search" type="text"/>
          <Button label="Logout" icon="fa-sign-out" style={{marginLeft:4}}/>
      </Menubar>
*/}
  <div className="nspiresHeader">
    <div className="container-fluid">
      <div className="row">
        <div className="col nspiresLogoContainer">
            <a className="navbar-brand" href="#"></a>
        </div>
        <div className="col">
          <div className="nasaLogo float-right">
          </div>
          <div className="float-right">
            <Login />
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
