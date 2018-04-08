import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { map } from 'rxjs/operator/map';

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const EDIT_PROPOSAL = 'EDIT_PROPOSAL'

export const editProposal = id => ({
  type: SHOW_MODAL,
  modalType: EDIT_PROPOSAL,
  modalProps: {
    proposalId: id
  }
})

export const hideModal = () => ({
  type: HIDE_MODAL
})
