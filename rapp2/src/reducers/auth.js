const auth = (state = {loggedIn: false, username: ''}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
          loggedIn: true,
          username: 'Darth'
        }
        case 'LOGOUT':
      return {
          loggedIn: false,
          username: ''
        }
    default:
      return state
  }
}

export default auth
