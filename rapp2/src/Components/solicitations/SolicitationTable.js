import React, { Component } from "react";
import Modal from "react-modal";
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }
};

const SolicitationTable = ({solicitations, onAddSolicitation, onEditSolicitation, onDeleteSolicitation, solicitationsFilter}) =>  {

  // const handleAddSolicitationClick = () => {
  //   this.setState({modalIsOpen: true});
  // }

  // const handleSubmit= (e) => {
  //   console.log('submitted modal: ' + this.refs.id.value + "; " + this.refs.acronym.value)
  //   this.closeModal();
  //   e.preventDefault();
  // }

  const onAddClicked = () => {
    // console.log('Add: ' + JSON.stringify(rowData));
    onAddSolicitation();
    // return onEdit(rowData);
  };

  const actionsFormatter = (cell, row, rowIndex, formatExtraData) => {

    const onEditClicked = (rowData) => {
      console.log('Edit: ' + JSON.stringify(rowData));
      console.log('s^^^^^^^^^^^^^^^ SolicitationTable solicitationsFilter: ' + JSON.stringify(solicitationsFilter));
      onEditSolicitation(rowData, solicitationsFilter);
      // return onEdit(rowData);
    };

    const onDeleteClicked = (rowData) => {
      console.log('Delete: ' + rowData.ASSIGNED_RESPONSE_ID);
      onDeleteSolicitation(rowData, solicitationsFilter);
      // return onDelete(rowData);
    };
    return (
      <div>
        <a className="tableAction" onClick={() => onEditClicked(row)}>
          <i className="fa fa-edit" />
        </a>
        <span>&nbsp;&nbsp;</span>
        <a className="tableAction" onClick={() => onDeleteClicked(row)}>
          <i className="fa fa-times" />
        </a>
      </div>
    );
  };

  const rows = [];
  var lastSearch = null;
  // console.log('%%%%%%%%%%%%%%% solicitaions.length = ' + solicitations.length);
  solicitations.forEach(solicitation => {
    if (solicitation.TITLE !== lastSearch) {
      rows.push(
        <tr key={solicitation.SOLICITATION_ID}>
          <td>{solicitation.SOLICITATION_ID}</td>
          <td>{solicitation.SOLICITATION_NUMBER}</td>
          <td>{solicitation.TITLE}</td>
        </tr>
      );
    } else {
      rows.push(
        <tr key={solicitation.SOLICITATION_ID}>
          <td>{solicitation.SOLICITATION_ID}</td>
          <td>{solicitation.SOLICITATION_NUMBER}</td>
          <td>{solicitation.TITLE}</td>
        </tr>
      );
    }
    lastSearch = solicitation.TITLE;
  });

  {
    /*
    const Table = () => (
    */}

    const columns = [{
      dataField: 'SOLICITATION_NUMBER',
        text: 'Solicitation Number',
        sort: true,
        headerStyle: {
           width: '260px'
        }
      }, {
        dataField: 'FISCAL_YEAR',
        text: 'Fiscal Year',
        sort: true,
        headerStyle: {
           width: '80px'
        }
      }, {
        dataField: 'TITLE',
        text: 'Solicitation Title',
        sort: true,
        filter: textFilter()
      }, {
        dataField: '',
        text: 'Actions',
        formatter: actionsFormatter,
        formatExtraData: {
        },
        headerStyle: {
           width: '5em'
        }

    }];
    const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
}];


    const options = {
      paginationSize: 5,
      pageStartIndex: 1,
      // alwaysShowAllBtns: true, // Always show next and previous button
       withFirstAndLast: true, // Hide the going to First and Last page button
      // hideSizePerPage: true, // Hide the sizePerPage dropdown always
       hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
      firstPageText: 'First',
      prePageText: 'Back',
      nextPageText: 'Next',
      lastPageText: 'Last',
      nextPageTitle: 'First page',
      prePageTitle: 'Pre page',
      firstPageTitle: 'Next page',
      lastPageTitle: 'Last page',
      sizePerPage: 15,
      hideSizePerPage: true, //Hide size per page dropdown until bootstrap4 issues resolved in react-bootstrap-table-next
      sizePerPageList: [{
        text: '15', value: 15
      }, {
        text: '20', value: 20
      }, {
        text: '50', value: 50
      }, {
        text: '1000', value: 1000
      }]
    };


    return (
      <div>
        <div className="row mb-3">
          <div className="col text-right">
          <button className="btn btn-primary" onClick={() => onAddClicked()} >
            <i className="fa fa-plus" aria-hidden="true"></i> Add Solicitation
          </button>
</div>
        </div>
<div className="row">
<div className="col">
<div className="dataTableContainer">
        <BootstrapTable
          keyField="SOLICITATION_ID"
          data={solicitations}
          columns={columns}
          pagination={paginationFactory(options)}
          filter={filterFactory()}
          striped
          hover
          condensed
        />
        </div>
        </div>
        </div>
      </div>
  );
};

// Modal.setAppElement('body');

export default SolicitationTable;

{
  /*
    )

export default Table;
*/
}
