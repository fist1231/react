import React from 'react'
import ico from '../../public/favicon.ico'

const Header = () => (
  <div>
    <h1 className="App-title">Users List</h1>
    <p className="App-intro">
      Users from Mongo DB
    </p>
    <img src={ico} />
  </div>
)

export default Header
