import React, { Component } from 'react'
import Modal from 'react-modal';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


const SolicitationTable = ({solicitations, onAddSolicitation, onEditSolicitation, onDeleteSolicitation}) =>  {

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
  }

  const actionsFormatter = (cell, row, rowIndex, formatExtraData) => {

    const onEditClicked = (rowData) => {
      console.log('Edit: ' + JSON.stringify(rowData));
      onEditSolicitation(rowData);
      // return onEdit(rowData);
    }

    const onDeleteClicked = (rowData) => {
      console.log('Delete: ' + rowData.ASSIGNED_RESPONSE_ID);
      onDeleteSolicitation(rowData);
      // return onDelete(rowData);
    }
    return (
      <div>
        <a className="tableAction" onClick={() => onEditClicked(row)}><i className='fa fa-edit'></i></a>
        <span>&nbsp;&nbsp;</span>
        <a className="tableAction" onClick={() => onDeleteClicked(row)}><i className='fa fa-trash'></i></a>
      </div>
    );
  }



    const rows = [];
    var lastSearch = null;
    console.log('%%%%%%%%%%%%%%% solicitaions.length = ' + solicitations.length);
    solicitations.forEach((solicitation) => {
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

    {/*
    const Table = () => (
    */}

    const columns = [{
      dataField: 'SOLICITATION_NUMBER',
        text: 'Solicitation Number',
        sort: true
      }, {
        dataField: 'FISCAL_YEAR',
        text: 'Fiscal Year',
        sort: true
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
        }
        
    }];
    const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
}];


    return (
      <div>
        <div className="row mb-3">
          <div className="col text-right">
          <button className="btn btn-primary" onClick={() => onAddClicked()} >
            <i class="fa fa-plus" aria-hidden="true"></i> Add Solicitation
          </button>
        </div>
        </div>
        <BootstrapTable keyField='SOLICITATION_NUMBER' data={ solicitations } defaultSorted={ defaultSorted }  columns={ columns } pagination={ paginationFactory() }  filter={ filterFactory() } striped hover condensed />
      </div>
    );
}

// Modal.setAppElement('body');

export default SolicitationTable;

    {/*
    )

export default Table;
*/}
