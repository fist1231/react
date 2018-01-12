import React, { Component } from 'react'

const Search = () => (
  <div>
    <h2>Search</h2>
    <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show open solicitations
        </p>
      </form>

  </div>
)

export default Search;
