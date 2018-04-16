import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

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

class ModalX extends Component {
  constructor() {
    super();
    // this.state = {
    //   modalIsOpen: true
    // };

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


  render () {
    return (
      <Modal
        isOpen={this.modal.modalIsOpen}
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
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-10">
                  <input id="id" ref="id" className="form-control" size="50" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Acronym</label>
                <div className="col-sm-10">
                  <input
                    id="acronym"
                    ref="acronym"
                    className="form-control"
                    size="50"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-auto mr-auto col-form-label">Title</label>
                <div className="col-sm-10">
                  <input id="title" ref="title" className="form-control" size="50" />
                </div>
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
    );
  }
}

export default ModalX;
