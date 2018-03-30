import React, { Component } from 'react'
import PropTypes from 'prop-types';

const Search = ({ searchFilter, onChange }) => (
  <div>
    <form>
      <div className="form-row">
        <div className="form-group col">
          <div className="input-group margin-bottom-sm search-class-width">
              <span className="input-group-addon search-class icon-search"><i className="fa fa-search"></i></span>
              <input type="email" className="form-control search-class input-search" id="searchSol" placeholder="Enter Solicitations"
              onChange={e => onChange({searchText: e.target.value, isOpenOnly:searchFilter?searchFilter.isOpenOnly:false})}/>
              </div>
          </div>
        <div className="form-group col"></div>
      </div>
    <div className="form-row">
      <div className="form-group col">
        <input type="checkbox"
         onChange={e => onChange({searchText: (searchFilter?searchFilter.searchText:''), isOpenOnly:e.target.checked})}
  />
  {' '}
  Only show open solicitations
        </div>
      </div>
    </form>
  </div>
)

Search.propTypes = {
  searchFilter: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Search;
