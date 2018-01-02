const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          dissabled: false
        }
      ]
    // case 'DISABLE_USER':
    //   return state.map(user =>
    //     (user.id === action.id)
    //       ? {...user, disabled: true}
    //       : user
    //   )
    default:
      return state
  }
}

export default users
