import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Search from './Search'
import Table from './Table'
import { connect } from 'react-redux'
import { selectSolicitationsFilter, fetchSolicitationsIfNeeded, invalidateSolicitationsFilter } from '../../actions/solicitationActions'

class Solicitations extends React.Component {

  componentDidMount() {
    const { dispatch, selectedSolicitationsFilter } = this.props
    dispatch(fetchSolicitationsIfNeeded(selectedSolicitationsFilter))
  }


  render() {

    const { selectedSolicitationsFilter, solicitationsTable, isFetching, lastUpdated } = this.props


    return (
      <div>
        <h1>Solicitations</h1>
        <Search />
        <Table solicitations={solicitationsTable} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedSolicitationsFilter, solicitationsByFilter } = state
  const {
    isFetching,
    lastUpdated,
    solicitationsTable: solicitationsTable
  } = solicitationsByFilter[selectedSolicitationsFilter] || {
    isFetching: true,
    solicitationsTable: []
  }

  return {
    selectedSolicitationsFilter,
    solicitationsTable,
    isFetching,
    lastUpdated
  }
}

Solicitations.propTypes = {
   solicitations: PropTypes.array
}

//export default Solicitations;
export default connect(mapStateToProps)(Solicitations);

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

// const SOLICITATIONS = [
//   {id: '1111', acronym: 'Acronym-1', title: 'Solicitation 1'},
//   {id: '2222', acronym: 'Acronym-2', title: 'Solicitation 2'},
//   {id: '3333', acronym: 'Acronym-3', title: 'Solicitation 3'},
//   {id: '4444', acronym: 'Acronym-4', title: 'Solicitation 4'},
//   {id: '5555', acronym: 'Acronym-5', title: 'Solicitation 5'}
// ];
