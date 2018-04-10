import React from 'react'
import { connect } from 'react-redux'

import editProposalModal from './EditProposalModal'
// import deleteProposalModal from './DeleteProposalModal'
// import confirmLogoutModal from './ConfirmLogoutModal'

const MODAL_COMPONENTS = {
  'EDIT_PROPOSAL': editProposalModal
  // 'DELETE_PROPOSAL': deleteProposalModal,
  // 'CONFIRM_LOGOUT': confirmLogoutModal,
  /* other modals */
}

const ModalRoot = ({ modalType, modalProps }) => {
  console.log('modalType=' + modalType);
  console.log('modalProps=' + JSON.stringify(modalProps));
  if (!modalType) {
    //return <span /> // after React v15 you can return null here
    return null // after React v15 you can return null here
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  console.log('*********** modalProps = ' + JSON.stringify(modalProps));
  return <SpecificModal {...modalProps} />;
}

export default connect(
  state => state.modal
)(ModalRoot)