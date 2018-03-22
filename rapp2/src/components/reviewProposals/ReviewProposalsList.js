import React from 'react'
import PropTypes from 'prop-types';
import Table from './ReviewProposalsTable'
import Search from './Search'


const ReviewProposalsList = ({reviewProposals, searchFilter, onSearchChange}) => (
    <div>
      <Search searchFilter={searchFilter} />
      <Table list={reviewProposals} filter={searchFilter} onSearch={onSearchChange} />
    </div>
);

ReviewProposalsList.propTypes = {
   reviewProposals: PropTypes.array,
   searchFilter: PropTypes.object
}

export default ReviewProposalsList;
