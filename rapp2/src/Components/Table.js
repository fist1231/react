import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table'
import 'react-table/react-table.css'


const Table = ({ users, onUserClick }) => (
  <div className="table">
    <ReactTable
      data={users}
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

Table.propTypes = {
  users: PropTypes.array
}

export default Table;
