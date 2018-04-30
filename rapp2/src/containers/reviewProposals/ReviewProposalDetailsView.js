import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ReviewProposalDetails from '../../components/reviewProposals/ReviewProposalDetails'
import { connect } from 'react-redux'
import { getReviewProposalDetails, fetchReviewProposalDetailsIfNeeded, invalidateReviewProposalDetails } from '../../actions/reviewProposalDetailsActions'
import { editProposal, hideModal, deleteProposal } from '../../actions/modal/modalActions'
import wait from '../../../public/wait2.gif'
import config from '../../../config/config.json'
import { reviewProposalsMock } from '../../../config/MockData.js'
import { withRouter } from 'react-router-dom'

class ReviewProposalDetailsView extends Component {

  componentDidMount() {
    const { dispatch, match } = this.props
    console.log('^^^^^^^^^^^^ componentDidMount');

    console.log('searchFilter=' + JSON.stringify(match.params.id))
    console.log('this.onSearchChange=' + this.props.onSearchChange)
    dispatch(fetchReviewProposalDetailsIfNeeded(match.params.id))
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.match.params.id !== this.props.match.params.id) {
  //     const { dispatch, match } = nextProps
  //     dispatch(fetchReviewProposalDetailsIfNeeded(match.params.id))
  //   }
  // }

  handleRefreshClick(e) {
    e.preventDefault()
    console.log('^^^^^^^^^^^^ handleRefreshClick');
 
    const { dispatch, match } = this.props
    dispatch(invalidateReviewProposalDetails(match.params.id))
    dispatch(fetchReviewProposalDetailsIfNeeded(match.params.id))
  }

  render() {

    const  { proposal, isFetching, lastUpdated, match } = this.props
    console.log('^^^^^^^^^^^^proposal='+JSON.stringify(proposal))
    reviewProposalsMock().find(prp => {
      console.log('^^^^^^^^^^^^prp='+JSON.stringify(prp));
      return (prp.ASSIGNED_RESPONSE_ID === match.params.id)
    } )
    console.log('^^^^^^^^^^^^match.params.id='+JSON.stringify(reviewProposalsMock().find(prp => (prp.ASSIGNED_RESPONSE_ID === match.params.id))))
    const isLiveData = config.live_data;
    const isFetchingSource = isLiveData?isFetching:false;
    const dataSource = isLiveData?proposal[0]:reviewProposalsMock().find(prp => (prp.ASSIGNED_RESPONSE_ID === match.params.id));
    return (
      <div>
          <ReviewProposalDetails proposal={dataSource} isLoading={isFetchingSource} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const { reviewProposalDetails } = state
  const {
    isFetching,
    lastUpdated,
    proposal,
  } = reviewProposalDetails[ownProps.match.params.id] || {
    isFetching: true,
    proposal: [],
  }
  return {
    isFetching,
    lastUpdated,
    proposal
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewProposalDetailsView))


ReviewProposalDetailsView.propTypes = {
   //reviewProposals: PropTypes.array
}
