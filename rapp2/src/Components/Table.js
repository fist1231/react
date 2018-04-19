import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table'
import 'react-table/react-table.css'



const DisplayTable = ({ usersLst, onUserClick }) => (
  <div>
    <ReactTable
className="-striped -highlight"
      data={usersLst}
      columns={[
        {
          Header: "Last Name",
          accessor: "LAST_NAME"
        },
        {
          Header: "First name",
          accessor: "FIRST_NAME"
        },
        {
          Header: "Username",
          accessor: "USERNAME"
        },
        {
          Header: "Date Registered",
          accessor: "REGISTRATION_DATE"
        }
      ]}
    />
  </div>
);

DisplayTable.propTypes = {
  users: PropTypes.array
}

export default DisplayTable;
