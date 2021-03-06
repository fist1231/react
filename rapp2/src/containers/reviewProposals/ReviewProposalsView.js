import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ReviewProposalsList from '../../components/reviewProposals/ReviewProposalsList'
import { connect } from 'react-redux'
import { searchReviewProposalsFilter, fetchReviewProposalsIfNeeded, invalidateReviewProposalsFilter, getReviewProposalDetails } from '../../actions/reviewProposalsActions'
import { editProposal, hideModal, deleteProposal } from '../../actions/modal/modalActions'
// import wait from '../../../public/wait2.gif'
import config from '../../../config/config.json'
import { reviewProposalsMock } from '../../../config/MockData.js'
import { withRouter } from 'react-router-dom'
import HelpDrawer from '../../components/drawer/HelpDrawer'
import HelpButton from '../../components/drawer/HelpButton'
import ReviewProposalsHelpContent from '../../components/drawer/ReviewProposalsHelp'
import { RingLoader, GridLoader, FadeLoader } from "react-spinners";


class ReviewProposalsView extends Component {

  constructor(props) {
    super(props);
    this.state = {...this.state, open: false};
  }

  componentDidMount() {
    const { dispatch, searchFilter } = this.props
    console.log('^^^^^^^^^^^^ReviewProposalsView componentDidMount');

    console.log('searchFilter=' + JSON.stringify(searchFilter))
    console.log('this.onSearchChange=' + this.props.onSearchChange)
    dispatch(fetchReviewProposalsIfNeeded(searchFilter))
  }

  componentWillReceiveProps(nextProps) {
    console.log('^^^^^^^^^^^^ReviewProposalsView componentWillReceiveProps');
    if (nextProps.searchFilter !== this.props.searchFilter) {
      const { dispatch, searchFilter } = nextProps
      dispatch(fetchReviewProposalsIfNeeded(searchFilter))
    }
  }

  componentWillUpdate(nextProps) {
    console.log('^^^^^^^^^^^^ReviewProposalsView componentWillUpdate');
  }

  componentDidUpdate(nextProps) {
    console.log('^^^^^^^^^^^^ReviewProposalsView componentDidUpdate');
  }


  handleRefreshClick(e) {
    e.preventDefault();
    console.log('^^^^^^^^^^^^handleRefreshClick ReviewProposalView');
    const { dispatch, searchFilter } = this.props
    dispatch(invalidateReviewProposalsFilter(searchFilter))
    dispatch(fetchReviewProposalsIfNeeded(searchFilter))
  }

  handleToggle = () => this.setState({...this.state, open: !this.state.open});

  render() {

    const { searchFilter, reviewProposalsTable, isFetching, lastUpdated, previewDetails } = this.props
      // console.log('^^^^^^^^^^^^previewDetails='+previewDetails.previewDetails)
    const isEmpty = reviewProposalsTable?(reviewProposalsTable.length === 0):true;
    const isLiveData = config.live_data;
    const dataSource = isLiveData?reviewProposalsTable:reviewProposalsMock();
    return (
      <div>
          {(dataSource?dataSource.length:0) > 0 ? (
            <div>

              <div className="helpRwLocation"><HelpButton buttonText={"Help"} buttonClick={this.handleToggle} /></div>
              <ReviewProposalsList reviewProposals={dataSource} searchFilter={searchFilter} onSearchChange={this.props.onSearchChange} onEditProposal={this.props.onEditProposal} onPreview={this.props.onPreview} previewFlag={previewDetails} onDeleteProposal={this.props.onDelete} />
              <HelpDrawer toggled={this.state.open} onToggleChange={this.handleToggle}>
                <ReviewProposalsHelpContent />
              </HelpDrawer>

            </div>
        ) : (
          <div className="row">
            <div className="col-md-5 offset-md-3 text-center loader"><FadeLoader color={"#0275d8"} loading={true} /></div>
          </div>
        )}
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
