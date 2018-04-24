import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table'
import 'react-table/react-table.css'



const DisplayTable = ({ usersLst, onUserClick }) => (
  <div>
    Total number of Records: {usersLst.length}
    <ReactTable
      className="-striped -highlight"
      data={usersLst}
      defaultPageSize={10}
      SubComponent={(row) => {
        // console.log('+++++++ row='+JSON.stringify(row)) ;
        return <div style={{padding: '10px'}}>
          <table>
            <thead>
              <tr>
                <th>Param</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full name:</td>
                <td>{row.original.SALUTATION} {row.original.FIRST_NAME} {row.original.MIDDLE_INITIAL} {row.original.LAST_NAME} {row.original.SUFFIX}</td>
              </tr>
              <tr>
                <td>Id:</td>
                <td>{row.original._id}</td>
              </tr>
              <tr>
                <td>User ID:</td>
                <td>{row.original.NSPIRES_USER_ID}</td>
              </tr>
              <tr>
                <td>Created by:</td>
                <td>{row.original.CREATION_PATH}</td>
              </tr>
              <tr>
                <td>Activated on:</td>
                <td>{row.original.ACTIVATIONTIME}</td>
              </tr>
              <tr>
                <td>Challenge question:</td>
                <td>{row.original.CHALLENGE_QUESTION}</td>
              </tr>
              <tr>
                <td>Sysefus id:</td>
                <td>{row.original.SYSEFUS_ID}</td>
              </tr>
              <tr>
                <td>Demographics data id:</td>
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

DisplayTable.propTypes = {
  users: PropTypes.array
}

export default DisplayTable;
