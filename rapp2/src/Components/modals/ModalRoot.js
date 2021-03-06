import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { EDIT_PROPOSAL, DELETE_PROPOSAL, ADD_SOLICITATION, EDIT_SOLICITATION, DELETE_SOLICITATION } from '../../actions/modal/modalActions'

import editProposalModal from './EditProposalModal'
import deleteProposalModal from './DeleteProposalModal'
import addSolicitationModal from './AddSolicitationModal'
import editSolicitationModal from './EditSolicitationModal'
import deleteSolicitationModal from './DeleteSolicitationModal'
// import deleteProposalModal from './DeleteProposalModal'
// import confirmLogoutModal from './ConfirmLogoutModal'

const MODAL_COMPONENTS = {
  EDIT_PROPOSAL: editProposalModal,
  DELETE_PROPOSAL: deleteProposalModal,
  ADD_SOLICITATION: addSolicitationModal,
  EDIT_SOLICITATION: editSolicitationModal,
  DELETE_SOLICITATION: deleteSolicitationModal,
  // 'DELETE_PROPOSAL': deleteProposalModal,
  // 'CONFIRM_LOGOUT': confirmLogoutModal,
  /* other modals */
}

const ModalRoot = ({ modalType, modalProps }) => {
  // console.log('modalType=' + modalType);
  // console.log('modalProps=' + JSON.stringify(modalProps));
  if (!modalType) {
    //return <span /> // after React v15 you can return null here
    return null // after React v15 you can return null here
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  // console.log('*********** modalProps = ' + JSON.stringify(modalProps));
  return <SpecificModal {...modalProps} />;
}

export default withRouter(connect(
  state => state.modal
)(ModalRoot))
