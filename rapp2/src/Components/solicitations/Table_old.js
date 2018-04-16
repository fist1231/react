import React, { Component } from 'react'
import Modal from 'react-modal';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
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


class Table extends React.Component {

  constructor(props, onEditSolicitation) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    console.log('____________ props=' + JSON.stringify(props));
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAddSolicitationClick = this.handleAddSolicitationClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.onEditSolicitation = this.props.onEditSolicitation.bind(this);
    console.log('____________ onEditSolicitation=' + JSON.stringify(onEditSolicitation));
    // this.onEditSolicitation = this.onEditSolicitation.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
     this.setState({modalIsOpen:false});
  }

  handleAddSolicitationClick() {
    this.setState({modalIsOpen: true});
  }

  handleSubmit(e) {
    console.log('submitted modal: ' + this.refs.id.value + "; " + this.refs.acronym.value)
    this.closeModal();
    e.preventDefault();
  }


  actionsFormatter(cell, row, rowIndex, formatExtraData) {

    const onEditClicked = (rowData) => {
      console.log('Edit: ' + JSON.stringify(rowData));
      this.onEditSolicitation(rowData);
      // return onEdit(rowData);
    }

    const onDeleteClicked = (rowData) => {
      console.log('Delete: ' + rowData.ASSIGNED_RESPONSE_ID);
      this.props.onDeleteSolicitation(rowData);
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


  render() {

    const rows = [];
    let lastSearch = null;
    console.log('%%%%%%%%%%%%%%% solicitaions.length = ' + this.props.solicitations.length);
    this.props.solicitations.forEach((solicitation) => {
      if (solicitation.acronym !== lastSearch) {
        rows.push(
          <tr key={solicitation.id}>
            <td>{solicitation.id}</td>
            <td>{solicitation.acronym}</td>
            <td>{solicitation.title}</td>
          </tr>
        );
      } else {
        rows.push(
          <tr key={solicitation.id}>
            <td>{solicitation.id}</td>
            <td>{solicitation.acronym}</td>
            <td>{solicitation.title}</td>
          </tr>
        );
      }
      lastSearch = solicitation.acronym;
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
        sort: true
      }, {
        text: 'Actions',
        formatter: this.actionsFormatter,
        formatExtraData: {
        }
    }];

    return (
      <div>
        <BootstrapTable keyField='SOLICITATION_ID' data={ this.props.solicitations } columns={ columns } pagination={ paginationFactory() } striped hover condensed />

{/*
        <BootstrapTable
          data={ this.props.solicitations }
          pagination striped hover search multiColumnSearch tableHeaderClass='nspiresTable'>
          <TableHeaderColumn dataField='SOLICITATION_NUMBER' isKey dataSort>Solicitation Number</TableHeaderColumn>
          <TableHeaderColumn dataField='FISCAL_YEAR' dataSort>FISCAL YEAR</TableHeaderColumn>
          <TableHeaderColumn dataField='TITLE' dataSort>Title</TableHeaderColumn>
          <TableHeaderColumn dataField='SELECTION_DATE' dataSort>SELECTION DATE</TableHeaderColumn>
          <TableHeaderColumn dataField='RELEASE_DATE' dataSort>RELEASE DATE</TableHeaderColumn>
          <TableHeaderColumn dataField='CLOSE_DATE' dataSort>CLOSE DATE</TableHeaderColumn>
        </BootstrapTable>
*/}
{/*
        <hr/>

        <button className="btn btn-primary" onClick={this.handleAddSolicitationClick}>
          Add Solicitation
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Add Solicitation"
        >
          <div className="modal-header">
            <h3
              className="modal-title w-100"
              ref={subtitle => (this.subtitle = subtitle)}
            >
              Add Solicitation
            </h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="modal-body">
              <p>Enter Solicitation Info</p>
              <div className="container-fluid">
                <div className="form-group">
                  <label className="">Id</label>

                    <input id="id" ref="id" className="form-control" size="50" />

                </div>
                <div className="form-group">
                  <label className="">Acronym</label>

                    <input
                      id="acronym"
                      ref="acronym"
                      className="form-control"
                      size="50"
                    />

                </div>
                <div className="form-group">
                  <label className="">Title</label>

                    <input id="title" ref="title" className="form-control" size="50" />

                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="btnContainer">
                <button
                  type="reset"
                  className="btn btn-secondary"
                  icon="fa-close"
                  onClick={this.closeModal.bind(this)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary " icon="fa-close">
                  Save
                </button>
              </div>
            </div>
          </form>
        </Modal>
*/}

      </div>

    );
  }
}

Modal.setAppElement('body');

export default Table;

    {/*
    )

export default Table;
*/}
