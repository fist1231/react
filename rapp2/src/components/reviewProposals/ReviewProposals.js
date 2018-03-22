import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Search from './Search'
import Table from './Table'
import DTable from './DTable'
import { connect } from 'react-redux'
import { searchReviewProposalsFilter, fetchReviewProposalsIfNeeded, invalidateReviewProposalsFilter } from '../../actions/reviewProposalsActions'

class ReviewProposals extends React.Component {

  componentDidMount() {
    //const selectedReviewProposalsFilter = {searchText: , isOpenOnly: false}
    // const {searchText, isOpenOnly} = selectedReviewProposalsFilter
    const { dispatch, foundReviewProposalsFilter } = this.props
    dispatch(fetchReviewProposalsIfNeeded(foundReviewProposalsFilter))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.foundReviewProposalsFilter !== this.props.foundReviewProposalsFilter) {
      const { dispatch, foundReviewProposalsFilter } = nextProps
      dispatch(fetchReviewProposalsIfNeeded(foundReviewProposalsFilter))
    }
  }



  handleChange = (nextReviewProposalsFilter) => {
    this.props.dispatch(fetchReviewProposalsIfNeeded(nextReviewProposalsFilter))
  }


  render() {

    {/*const { foundReviewProposalsFilter, reviewProposalsTable, isFetching, lastUpdated } = this.props&*/}


    return (
      <div>
        <Search value={foundReviewProposalsFilter} onChange={this.handleChange} />
        <DTable reviewProposals={reviewProposalsTable} value={foundReviewProposalsFilter} onChange={this.handleChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { foundReviewProposalsFilter, reviewProposalsByFilter } = state
  const {
    isFetching,
    lastUpdated,
    reviewProposalsTable: reviewProposalsTable
  } = reviewProposalsByFilter[foundReviewProposalsFilter] || {
    isFetching: true,
    reviewProposalsTable: []
  }

  return {
    foundReviewProposalsFilter,
    reviewProposalsTable,
    isFetching,
    lastUpdated
  }
}

ReviewProposals.propTypes = {
   reviewProposals: PropTypes.array
}

//export default ReviewProposals;
export default connect(mapStateToProps)(ReviewProposals);

{/*
const ReviewProposals = () => (
  <div>
    <h1>ReviewProposals</h1>
    <Search />
    <Table reviewProposals={this.props.reviewProposals} />
  </div>
)
ropo
export default ReviewProposals;
*/}

// const REVIEW_PROPOSALS = [
//   {id: '1111', acronym: 'Acronym-1', title: 'Solicitation 1'},
//   {id: '2222', acronym: 'Acronym-2', title: 'Solicitation 2'},
//   {id: '3333', acronym: 'Acronym-3', title: 'Solicitation 3'},
//   {id: '4444', acronym: 'Acronym-4', title: 'Solicitation 4'},
//   {id: '5555', acronym: 'Acronym-5', title: 'Solicitation 5'}
// ];
