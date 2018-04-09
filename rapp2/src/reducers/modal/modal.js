import { SHOW_MODAL, HIDE_MODAL } from '../../actions/modal/modalActions'

const initialState = {
  modalType: null,
  modalProps: {}
}

const modal = (state = initialState, action) => {
  console.log('called modal reducer');
  switch (action.type) {
    case SHOW_MODAL:{
      console.log('show_modal reducer triggered');
      return {
        ...state,
        modalType: action.modalType,
        modalProps: action.modalProps,
        modalIsOpen: true
      }
    }
    case HIDE_MODAL:
      return initialState
    default:
      return state
  }
}

export default modal
