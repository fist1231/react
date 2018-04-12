const auth = (state = {loggedIn: false}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
          loggedIn: true
        }
        case 'LOGOUT':
      return {
          loggedIn: false
        }
    default:
      return state
  }
}

export default auth