import React, { Component } from "react";
import PropTypes from "prop-types";

const Search = ({ searchFilter, onChange }) => (
  <div>
    <form>
      <div className="form-row">
        <div className="col-md-8 offset-md-2">
          <div className="form-inline">
            <div className="col">
              <div className="search searchfilter">
                <span className="fa fa-search" />
                <input
                  className="form-control w-100"
                  type="search"
                  id="search"
                  placeholder="search text"
                  onChange={e =>
                    onChange({
                      searchText: e.target.value,
                      isOpenOnly: searchFilter ? searchFilter.isOpenOnly : false
                    })
                  }
                />
              </div>
            </div>
{/*
            <div className="form-check mb-2 mr-sm-2 mb-sm-0">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={e =>
                    onChange({
                      searchText: searchFilter ? searchFilter.searchText : "",
                      isOpenOnly: e.target.checked
                    })
                  }
                />{" "}
                Only show open solicitations
              </label>
            </div>
*/}
          </div>
        </div>
      </div>
    </form>
  </div>
);

Search.propTypes = {
  //searchFilter: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
