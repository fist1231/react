import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LoginForm from '../../Components/forms/formik/LoginForm'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    position: 'relative',
    outline: '0',
    width: '100%',
    background: 'white',
    display: 'inline-block',
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    maxWidth: '350px',
    cursor: 'default'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
// Modal.setAppElement(document.getElementById('root'));

class LoginModal extends Component {
  // constructor() {
  //   super();
//
  //   this.state = {
  //     modalIsOpen: false
  //   };
  //
  //   this.openModal = this.openModal.bind(this);
  //   this.afterOpenModal = this.afterOpenModal.bind(this);
  //   this.closeModal = this.closeModal.bind(this);
  // }
  //
  // openModal() {
  //   this.setState({modalIsOpen: true});
  // }
  //
  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }
  //
  // closeModal() {
  //   this.setState({modalIsOpen: false});
  // }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          onAfterOpen={this.props.onAfterOpen}
          onRequestClose={this.props.onRequestClose}
          style={customStyles}
          contentLabel={this.props.contentLabel}
          closeModal={this.props.closeModal}
          authenticate={this.props.authenticate}
        >
          <div className="modal-header">

              <h3 className="modal-title">Member Login</h3>
          </div>

          <LoginForm hideModal={this.props.closeModal} authenticate={this.props.authenticate} />
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
