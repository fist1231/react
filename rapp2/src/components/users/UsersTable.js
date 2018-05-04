import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import EditUserForm from '../forms/formik/EditUserForm';



const UsersTable = ({ usersLst, onUserClick, filter, onEditUser }) => (
  <div>

    <div className="tableHeader">
    <div className="row">
    <div className="col">
  <span className="totalNumber">Total Records: {usersLst.length}</span>
    </div>
</div>
    </div>

    <ReactTable
      className="-striped -highlight"
      data={usersLst}
      pageSizeOptions={[15, 25, 50, 100]}
      defaultPageSize={15}
      minRows={0}
      defaultSorted={[{ // the sorting model for the table
          id: 'LAST_NAME',
          desc: false
        }, {
          id: 'FIRST_NAME',
          desc: false
      }]}
      SubComponent={(row) => {
        // console.log('+++++++ row='+JSON.stringify(row)) ;
        return <div  style={{ padding: "10px" }} className="userDetail">
          <EditUserForm user={row.original} filter={filter} updateUser={onEditUser} />
        </div>}
      }
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
/*        , {
          Header: "Expand",
          columns: [
            {
              expander: true,
              Header: () => <strong>More</strong>,
              width: 65,
              Expander: ({ isExpanded, ...rest }) =>
                <div>
                  {isExpanded
                    ? <span>&#x2299;</span>
                    : <span>&#x2295;</span>}
                </div>,
              style: {
                cursor: "pointer",
                fontSize: 25,
                padding: "0",
                textAlign: "center",
                userSelect: "none"
              },
              Footer: () => <span>&hearts;</span>
            }
          ]
        }
*/
      ]}
    />
  </div>
);

UsersTable.propTypes = {
  users: PropTypes.array
}

export default UsersTable;
