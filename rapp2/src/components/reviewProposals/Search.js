import React, { Component } from 'react'
import PropTypes from 'prop-types';

const Search = ({ searchFilter }) => (
  <div>
{/*
    <h2>Search</h2>
    <form>
        <input type="text"
               placeholder="Search..."
               onChange={e => onChange({searchText: e.target.value, isOpenOnly:searchFilter?searchFilter.isOpenOnly:false})}
        />
        <p>
          <input type="checkbox"
                 onChange={e => onChange({searchText: (searchFilter?searchFilter.searchText:''), isOpenOnly:e.target.checked})}
          />
          {' '}
          Only show open review
        </p>
      </form>
*/}
  </div>
)

Search.propTypes = {
  searchFilter: PropTypes.object.isRequired,
  //onChange: PropTypes.func.isRequired
}

export default Search;
