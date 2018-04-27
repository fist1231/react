import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table'
import 'react-table/react-table.css'



const UsersTable = ({ usersLst, onUserClick }) => (
  <div>

    <div className="tableHeader">
    <div className="row">
    <div className="col">
  Total number of Records: {usersLst.length}
    </div>
</div>
    </div>

    <ReactTable
      className="-striped -highlight"
      data={usersLst}
      pageSizeOptions={[15, 25, 50, 100]}
      defaultPageSize={15}
      minRows={0}
      sorted={[{ // the sorting model for the table
          id: 'LAST_NAME',
          desc: false
        }, {
          id: 'FIRST_NAME',
          desc: false
      }]}
      SubComponent={(row) => {
        // console.log('+++++++ row='+JSON.stringify(row)) ;
        return <div  style={{ padding: "10px" }} className="userDetail">

          <table className="table table-bordered dataTable">
  <thead>
    <tr>
      <th scope="col" width="20%">Label</th>
      <th scope="col">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="rowLabel">Full name:</td>
      <td>{row.original.SALUTATION} {row.original.FIRST_NAME} {row.original.MIDDLE_INITIAL} {row.original.LAST_NAME} {row.original.SUFFIX}</td>
    </tr>
    <tr>
      <td className="rowLabel">ID:</td>
      <td>{row.original._id}</td>
    </tr>
    <tr>
      <td className="rowLabel">User ID:</td>
      <td>{row.original.NSPIRES_USER_ID}</td>
    </tr>

    <tr>
      <td className="rowLabel">Created by:</td>
      <td>{row.original.CREATION_PATH}</td>
    </tr>
    <tr>
      <td className="rowLabel">Activated on:</td>
      <td>{row.original.ACTIVATIONTIME}</td>
    </tr>

    <tr>
      <td className="rowLabel">Challenge question:</td>
      <td>{row.original.CHALLENGE_QUESTION}</td>
    </tr>

    <tr>
      <td className="rowLabel">Sysefus id:</td>
      <td>{row.original.SYSEFUS_ID}</td>
    </tr>

    <tr>
      <td className="rowLabel">Demographics data id:</td>
      <td>{row.original.DEM_DATA_ID}</td>
    </tr>


  </tbody>
</table>



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
