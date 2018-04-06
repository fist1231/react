import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ReviewProposalsList from '../../components/reviewProposals/ReviewProposalsList'
import { connect } from 'react-redux'
import { searchReviewProposalsFilter, fetchReviewProposalsIfNeeded, invalidateReviewProposalsFilter } from '../../actions/reviewProposalsActions'
import wait from '../../../public/wait2.gif'

class ReviewProposalsView extends Component {

  componentDidMount() {
    const { dispatch, searchFilter } = this.props
    console.log('searchFilter=' + JSON.stringify(searchFilter))
    console.log('this.onSearchChange=' + this.props.onSearchChange)
    dispatch(fetchReviewProposalsIfNeeded(searchFilter))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchFilter !== this.props.searchFilter) {
      const { dispatch, searchFilter } = nextProps
      dispatch(fetchReviewProposalsIfNeeded(searchFilter))
    }
  }

  handleRefreshClick(e) {
    e.preventDefault()
 
    const { dispatch, searchFilter } = this.props
    dispatch(invalidateReviewProposalsFilter(searchFilter))
    dispatch(fetchReviewProposalsIfNeeded(searchFilter))
  }

  nTemplate(rowData, column) {
    return <div>
        <button className="btn btn-primary " icon="fa-close">Edit</button>
        <button className="btn btn-primary " icon="fa-close">Delete</button>
    </div>;
  }


  render() {
    const { searchFilter, reviewProposalsTable, isFetching, lastUpdated } = this.props
    const isEmpty = reviewProposalsTable.length === 0
    return (
      <div>
        <ReviewProposalsList reviewProposals={reviewProposalsTable} templ={this.props.numberTemplate} searchFilter={searchFilter} onSearchChange={this.props.onSearchChange} />
        {/*}
        {
          isEmpty ?
            (isFetching ? <div className="text-center"><h3>Please wait ...</h3></div> : <div className="text-center"><h3>No Data.</h3></div>)
            : <ReviewProposalsList reviewProposals={reviewProposalsTable} searchFilter={searchFilter} onSearchChange={this.props.onSearchChange} />
        }
        */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { searchFilter, reviewProposals } = state
  const {
    isFetching,
    lastUpdated,
    reviewProposalsTable
  } = reviewProposals[searchFilter] || {
    isFetching: true,
    reviewProposalsTable: []
  }

  return {
    searchFilter,
    reviewProposalsTable,
    isFetching,
    lastUpdated
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onSearchChange:filter => dispatch(searchReviewProposalsFilter(filter)),
  numberTemplate:(rowData, column) => dispatch(nTemplate(rowData, column))
})


//export default ReviewProposals;
export default connect(mapStateToProps ,mapDispatchToProps)(ReviewProposalsView)


ReviewProposalsView.propTypes = {
   //reviewProposals: PropTypes.array
}
