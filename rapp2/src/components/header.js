import React from 'react'
import ico from '../../public/favicon.ico'

const Header = () => (
  <div>
    <hr />
    <img src={ico} />
    <h1 className="App-title">Nspires React Demo</h1>
    <p className="App-intro">
      Data is either Mongo or Oracle DB
    </p>
    <hr />
  </div>
)

export default Header
