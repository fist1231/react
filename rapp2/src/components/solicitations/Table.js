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
          <form>
            <div class="form-group">
              <label for="id">Id</label>
      				<input id="id" class="form-control" />
      			</div>
            <div class="form-group">
              <label for="acronym">Acronym</label>
      				<input id="acronym" class="form-control" />
      			</div>
            <div class="form-group">
              <label for="title">Title</label>
      				<input id="title" class="form-control" />
      			</div>
            <div class="form-group">
          		<button type="submit" class="btn btn-primary w-100" icon="fa-close">Save</button>
          	</div>
          	<div class="form-group">
          		<button type="reset" class="btn btn-secondary w-100" icon="fa-close" onClick={this.closeModal}>Cancel</button>
          	</div>
          </form>
        </Modal>

      </div>

    );
  }
}

export default Table;

    {/*
    )

export default Table;
*/}
