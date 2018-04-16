import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { map } from 'rxjs/operator/map';

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const EDIT_PROPOSAL = 'EDIT_PROPOSAL'
export const DELETE_PROPOSAL = 'DELETE_PROPOSAL'

export const ADD_SOLICITATION = 'ADD_SOLICITATION'
export const EDIT_SOLICITATION = 'EDIT_SOLICITATION'
export const DELETE_SOLICITATION = 'DELETE_SOLICITATION'

export const editProposal = proposalData => ({
  type: SHOW_MODAL,
  modalType: EDIT_PROPOSAL,
  modalProps: {
    proposal: proposalData
  }
})

export const deleteProposal = proposalData => ({
  type: SHOW_MODAL,
  modalType: DELETE_PROPOSAL,
  modalProps: {
    proposal: proposalData
  }
})

export const addSolicitation = () => ({
  type: SHOW_MODAL,
  modalType: ADD_SOLICITATION,
  modalProps: {
  }
})

export const editSolicitation = solicitationData => ({
  type: SHOW_MODAL,
  modalType: EDIT_SOLICITATION,
  modalProps: {
    solicitation: solicitationData
  }
})

export const deleteSolicitation = solicitationData => ({
  type: SHOW_MODAL,
  modalType: DELETE_SOLICITATION,
  modalProps: {
    solicitation: solicitationData
  }
})

export const hideModal = () => ({
  type: HIDE_MODAL
})
