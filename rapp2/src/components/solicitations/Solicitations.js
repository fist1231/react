import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Search from './Search'
import Table from './Table'

class Solicitations extends React.Component {
  render() {
    return (
      <div>
        <h1>Solicitations</h1>
        <Search />
        <Table solicitations={this.props.solicitations} />
      </div>
    );
  }
}

Solicitations.propTypes = {
   user: PropTypes.array
}

export default Solicitations;

{/*
const Solicitations = () => (
  <div>
    <h1>Solicitations</h1>
    <Search />
    <Table solicitations={this.props.solicitations} />
  </div>
)

export default Solicitations;
*/}
