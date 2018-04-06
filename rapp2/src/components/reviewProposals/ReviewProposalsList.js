import React from 'react'
import PropTypes from 'prop-types';
import Table from './ReviewProposalsTable'
import Search from './Search'


const ReviewProposalsList = ({reviewProposals, searchFilter, onSearchChange, numberTemplate}) => (
    <div>
      <Search searchFilter={searchFilter} />
      <Table list={reviewProposals} filter={searchFilter} onSearch={onSearchChange}  templ={numberTemplate} />
    </div>
);

ReviewProposalsList.propTypes = {
   reviewProposals: PropTypes.array,
   searchFilter: PropTypes.object
}

export default ReviewProposalsList;
