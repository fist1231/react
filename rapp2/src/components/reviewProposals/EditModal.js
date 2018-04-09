import React, { Component } from 'react'
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

class EditModal extends React.Component {

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
    return (

  <Modal
    isOpen={this.state.modalIsOpen}
    onAfterOpen={this.afterOpenModal}
    onRequestClose={this.closeModal}
    style={customStyles}
    contentLabel="Edit Proposal"
  >
    <div className="modal-header">
        <h3 className="modal-title w-100" ref={subtitle => this.subtitle = subtitle}>Edit Proposal</h3>
    </div>
    <form onSubmit={this.handleSubmit}>

      <div className="modal-body">
        <p>Edit Proposal Info</p>
        <div className="container-fluid">

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Id</label>
            <div className="col-sm-10">
              <input id="id" ref="id" className="form-control" size="50" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Number</label>
            <div classname="col-sm-10">
              <input id="acronym" ref="number" className="form-control" size="50"/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-auto mr-auto col-form-label">Status</label>
            <div classname="col-sm-10">
              <input id="status" ref="title" className="form-control" size="50" />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="btnContainer">
          <button type="reset" className="btn btn-secondary" icon="fa-close" onClick={this.closeModal.bind(this)}>Cancel</button>
          <button className="btn btn-primary " icon="fa-close">Save</button>
        </div>
      </div>

    </form>

  </Modal>
  )
  }
}

Modal.setAppElement('body');

export default EditModal
