import React, { Component } from 'react'
import Modal from 'react-modal';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

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

  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAddSolicitationClick = this.handleAddSolicitationClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    return (
      <div>

        <BootstrapTable className="table nspiresTable"
          data={ this.props.solicitations }
          pagination striped hover search multiColumnSearch>
          <TableHeaderColumn dataField='SOLICITATION_NUMBER' isKey dataSort>Solicitation Number</TableHeaderColumn>
          <TableHeaderColumn dataField='FISCAL_YEAR' dataSort>FISCAL YEAR</TableHeaderColumn>
          <TableHeaderColumn dataField='TITLE' dataSort>Title</TableHeaderColumn>
          <TableHeaderColumn dataField='SELECTION_DATE' dataSort>SELECTION DATE</TableHeaderColumn>
          <TableHeaderColumn dataField='RELEASE_DATE' dataSort>RELEASE DATE</TableHeaderColumn>
          <TableHeaderColumn dataField='CLOSE_DATE' dataSort>CLOSE DATE</TableHeaderColumn>
        </BootstrapTable>


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
