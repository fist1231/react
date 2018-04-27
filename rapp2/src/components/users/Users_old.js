import React, { Component } from 'react';
import User from './User'
import PropTypes from 'prop-types';
import ReactTable from 'react-table'
import 'react-table/react-table.css'


class Users extends Component {
  render() {
    let userList;
    if(this.props.users) {
      userList = this.props.users.map(usr => {
        //console.log(project);
        return (
          <User key={usr.name} user={usr} />
        );
      });
    }
    return (
      <div className="Users">
        <h3>List 1:</h3>
        {userList}

        <ReactTable
          data={this.props.users}
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
  }
}

Users.propTypes = {
  users: PropTypes.array
}

export default Users;
