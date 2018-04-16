import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ReviewProposalsList from '../../components/reviewProposals/ReviewProposalsList'
import { connect } from 'react-redux'
import { searchReviewProposalsFilter, fetchReviewProposalsIfNeeded, invalidateReviewProposalsFilter, getReviewProposalDetails } from '../../actions/reviewProposalsActions'
import { editProposal, hideModal, deleteProposal } from '../../actions/modal/modalActions'
import wait from '../../../public/wait2.gif'
import config from '../../../config/config.json'
import { reviewProposalsMock } from '../../../config/MockData.js'
import { withRouter } from 'react-router-dom'

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

  render() {

    const { searchFilter, reviewProposalsTable, isFetching, lastUpdated, previewDetails } = this.props
      // console.log('^^^^^^^^^^^^previewDetails='+previewDetails.previewDetails)
    const isEmpty = reviewProposalsTable.length === 0
    const isLiveData = config.live_data;
    const dataSource = isLiveData?reviewProposalsTable:reviewProposalsMock();
    return (
      <div>
          <ReviewProposalsList reviewProposals={dataSource} searchFilter={searchFilter} onSearchChange={this.props.onSearchChange} onEditProposal={this.props.onEditProposal} onPreview={this.props.onPreview} previewFlag={previewDetails} onDeleteProposal={this.props.onDelete} />

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
  const { searchFilter, reviewProposals, previewDetails } = state
  const {
    isFetching,
    lastUpdated,
    reviewProposalsTable,
  } = reviewProposals[searchFilter] || {
    isFetching: true,
    reviewProposalsTable: [],
  }

  return {
    searchFilter,
    reviewProposalsTable,
    isFetching,
    lastUpdated,
    previewDetails
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onSearchChange:filter => dispatch(searchReviewProposalsFilter(filter)),
  onEditProposal:proposal => dispatch(editProposal(proposal)),
  onPreview:flag => dispatch(getReviewProposalDetails(flag)),
  onDelete:proposal => dispatch(deleteProposal(proposal)),
})


//export default ReviewProposals;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewProposalsView))


ReviewProposalsView.propTypes = {
   //reviewProposals: PropTypes.array
}
