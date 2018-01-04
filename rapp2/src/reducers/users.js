const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          disabled: false
        }
      ]
    case 'INIT_USERS':
      return action.users
    case 'DISABLE_USER':
      return state
      .map(usr => {
        console.log("%%%%%%%%%%%%% " + JSON.stringify(usr));
        return usr;
      })
      .map(usr =>
        (usr.id === action.id)
        ? {...usr, disabled: !usr.disabled}
        : usr
      )
      // .map(usr => {
      //   if(usr.id === action.id) {
      //     usr.disabled = !usr.disabled;
      //     console.log(JSON.stringify(usr));
      //     return usr;
      //   } else {
      //     return usr;
      //   }
      // })
    default:
      return state
  }
}

export default users
