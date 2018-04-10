import {
  GET_DETAILS
} from '../../actions/reviewProposalsActions'


const previewDetails = (state = {previewDetails: false}, action) => {
  switch (action.type) {
    case GET_DETAILS: {
      return {
        previewDetails: action.previewFlag
      }
    }
    default:
      return state
  }
}

export default previewDetails
