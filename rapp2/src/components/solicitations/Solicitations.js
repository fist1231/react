import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Search from './Search'
import Table from './Table'
import { connect } from 'react-redux'
import { searchSolicitationsFilter, fetchSolicitationsIfNeeded, invalidateSolicitationsFilter } from '../../actions/solicitationActions'

class Solicitations extends React.Component {

  componentDidMount() {
    //const selectedSolicitationsFilter = {searchText: , isOpenOnly: false}
    // const {searchText, isOpenOnly} = selectedSolicitationsFilter
    const { dispatch, foundSolicitationsFilter } = this.props
    dispatch(fetchSolicitationsIfNeeded(foundSolicitationsFilter))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.foundSolicitationsFilter !== this.props.foundSolicitationsFilter) {
      const { dispatch, foundSolicitationsFilter } = nextProps
      dispatch(fetchSolicitationsIfNeeded(foundSolicitationsFilter))
    }
  }



  handleChange = (nextSolicitationsFilter) => {
    this.props.dispatch(fetchSolicitationsIfNeeded(nextSolicitationsFilter))
  }

  render() {

    const { foundSolicitationsFilter, solicitationsTable, isFetching, lastUpdated } = this.props


    return (
      <div>
        <h1>Solicitations</h1>
        <Search value={foundSolicitationsFilter} onChange={this.handleChange}  />
        <Table solicitations={solicitationsTable} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { foundSolicitationsFilter, solicitationsByFilter } = state
  const {
    isFetching,
    lastUpdated,
    solicitationsTable: solicitationsTable
  } = solicitationsByFilter[foundSolicitationsFilter] || {
    isFetching: true,
    solicitationsTable: []
  }

  return {
    foundSolicitationsFilter,
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
