import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { editProposal, hideModal } from '../../actions/modal/modalActions'
import { updateSolicitationData } from '../../actions/solicitationActions'

import ModalX from './ModalX';
import styled from 'styled-components';
import EditSolicitationForm from '../forms/formik/EditSolicitationForm';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  ${'' /* z-index: 1000; */}
  background-color: rgba(0, 0, 0, 0.65);
`;

const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${'' /* z-index: 10000; */}
  overflow: auto;
  text-align: center;
  overflow-scrolling: touch;
  padding: 4px;
  cursor: pointer;

  &:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    margin-left: -0.05em;
    content: "";
  }
`;

const Dialog = styled.div`
  position: relative;
  outline: 0;
  width: 100%;
  background: white;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  max-width: 1200px;
  cursor: default;
`;

const Header = styled.div`
  padding: 16px 8px 8px 8px;
`;

const Body = styled.div`
  padding-bottom: 16px;
`;

const onOverlayClick = () => {
  hideModal();
};

const onDialogClick = event => {
  event.stopPropagation();
};

class EditSolicitationModal extends Component {

  componentDidMount() {
    const { dispatch, modal } = this.props
    // console.log('### modalProps=' + JSON.stringify(modal.modalProps))
  }


render() {

  const { dispatch, modal } = this.props
  // console.log('###---### modal=' + JSON.stringify(modal))
  const solicitation = modal.modalProps.solicitation
  const filter = modal.modalProps.filter

  // const handleConfirm = (isConfirmed) => () => {
  //   // hideModal();
  //   onConfirm(isConfirmed);
  // };
  //
  // const handleSubmit = (e, dispatch, values) => {
  //   console.log('submitted modal with values: ' + JSON.stringify(values, null, 2));
  //   dispatch(hideModal());
  //   // e.preventDefault();
  // }

  // const doSubmit = (values) => {
  //   console.log('...........submitted modal with values: ' + JSON.stringify(values, null, 2));
  //   dispatch(hideModal());
  //   // e.preventDefault();
  // }


  return (
      <div>
        <Overlay />
        <Content onClick={() => dispatch(hideModal())}>
          <Dialog onClick={onDialogClick}>
            <div className="modal-header">
                <h3 className="modal-title">Edit Solicitation: {decodeURI(solicitation.TITLE)}</h3>
            </div>
            <EditSolicitationForm solicitation={solicitation} filter={filter} hideModal={this.props.onHideModal} updateSolicitation={this.props.onSolicitationUpdate} />
          </Dialog>
        </Content>
      </div>
  );
}
}

const mapStateToProps = state => {
  const { modal } = state
  return {
    modal
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onHideModal:values => dispatch(hideModal()),
  onSolicitationUpdate:(solicitation, filter) => dispatch(updateSolicitationData(solicitation, filter))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditSolicitationModal))
