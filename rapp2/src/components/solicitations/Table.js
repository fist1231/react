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
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Acronym</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <hr/>
        <button onClick={this.handleAddSolicitationClick}>
          Add Solicitation
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Add Solicitation"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Add Solicitation</h2>
          <div>Enter Solicitation Info</div>
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label>Id</label>
      				<input id="id" ref="id" class="form-control" />
      			</div>
            <div class="form-group">
              <label>Acronym</label>
      				<input id="acronym" ref="acronym" class="form-control" />
      			</div>
            <div class="form-group">
              <label>Title</label>
      				<input id="title" ref="title" class="form-control" />
      			</div>
            <div class="form-group">
          		<button class="btn btn-primary w-100" icon="fa-close">Save</button>
          	</div>
          	<div class="form-group">
          		<button type="reset" class="btn btn-secondary w-100" icon="fa-close" onClick={this.closeModal.bind(this)}>Cancel</button>
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
