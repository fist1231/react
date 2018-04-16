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
          Header: "Pk",
          accessor: "_id"
        },
        {
          Header: "Id",
          accessor: "id"
        },
        {
          Header: "Name",
          accessor: "name"
        },
        {
          Header: "status",
          accessor: "status"
        },
        {
          Header: "Date Created",
          accessor: "created_date"
        }
      ]}
    />
  </div>
);

DisplayTable.propTypes = {
  users: PropTypes.array
}

export default DisplayTable;
